import * as yup from 'yup';

import { validateOneTimeCode } from '@app/utils/validation';

export const TwoFactorVerificationSchema = yup.object().shape({
  oneTimeCode: validateOneTimeCode,
});
