import { FormikProps, useFormik } from 'formik';

import { CustomerServiceSchema } from './validation';
import { FormValues } from './types';

export const useForm = (
  handeSubmit: (values: FormValues) => void
): FormikProps<FormValues> =>
  useFormik<FormValues>({
    initialValues: {
      customerService: '',
    },
    onSubmit: (values, helpers) => {
      handeSubmit(values);
      helpers.resetForm({});
    },
    validateOnMount: true,
    validationSchema: CustomerServiceSchema,
  });
