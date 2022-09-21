import {
  getErrorNewPassword,
  getHelperTextCurrentPassword,
  getHelperTextNewPassword,
  getHintText,
} from '@app/modals/ChangePassword/utils';
import { ErrorTypeNewPassword } from '@app/modals/ChangePassword/types';

describe('Get correct texts', () => {
  it('get correct helper text to current password based on error', () => {
    const hasError = true;
    let expected = 'modals.changePassword.errorIncorrectPassword.test';
    let result = getHelperTextCurrentPassword(hasError);
    expect(result).toEqual(expected);

    expected = '';
    result = getHelperTextCurrentPassword(!hasError);
    expect(result).toEqual(expected);
  });
  it('get correct type error based on input', () => {
    let password = 'password';
    let expected: ErrorTypeNewPassword =
      ErrorTypeNewPassword.MISSING_CAPITAL_CHAR;
    let result = getErrorNewPassword(password);
    expect(result).toEqual(expected);

    password = 'Password';
    expected = ErrorTypeNewPassword.MISSING_SPECIAL_CHAR;
    result = getErrorNewPassword(password);
    expect(result).toEqual(expected);

    password = '@password';
    expected = ErrorTypeNewPassword.MISSING_CAPITAL_CHAR;
    result = getErrorNewPassword(password);
    expect(result).toEqual(expected);

    password = '@Password';
    expected = undefined;
    result = getErrorNewPassword(password);
    expect(result).toEqual(expected);
  });
  it('get correct helper input text based on type error', () => {
    let errorType: ErrorTypeNewPassword =
      ErrorTypeNewPassword.MISSING_CAPITAL_CHAR;
    let expected = 'modals.changePassword.errorNotMatchRuleCapital.test';
    let result = getHelperTextNewPassword(errorType);
    expect(result).toEqual(expected);

    errorType = ErrorTypeNewPassword.MISSING_SPECIAL_CHAR;
    expected = 'modals.changePassword.errorNotMatchRuleSpecialChar.test';
    result = getHelperTextNewPassword(errorType);
    expect(result).toEqual(expected);
  });
  it('get correct hint text based on input', () => {
    const key = 'modals.changePassword.repeatNewPassword';
    let value = 'password';
    let expected = 'modals.changePassword.repeatNewPassword.test';
    let result = getHintText(key, value);
    expect(result).toEqual(expected);

    value = '';
    expected = '';
    result = getHintText(key, value);
    expect(result).toEqual(expected);
  });
});
