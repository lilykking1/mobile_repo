import { useFormik, FormikProps } from 'formik';
import { translate, TxKeyPath } from '@app/i18n';
import { changePasswordSchema } from '@app/utils/resetPasswordValidations';
import { FormValues } from './types';
import { HAS_CURRENT_PASSWORD_FIELD } from './constants';

export const useForm = (onSubmit: () => void): FormikProps<FormValues> =>
  useFormik<FormValues>({
    initialValues: {
      newPassword: '',
      repeatNewPassword: '',
    },
    onSubmit,
    validateOnMount: true,
    validationSchema: changePasswordSchema(HAS_CURRENT_PASSWORD_FIELD),
  });

export const getHintText = (key: TxKeyPath, value: string): string =>
  value.length > 0 ? translate(key) : '';
