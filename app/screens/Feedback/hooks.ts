import { useContext } from 'react';
import { FormikProps, useFormik } from 'formik';

import { RootContext } from '@app/state';

import { FeedbackSchema } from './validation';
import { FormValues } from './types';

export const useForm = (
  handeSubmit: (values: FormValues) => void
): FormikProps<FormValues> => {
  const {
    authStore: { firstName, email },
  } = useContext(RootContext);

  return useFormik<FormValues>({
    initialValues: {
      email: email || '',
      name: firstName || '',
      feedback: '',
    },
    onSubmit: (values, helpers) => {
      handeSubmit(values);
      helpers.resetForm({});
    },
    validateOnMount: true,
    validationSchema: FeedbackSchema,
  });
};
