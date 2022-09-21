import { Alert } from 'react-native';
import { FormikErrors, useFormik } from 'formik';

import { FormValues, FormErrors } from './types';
import { ForgotPasswordSchema } from './validation';

export const useForm = () =>
  useFormik<FormValues>({
    initialValues: {
      email: '',
    },
    onSubmit: () => {
      Alert.alert('ForgotPasswordForm Submitted');
    },
    validateOnMount: true,
    validationSchema: ForgotPasswordSchema,
  });

export const getInputHintValue = (
  isEmailInputFocused: boolean,
  values: FormValues
): FormValues => {
  let email = '';

  const isEmailFocused = isEmailInputFocused || values.email;

  if (isEmailFocused) {
    email = 'Email';
  }

  return { email };
};

export const getErrors = (
  errors: FormikErrors<FormValues>,
  values: FormValues,
  isEmailFocused: boolean
): FormErrors => {
  let email = { message: '', isError: false };

  const isEmailInvalid = !isEmailFocused && values.email && errors.email;

  if (isEmailInvalid) {
    email = { message: errors.email, isError: true };
  }

  return { email };
};
