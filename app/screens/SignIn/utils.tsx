import { FormikConfig, FormikErrors, useFormik } from 'formik';
import React from 'react';
import { authentication } from '@app/auth';
import { Icon } from '@app/components';
import { translate } from '@app/i18n';

import { AmplitudeAuthEvents, logAmplitudeEvent } from '@app/utils/amplitude';
import { SignInSchema } from './validation';
import { FormValues } from './types';

// TODO: Add locale on Yup validation
export const useForm = (
  {
    setCredentialsValid,
    signInUser,
    updateBrazeUser,
    setIsLoading,
  }: {
    setCredentialsValid: (value: boolean) => void;
    signInUser: (value: string) => void;
    updateBrazeUser: (value: string) => void;
    setIsLoading: (value: boolean) => void;
  },
  config?: FormikConfig<FormValues>
) =>
  useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        setCredentialsValid(true);
        setIsLoading(true);

        await authentication(values);
        setIsLoading(false);
        signInUser(values.email);
        logAmplitudeEvent(AmplitudeAuthEvents.LOGIN_SUCCESSFUL);
        updateBrazeUser(values.email);
      } catch {
        setIsLoading(false);
        setCredentialsValid(false);
      }
    },
    validateOnMount: true,
    validateOnBlur: true,
    validationSchema: SignInSchema,
    ...config,
  });

export const getInputHintValue = (
  isEmailInputFocused: boolean,
  isPasswordInputFocused: boolean,
  values: FormValues
) => {
  let email = '';
  let password = '';

  const isEmailFocused = isEmailInputFocused || values.email;
  const isPasswordFocused = isPasswordInputFocused || values.email;

  if (isEmailFocused) {
    email = translate('screens.signIn.signInForm.formTitles.email');
  }

  if (isPasswordFocused) {
    password = translate('screens.signIn.signInForm.formTitles.password');
  }

  return { email, password };
};

export const getPasswordEyeIcon = (secureTextEntry: boolean) =>
  secureTextEntry ? <Icon.EyeClosed /> : <Icon.EyeOpen />;

export const getErrors = (
  errors: FormikErrors<FormValues>,
  values: FormValues,
  isEmailFocused: boolean
) => {
  let email = { message: '', isError: false };

  const isEmailInvalid = !isEmailFocused && values.email && errors.email;

  if (isEmailInvalid) {
    email = { message: errors.email, isError: true };
  }

  return { email };
};
