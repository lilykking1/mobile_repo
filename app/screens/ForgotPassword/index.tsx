import React, { FC, useCallback, useRef, useState } from 'react';
import {
  Keyboard,
  TextInput as NativeTextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import {
  Button,
  Icon,
  Typography,
  StickyHeader,
  TextInput,
  SafeArea,
} from '@app/components';
import { translate } from '@app/i18n';
import { Routes } from '@app/navigation/types';

import { palette } from '@app/theme';
import { getErrors, useForm, getInputHintValue } from './utils';
import styles from './styles';

const ForgotPassword: FC = () => {
  const navigation = useNavigation<NavigationProp<Routes>>();
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const emailRef = useRef<NativeTextInput>();
  const envelopeIcon = <Icon.Envelope />;

  const { isValid, handleChange, handleSubmit, errors, values } = useForm();

  const hintTextValue = getInputHintValue(isEmailFocused, values);

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSignInPress = useCallback(() => {
    handleSubmit();
    Keyboard.dismiss();
    navigation.navigate('EmailConfirmation', {
      title: translate('screens.forgotPassword.checkEmail.title'),
      subtitle: translate('screens.forgotPassword.checkEmail.subtitle', {
        email: values.email,
      }),
    });
  }, [handleSubmit, navigation, values.email]);

  const errorHandler = getErrors(errors, values, isEmailFocused);

  return (
    <SafeArea altLight={palette.white}>
      <StickyHeader
        Title={(
          <Typography strong size="h6">
            {translate('screens.forgotPassword.title')}
          </Typography>
        )}
        handleBackPress={handleBackPress}
        arrowLeft
        altLight={palette.white}
      />
      <View style={styles.container}>
        <Typography strong style={styles.titleScreen}>
          {translate('screens.forgotPassword.text.instructions')}
        </Typography>
        <TextInput
          icon={envelopeIcon}
          touched
          keyboardType="email-address"
          outline
          autoCapitalize="none"
          placeholder={translate('fields.email.title')}
          blurOnSubmit={false}
          value={values.email}
          error={errorHandler.email.isError}
          helperText={errorHandler.email.message}
          onChangeText={handleChange('email')}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
          hintText={hintTextValue.email}
          ref={emailRef}
        />
      </View>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.container}>
          <Button
            size="large"
            variant="primary"
            label={translate('screens.forgotPassword.action.continue')}
            style={styles.buttonStyle}
            onPress={handleSignInPress}
            disabled={!isValid}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeArea>
  );
};

export default ForgotPassword;
