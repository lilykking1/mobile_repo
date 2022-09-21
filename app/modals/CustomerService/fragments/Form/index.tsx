import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Keyboard, TextInput as NativeTextInput, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { FormikErrors, FormikTouched } from 'formik';

import { Button, Typography } from '@app/components';
import { Routes } from '@app/navigation/types';
import { translate } from '@app/i18n';
import { useBraze } from '@app/hooks';
import { AmplitudeKycEvents, logAmplitudeEvent } from '@app/utils/amplitude';
import { BrazeBuildMyPortfolioEvents } from '@app/utils/braze/events';

import { FormikHandleBlur, FormikHandleChange, FormValues } from '../../types';
import styles from './styles';
import FeedbackInput from './components/FeedbackInput';
import { getHelperText, getIsFormInvalid } from './utils';

interface FormProps {
  values: FormValues;
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
  handleBlur: FormikHandleBlur;
  handleChange: FormikHandleChange;
  handleSubmit: () => void;
}

const Form: React.FC<FormProps> = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
}) => {
  const { logBrazeCustomEvent } = useBraze();
  const navigation = useNavigation<NavigationProp<Routes>>();
  const customerServiceRef = useRef<NativeTextInput>();

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  useEffect(() => {
    const isFormInvalid = getIsFormInvalid(values, errors);
    setIsSubmitButtonDisabled(isFormInvalid);
  }, [errors, values]);

  const handleFeedbackSubmitEditing = useCallback(() => {
    customerServiceRef.current.blur();
    Keyboard.dismiss();
  }, []);

  const onPressHandleFeedbackSubmit = () => {
    logBrazeCustomEvent(
      BrazeBuildMyPortfolioEvents.CLICK_CUSTOMER_SERVICE_SUBMIT_REQUEST
    );
    logAmplitudeEvent(AmplitudeKycEvents.CLICK_CUSTOMER_SERVICE_SUBMIT_REQUEST);
    handleSubmit();
    navigation.navigate('SuccessSubmission');
  };

  return (
    <View style={styles.form}>
      <View style={styles.headerContainer}>
        <Typography size="h5" strong>
          {translate('modals.customerService.subtitle')}
        </Typography>
      </View>

      <View style={styles.formContainer}>
        <FeedbackInput
          value={values.customerService}
          defaultValue={values.customerService}
          error={!!errors.customerService}
          helperText={getHelperText(
            errors.customerService,
            touched.customerService
          )}
          touched={touched.customerService}
          onBlur={handleBlur('customerService')}
          onChangeText={handleChange('customerService')}
          ref={customerServiceRef}
          onSubmitEditing={handleFeedbackSubmitEditing}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          variant="green"
          label={translate('modals.customerService.actions.submit')}
          disabled={isSubmitButtonDisabled}
          onPress={onPressHandleFeedbackSubmit}
          useVariantDisabledColor={false}
        />
      </View>
    </View>
  );
};

export default Form;
