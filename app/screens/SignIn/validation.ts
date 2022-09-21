import * as yup from 'yup';
import { validateEmail } from '@app/utils/validation';

export const SignInSchema = yup.object().shape({
  email: validateEmail,
});
