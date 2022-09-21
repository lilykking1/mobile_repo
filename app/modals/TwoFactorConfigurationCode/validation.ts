import * as yup from 'yup';

import { validateOneTimeCode } from '@app/utils/validation';

export const TwoFactorConfigurationCodeSchema = yup.object().shape({
  oneTimeCode: validateOneTimeCode,
});
