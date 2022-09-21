import * as yup from 'yup';
import { translate } from '@app/i18n';
import {
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
  validateFullName,
} from '@app/utils/validation';

export const SignUpSchema = yup.object().shape({
  name: validateFullName,
  email: validateEmail,
  password: validatePassword,
  confirmPassword: validatePasswordConfirmation,
  country: yup
    .string()
    .required(
      translate('screens.signUp.signupForm.validations.countryRequired')
    ),
  state: yup.string(),
  isAgreementChecked: yup
    .boolean()
    .required('screens.signUp.signupForm.validations.agreementAccepted')
    .oneOf([true], 'screens.signUp.signupForm.validations.agreementAccepted'),
});
