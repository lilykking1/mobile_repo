import * as yup from 'yup';

import { translate } from '@app/i18n';

export const CustomerServiceSchema = yup.object().shape({
  customerService: yup
    .string()
    .required(translate('screens.feedback.fields.feedback.error')),
});
