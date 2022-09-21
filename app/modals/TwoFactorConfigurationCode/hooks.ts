import { FormikConfig, useFormik } from 'formik';
import { translate, TxKeyPath } from '@app/i18n';
import { TwoFactorConfigurationCodeSchema } from './validation';
import { FormValues } from './types';

// TODO: Add locale on Yup validation
export const useForm = (config?: FormikConfig<FormValues>) =>
  useFormik<FormValues>({
    initialValues: {
      oneTimeCode: '',
    },
    onSubmit: () => {},
    validateOnMount: true,
    validationSchema: TwoFactorConfigurationCodeSchema,
    ...config,
  });

export const getHintText = (key: TxKeyPath, value: string): string =>
  value.length > 0 ? translate(key) : '';
