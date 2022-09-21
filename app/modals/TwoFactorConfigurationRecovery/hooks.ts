import { FormikConfig, useFormik } from 'formik';

import { TwoFactorConfigurationRecoverySchema } from './validation';
import { FormValues } from './types';

// TODO: Add locale on Yup validation
export const useForm = (config?: FormikConfig<FormValues>) =>
  useFormik<FormValues>({
    initialValues: {
      safelyRecorded: false,
    },
    onSubmit: () => {},
    validateOnMount: true,
    validationSchema: TwoFactorConfigurationRecoverySchema,
    ...config,
  });
