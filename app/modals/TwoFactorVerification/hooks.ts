import { Alert } from 'react-native';
import { FormikConfig, useFormik } from 'formik';
import { translate, TxKeyPath } from '@app/i18n';
import { TwoFactorVerificationSchema } from './validation';
import { FormValues } from './types';

// TODO: Add locale on Yup validation
export const useForm = (config?: FormikConfig<FormValues>) =>
  useFormik<FormValues>({
    initialValues: {
      oneTimeCode: '',
    },
    onSubmit: () => {
      Alert.alert('TwoFactorVerificationForm Submitted');
    },
    validateOnMount: true,
    validationSchema: TwoFactorVerificationSchema,
    ...config,
  });

export const getHintText = (key: TxKeyPath, value: string): string =>
  value.length > 0 ? translate(key) : '';
