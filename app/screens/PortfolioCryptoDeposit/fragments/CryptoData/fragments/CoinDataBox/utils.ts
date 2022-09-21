import { translate } from '@app/i18n';

export const getLabelFromCoinType = (
  isCoinThatShowFiatAmount: boolean
): string =>
  isCoinThatShowFiatAmount
    ? translate('screens.portfolioCryptoDeposit.investimentAmount')
    : translate('screens.portfolioCryptoDeposit.requiredDepositAmount');
