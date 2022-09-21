import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { observer } from 'mobx-react';

import {
  ReCaptchaComponent,
  SafeArea,
  Spinner,
  StickyHeader,
  Tooltip,
  Typography,
} from '@app/components';
import { TooltipVariant } from '@app/components/Tooltip/types';
import useStickyHandler from '@app/hooks/useStickyHandler';
import type { Routes } from '@app/navigation/types';
import { translate } from '@app/i18n';
import { palette } from '@app/theme';
import { Alert } from 'react-native';
import { logAmplitudeEvent } from '@app/utils/amplitude';
import { AmplitudeSettingsEvents } from '@app/utils/amplitude/constants';
import {
  RECAPTCHA_FEEDBACK_DOMAIN,
  RECAPTCHA_FEEDBACK_KEY,
  TIMEOUT_LOADING_IN_MS,
  TOOLTIP_INTERVAL_IN_MS,
} from './constants';
import { FormValues } from './types';
import Form from './fragments/Form';
import { useForm } from './hooks';
import styles from './styles';
import {
  getApprovedByRecaptcha,
  getTooltipText,
  submitFeedback,
} from './utils';

const Feedback: FC = () => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const { scroll } = useStickyHandler(undefined);

  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isApprovedByRecaptcha, setIsApprovedByRecaptcha] = useState(false);
  const [reCaptchaToken, setReCaptchaToken] = useState('');
  const [tooltipVariant, setTooltipVariant] = useState<TooltipVariant>(
    TooltipVariant.SUCCESS
  );

  useEffect(() => {
    const id = setTimeout(() => {
      if (isTooltipDisplayed) {
        setIsTooltipDisplayed(false);
      }
    }, TOOLTIP_INTERVAL_IN_MS);

    return () => clearTimeout(id);
  }, [isTooltipDisplayed]);

  useEffect(() => {
    const id = setTimeout(() => {
      if (isLoading && reCaptchaToken === '') {
        Alert.alert('Loading Timeout');
        navigation.goBack();
      }
    }, TIMEOUT_LOADING_IN_MS);
    return () => clearTimeout(id);
  }, [isLoading, navigation, reCaptchaToken]);

  const handleSubmit = async (values: FormValues) => {
    const submitFeedbackSuccess = await submitFeedback(values);

    if (submitFeedbackSuccess) {
      setTooltipVariant(TooltipVariant.SUCCESS);
    } else {
      // TODO: callback when there is an error
      setTooltipVariant(TooltipVariant.ERROR);
    }
  };

  const {
    handleBlur,
    handleChange,
    handleSubmit: submitFormik,
    errors,
    touched,
    values,
  } = useForm(handleSubmit);

  const handleFormSubmit = async () => {
    logAmplitudeEvent(AmplitudeSettingsEvents.CLICK_SUBMIT_FEEDBACK);

    setIsLoading(true);
    const approvedByRecaptcha = await getApprovedByRecaptcha(reCaptchaToken);
    setIsApprovedByRecaptcha(approvedByRecaptcha);

    if (approvedByRecaptcha) {
      await submitFormik();
    } else {
      // TODO: callback when there is an error
      setTooltipVariant(TooltipVariant.ERROR);
    }

    setIsTooltipDisplayed(true);
    setIsLoading(false);
  };

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleOnTokenReceived = useCallback((token: string) => {
    setIsLoading(false);
    setReCaptchaToken(token);
  }, []);

  const tooltip = useMemo(
    () => (
      <Tooltip
        isAnimated
        showTooltip={isTooltipDisplayed}
        text={getTooltipText(tooltipVariant, isApprovedByRecaptcha)}
        variant={tooltipVariant}
      />
    ),
    [isApprovedByRecaptcha, isTooltipDisplayed, tooltipVariant]
  );
  const RenderTitle = (
    <Typography strong size="h2">
      {translate('settings.action.feedback.title')}
    </Typography>
  );
  const RenderLoading = <Spinner style={styles.spinner} size="large" />;

  return (
    <SafeArea
      altLight={palette.white}
      edges={['top', 'bottom']}
      style={styles.container}
    >
      <StickyHeader
        scroll={scroll}
        altLight={palette.white}
        handleBackPress={handleBackPress}
        BottomTitle={RenderTitle}
        BottomRight={tooltip}
        hasInlineBottomComponents
      />

      <ReCaptchaComponent
        siteKey={RECAPTCHA_FEEDBACK_KEY}
        captchaDomain={RECAPTCHA_FEEDBACK_DOMAIN}
        onTokenReceived={handleOnTokenReceived}
      />

      <Form
        values={values}
        errors={errors}
        touched={touched}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmit={handleFormSubmit}
      />
      {isLoading && RenderLoading}
    </SafeArea>
  );
};

export default observer(Feedback);
