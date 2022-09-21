import { translate } from '@app/i18n';
import * as yup from 'yup';
import {
  HAS_LEAST_ONE_CAPITAL_LETTER_REGEX,
  HAS_LEAST_ONE_LOWERCASE_REGEX,
  HAS_LEAST_ONE_NUMBER_REGEX,
  HAS_LEAST_ONE_SPECIAL_CHAR_REGEX,
  VALIDATE_FULLNAME_HAS_FIRSTNAME_AND_LASTNAME,
} from './constants';

export const validateEmail = yup
  .string()
  .email(translate('validations.email.notValid'))
  .required(translate('validations.email.isRequired'));
/**
 * Password Rules
 * @param [A-Z] At least one upper case
 * @param [a-z] At least one lower case
 * @param [0-9] At least one number
 * @param [!@$%^&*(){}[\]:;<>,.?~`"'\-_+-=|/\\] At least one symbol
 */

export const validatePassword = yup
  .string()
  .required('')
  .min(6, translate('modals.changePassword.errorNotMatchRuleMinLength'))
  .matches(
    HAS_LEAST_ONE_CAPITAL_LETTER_REGEX,
    translate('modals.changePassword.errorNotMatchRuleCapital')
  )
  .matches(
    HAS_LEAST_ONE_NUMBER_REGEX,
    translate('modals.changePassword.errorNotMatchRuleNumber')
  )
  .matches(
    HAS_LEAST_ONE_SPECIAL_CHAR_REGEX,
    translate('modals.changePassword.errorNotMatchRuleSpecialChar')
  )
  .matches(
    HAS_LEAST_ONE_LOWERCASE_REGEX,
    translate('modals.changePassword.errorNotMatchRuleLowercase')
  );

export const validatePasswordConfirmation = yup
  .string()
  .oneOf(
    [yup.ref('password'), null],
    translate('validations.password.confirmMustMatch')
  )
  .required(translate('validations.password.confirmIsRequired'));

export const validateFullName = yup
  .string()
  .matches(
    VALIDATE_FULLNAME_HAS_FIRSTNAME_AND_LASTNAME,
    translate('validations.fullName.nameAndLastName')
  )
  .required(translate('screens.signUp.signupForm.validations.nameRequired'));

export const validateOneTimeCode = yup
  .string()
  .length(6, translate('validations.oneTimeCode.size'))
  .matches(/\b\d{6}\b/, translate('validations.oneTimeCode.rules'))
  .required(translate('validations.oneTimeCode.isRequired'));

export const filterOneTimeCode = async (value: string): Promise<string> => {
  try {
    const isValid = await validateOneTimeCode.isValid(value);

    return isValid ? value : undefined;
  } catch (err) {
    return undefined;
  }
};
