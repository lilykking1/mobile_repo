import { FormikConfig, FormikProps, useFormik } from 'formik';

import { ProfileSchema } from './validation';
import { FormValues } from './types';

// TODO: Add locale on Yup validation
export const useForm = (
  config?: FormikConfig<FormValues>
): FormikProps<FormValues> =>
  useFormik<FormValues>({
    initialValues: {
      email: '',
      fullName: '',
    },
    onSubmit: () => {},
    validateOnMount: true,
    validationSchema: ProfileSchema,
    ...config,
  });
