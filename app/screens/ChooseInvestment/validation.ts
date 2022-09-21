import { translate } from '@app/i18n';
import * as yup from 'yup';

export const ChooseInvestmentSchema = yup.object().shape({
  investmentValue: yup
    .number()
    .min(100, translate('screens.chooseInvestment.errors.minInvestment'))
    .max(9999999, translate('screens.chooseInvestment.errors.maxInvestment')),
});
