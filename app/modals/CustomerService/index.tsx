import React, { FC } from 'react';
import { Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/core';
import { observer } from 'mobx-react';

import { SafeArea, StickyHeader, Typography } from '@app/components';
import useStickyHandler from '@app/hooks/useStickyHandler';
import type { Routes } from '@app/navigation/types';
import { translate } from '@app/i18n';
import { palette } from '@app/theme';
import { AmplitudeKycEvents, logAmplitudeEvent } from '@app/utils/amplitude';

import { FormValues } from './types';
import Form from './fragments/Form';
import { useForm } from './hooks';
import styles from './styles';

const CustomerService: FC = () => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const { scroll } = useStickyHandler(undefined);

  // TODO: add BE integration
  const handleSubmit = (values: FormValues) => {
    logAmplitudeEvent(
      AmplitudeKycEvents.CLICK_VERIFICATION_FAILURE_CUSTOMER_SERVICE
    );
    const body = `
        Customer Service: ${values.customerService}
      `;
    Alert.alert('Customer Service submitted', body);
  };

  const {
    handleBlur,
    handleChange,
    handleSubmit: submitFormik,
    errors,
    touched,
    values,
  } = useForm(handleSubmit);

  const title = (
    <Typography strong size="h2">
      {translate('modals.customerService.title')}
    </Typography>
  );

  return (
    <SafeArea
      altLight={palette.white}
      edges={['top', 'bottom']}
      style={styles.container}
    >
      <StickyHeader
        scroll={scroll}
        altLight={palette.white}
        handleBackPress={navigation.goBack}
        BottomTitle={title}
        hasInlineBottomComponents
      />
      <Form
        values={values}
        errors={errors}
        touched={touched}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmit={submitFormik}
      />
    </SafeArea>
  );
};

export default observer(CustomerService);
