import * as yup from 'yup';

import { validateEmail } from '@app/utils/validation';
import { translate } from '@app/i18n';

export const FeedbackSchema = yup.object().shape({
  email: validateEmail,
  name: yup.string().required(translate('screens.feedback.fields.name.error')),
  feedback: yup
    .string()
    .required(translate('screens.feedback.fields.feedback.error')),
});
