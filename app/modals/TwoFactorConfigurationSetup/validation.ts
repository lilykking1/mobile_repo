import * as yup from 'yup';
import { translate } from '@app/i18n';
import { validateEmail } from '@app/utils/validation';

export const TwoFactorSchema = yup.object().shape({
  email: validateEmail,
  authCode: yup
    .string()
    .min(
      16,
      translate(
        'screens.twoFactorConfigurationSetup.validations.authCodeCharacters'
      )
    )
    .required(
      translate(
        'screens.twoFactorConfigurationSetup.validations.authCodeRequired'
      )
    ),
});
