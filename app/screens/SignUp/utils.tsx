import { FormikConfig, useFormik } from 'formik';
import React from 'react';
import { TextStyle } from 'react-native';
import { Icon } from '@app/components';
import { register } from '@app/auth';
import { palette } from '@app/theme';
import { Theme } from '@app/state/stores/settings/types';
import { AmplitudeAuthEvents, logAmplitudeEvent } from '@app/utils/amplitude';
import { logAppsFlyerEvent } from '@app/utils/appsflyer';
import { AppsFlyerAuthEvents } from '@app/utils/appsflyer/events';
import { useBraze } from '@app/hooks';
import { BrazeAuthenticationEvents } from '@app/utils/braze/events';
import { SignUpSchema } from './validation';
import { FormValues, SelectorType } from './types';
import { states } from '../../modals/LocationSelector/mock';
import styles from './styles';
import {
  TITLE_MARGIN_EMAIL,
  TITLE_MARGIN_PASSWORD,
  TITLE_MARGIN_PASSWORD_CONFIRMATION,
  TITLE_MARGIN_NAME,
} from './constants';

export const useForm = (
  {
    setIsCredentialsValid,
    signInUser,
    handleEmailConfirmation,
  }: {
    setIsCredentialsValid: (value: boolean) => void;
    signInUser: (value: string) => void;
    handleEmailConfirmation: () => void;
  },
  config?: FormikConfig<FormValues>
) => {
  const { logBrazeCustomEvent } = useBraze();
  return useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      country: '',
      state: '',
      isAgreementChecked: false,
      emailOptedIn: true,
    },
    onSubmit: async (values) => {
      try {
        setIsCredentialsValid(true);
        await register(values);
        logAppsFlyerEvent(AppsFlyerAuthEvents.SIGNUP);
        signInUser(values.email);
        handleEmailConfirmation();
        logAmplitudeEvent(AmplitudeAuthEvents.SIGNUP_SUCCESSFUL);
        logBrazeCustomEvent(BrazeAuthenticationEvents.SUCCESSFUL_SIGNUP);
      } catch {
        setIsCredentialsValid(false);
      }
    },
    validateOnMount: true,
    validateOnChange: true,
    validationSchema: SignUpSchema,
    ...config,
  });
};

const isDarkMode = (theme: Theme): boolean => theme === 'dark';

export const getPasswordEyeIcon = (secureTextEntry: boolean) =>
  secureTextEntry ? <Icon.EyeClosed /> : <Icon.EyeOpen />;

export const getPasswordConfirmationEyeIcon = (secureTextEntry: boolean) =>
  secureTextEntry ? <Icon.EyeClosed /> : <Icon.EyeOpen />;

export const getErrors = (errors: FormValues, values: FormValues) => {
  let email = { message: '', isError: false };
  let password = { message: '', isError: false };
  let confirmPassword = { message: '', isError: false };
  let name = { message: '', isError: false };

  const isEmailInvalid = values.email && errors.email;
  const isPasswordInvalid = values.password && errors.password;
  const isPasswordConfirmationValid =
    values.confirmPassword && errors.confirmPassword;
  const isNameValid = values.name && errors.name;

  if (isEmailInvalid) {
    email = { message: errors.email, isError: true };
  }

  if (isPasswordInvalid) {
    password = { message: errors.password, isError: true };
  }

  if (isPasswordConfirmationValid) {
    confirmPassword = {
      message: errors.confirmPassword,
      isError: true,
    };
  }

  if (isNameValid) {
    name = { message: errors.name, isError: true };
  }

  return { email, password, confirmPassword, name };
};

export const getSelectedValue = (
  selectorType: SelectorType,
  values: FormValues
) => {
  if (selectorType === 'country') {
    return values.country;
  }

  return values.state;
};

export const countryHasStates = (selectedCountry: string) => {
  if (states[selectedCountry]) {
    return true;
  }

  return false;
};

export const getOpenKeyboardStyle = (isKeyboardVisible: boolean) => {
  if (isKeyboardVisible) {
    return {
      footer: styles.footerKeyboardOpen,
      scrollView: styles.scrollKeyboardOpen,
    };
  }

  return {
    footer: styles.footer,
    scrollView: styles.scrollViewStyle,
  };
};

export const getTitleMarginTop = (inputSelected: string) => {
  switch (inputSelected) {
    case 'email':
      return TITLE_MARGIN_EMAIL;
    case 'password':
      return TITLE_MARGIN_PASSWORD;
    case 'passwordConfirmation':
      return TITLE_MARGIN_PASSWORD_CONFIRMATION;
    case 'name':
      return TITLE_MARGIN_NAME;
    default:
      return 0;
  }
};

export const getSpaceBehavior = (country: string, formHasValue: boolean) => {
  if (formHasValue) {
    if (country === 'USA') {
      return { height: 30 };
    }

    return { height: 100 };
  }

  return {};
};

export const getFormHasValue = (values: FormValues) => {
  const { email, password, confirmPassword, name, country, state } = values;

  if (email || password || confirmPassword || name || country || state) {
    return true;
  }

  return false;
};

export const getLocationLabelStyle = (theme: Theme): TextStyle => {
  if (isDarkMode(theme)) {
    return {
      color: palette.grey[300],
    };
  }
  return {
    color: palette.royalBlue[900],
  };
};
