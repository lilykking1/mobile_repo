import * as yup from 'yup';

import { validateEmail } from '@app/utils/validation';

export const ForgotPasswordSchema = yup.object().shape({
  email: validateEmail,
});
