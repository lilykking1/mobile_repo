import { useFormik, FormikProps } from 'formik';

import { postNewPassword } from '@app/modals/ChangePassword/utils';
import { changePasswordSchema } from '@app/utils/resetPasswordValidations';
import { FormValues } from './types';
import { HAS_CURRENT_PASSWORD_FIELD } from './constants';

export const useForm = (
  onChangePassword: (result: boolean) => void
): FormikProps<FormValues> =>
  useFormik<FormValues>({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      repeatNewPassword: '',
    },
    onSubmit: () => {
      postNewPassword()
        .then(() => onChangePassword(true))
        .catch(() => onChangePassword(false));
    },
    validateOnMount: true,
    validationSchema: changePasswordSchema(HAS_CURRENT_PASSWORD_FIELD),
  });
