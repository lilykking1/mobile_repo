import { translate, TxKeyPath } from '@app/i18n';
import { ErrorTypeNewPassword } from '@app/modals/ChangePassword/types';
import {
  HAS_LEAST_ONE_CAPITAL_LETTER_REGEX,
  HAS_LEAST_ONE_SPECIAL_CHAR_REGEX,
} from '../../utils/constants';

const hasLeastOneCapitalLetter = (text: string): boolean =>
  new RegExp(HAS_LEAST_ONE_CAPITAL_LETTER_REGEX).test(text);

const hasLeastOneSpecialChar = (text: string): boolean =>
  new RegExp(HAS_LEAST_ONE_SPECIAL_CHAR_REGEX).test(text);

export const getHelperTextCurrentPassword = (
  isNotMatchWithCurrentPass: boolean
): string =>
  isNotMatchWithCurrentPass
    ? translate('modals.changePassword.errorIncorrectPassword')
    : '';

export const getErrorNewPassword = (password: string): ErrorTypeNewPassword => {
  if (!hasLeastOneCapitalLetter(password)) {
    return ErrorTypeNewPassword.MISSING_CAPITAL_CHAR;
  }
  if (!hasLeastOneSpecialChar(password)) {
    return ErrorTypeNewPassword.MISSING_SPECIAL_CHAR;
  }

  return undefined;
};

export const getHelperTextNewPassword = (
  errorType: ErrorTypeNewPassword
): string => {
  if (errorType === ErrorTypeNewPassword.MISSING_CAPITAL_CHAR) {
    return translate('modals.changePassword.errorNotMatchRuleCapital');
  }
  if (errorType === ErrorTypeNewPassword.MISSING_SPECIAL_CHAR) {
    return translate('modals.changePassword.errorNotMatchRuleSpecialChar');
  }

  return '';
};

export const getHintText = (key: TxKeyPath, value: string): string =>
  value.length > 0 ? translate(key) : '';

// TODO : Verify password when we have backend
export const isValidPassword = (password: string): Promise<boolean> =>
  new Promise((resolve) => resolve(password === 'Password#1'));

// TODO : Call api when we have backend
export const postNewPassword = (): Promise<boolean> =>
  new Promise((resolve) => resolve(true));
