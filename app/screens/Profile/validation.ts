import * as yup from 'yup';

import { validateEmail } from '@app/utils/validation';
import { translate } from '@app/i18n';

export const ProfileSchema = yup.object().shape({
  email: validateEmail,
  fullName: yup
    .string()
    .required(translate('screens.profile.error.fullNameRequired')),
});
