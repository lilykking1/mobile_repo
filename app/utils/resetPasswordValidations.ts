import * as yup from 'yup';
import { translate } from '@app/i18n';

import {
  HAS_LEAST_ONE_CAPITAL_LETTER_REGEX,
  HAS_LEAST_ONE_LOWERCASE_REGEX,
  HAS_LEAST_ONE_NUMBER_REGEX,
  HAS_LEAST_ONE_SPECIAL_CHAR_REGEX,
} from './constants';

const validateCurrentPassword = yup.string().required('');

const validateNewPassword = yup
  .string()
  .required('')
  .min(6, translate('modals.changePassword.errorNotMatchRuleMinLength'))
  .matches(
    HAS_LEAST_ONE_CAPITAL_LETTER_REGEX,
    translate('modals.changePassword.errorNotMatchRuleCapital')
  )
  .matches(
    HAS_LEAST_ONE_SPECIAL_CHAR_REGEX,
    translate('modals.changePassword.errorNotMatchRuleSpecialChar')
  )
  .matches(
    HAS_LEAST_ONE_NUMBER_REGEX,
    translate('modals.changePassword.errorNotMatchRuleNumber')
  )
  .matches(
    HAS_LEAST_ONE_LOWERCASE_REGEX,
    translate('modals.changePassword.errorNotMatchRuleLowercase')
  );

const validateRepeatPassword = yup
  .string()
  .required('')
  .oneOf(
    [yup.ref('newPassword'), null],
    translate('modals.changePassword.errorNotMatchNewPassword')
  );

export const changePasswordSchema = (withCurrentPassword: boolean) => {
  const currentPassword = withCurrentPassword
    ? { currentPassword: validateCurrentPassword }
    : {};
  return yup.object().shape({
    ...currentPassword,
    newPassword: validateNewPassword,
    repeatNewPassword: validateRepeatPassword,
  });
};
