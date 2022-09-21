import { translate } from '@app/i18n';
import { PAYMENT_METHOD, TRANSACTION_STATUS } from '@app/models/Transactions';
import {
  WARNING_STATUSES,
  SUCCESS_STATUSES,
  USD_PREFIX,
  BTC_PREFIX,
} from './constants';
import { AmountHeaderQuantity } from './types';

export const getAmounts = (
  fiatAmount: number,
  coinAmount: number,
  fiatValueFirst: boolean
): AmountHeaderQuantity => {
  if (fiatValueFirst) {
    return {
      firstValue: { prefix: USD_PREFIX, value: fiatAmount },
      secondValue: { prefix: BTC_PREFIX, value: coinAmount },
    };
  }

  return {
    firstValue: { prefix: BTC_PREFIX, value: coinAmount },
    secondValue: { prefix: USD_PREFIX, value: fiatAmount },
  };
};

export const getAmountHeaderTitle = (
  paymentMethod: PAYMENT_METHOD,
  status: TRANSACTION_STATUS,
  fiatAmount: number,
  coinAmount: number
) => {
  const bankOrDebitPayment =
    paymentMethod === PAYMENT_METHOD.BANK ||
    paymentMethod === PAYMENT_METHOD.DEBIT_CARD;
  const isSuccessStatus = SUCCESS_STATUSES.includes(status);
  const isWarningStatus = WARNING_STATUSES.includes(status);

  let amountHeaderTitle = '';
  let amountValues: AmountHeaderQuantity;

  if (paymentMethod === PAYMENT_METHOD.COINBASE) {
    amountHeaderTitle = translate(
      'components.amountHeaderCard.depositFromCoinbase'
    );
    amountValues = getAmounts(fiatAmount, coinAmount, false);
  }

  if (bankOrDebitPayment) {
    amountHeaderTitle = translate('components.amountHeaderCard.investedAmount');
    amountValues = getAmounts(fiatAmount, coinAmount, true);
  }

  if (paymentMethod === PAYMENT_METHOD.CRYPTO) {
    if (isWarningStatus) {
      amountHeaderTitle = translate(
        'components.amountHeaderCard.requiredDepositAmount'
      );
      amountValues = getAmounts(fiatAmount, coinAmount, false);
    }

    if (isSuccessStatus) {
      amountHeaderTitle = translate(
        'components.amountHeaderCard.investedAmount'
      );
      amountValues = getAmounts(fiatAmount, coinAmount, true);
    }
  }
  return { title: amountHeaderTitle, amounts: amountValues };
};
