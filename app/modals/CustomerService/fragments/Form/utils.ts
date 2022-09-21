import { FormikErrors } from 'formik';
import { isEmpty } from 'lodash';

import { FormValues } from '../../types';

export const getIsFormInvalid = (
  values: FormValues,
  errors: FormikErrors<FormValues>
): boolean => {
  const customerServiceIsInvalid =
    !isEmpty(errors.customerService) || isEmpty(values.customerService);

  return customerServiceIsInvalid;
};

export const getHelperText = (
  helperText: string,
  isAlreadyTouched: boolean
): string => (isAlreadyTouched ? helperText : '');
