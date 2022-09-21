import { FormikErrors } from 'formik';
import { isEmpty } from 'lodash';

import { FormValues } from '../../types';

export const getHintText = (title: string, value: string): string =>
  value.length > 0 ? title : '';

export const getIsFormInvalid = (
  values: FormValues,
  errors: FormikErrors<FormValues>
): boolean => {
  const nameIsInvalid = !isEmpty(errors.name) || isEmpty(values.name);
  const emailIsInvalid = !isEmpty(errors.email) || isEmpty(values.email);
  const feedbackIsInvalid =
    !isEmpty(errors.feedback) || isEmpty(values.feedback);

  return nameIsInvalid || emailIsInvalid || feedbackIsInvalid;
};

export const getHelperText = (
  helperText: string,
  isAlreadyTouched: boolean
): string => (isAlreadyTouched ? helperText : '');
