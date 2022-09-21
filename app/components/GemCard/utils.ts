import { translate } from '@app/i18n';
import {
  PAYMENT_METHOD,
  TRANSACTIONS_TYPES,
  TRANSACTION_STATUS,
} from '@app/models/Transactions';
import { Theme } from '@app/state/stores/settings/types';
import { palette } from '@app/theme';
import { ViewStyle } from 'react-native';

import { Transaction } from '@app/screens/TransactionStatus/types';
import {
  MockedCompletedDeposits,
  MockedDeposits,
  ERROR_STATUSES,
  SUCCESS_STATUSES,
  WARNING_STATUSES,
} from './constants';
import { TooltipVariant } from '../Tooltip/types';

export const isDarkMode = (theme: Theme): boolean => theme === 'dark';

export const getTitleVariant = (titleDark: boolean) => {
  if (titleDark) {
    return 'secondary.800';
  }

  return 'secondary.500';
};

export const getNeedShowCongratulationsCard = (
  isAllTransactionsSucceded: boolean,
  showCongratulationsCard: boolean
): boolean => isAllTransactionsSucceded && showCongratulationsCard;

export const isBankPayment = (paymentMethod: PAYMENT_METHOD): boolean =>
  paymentMethod === PAYMENT_METHOD.BANK;

export const isDebitCardPayment = (paymentMethod: PAYMENT_METHOD): boolean =>
  paymentMethod === PAYMENT_METHOD.DEBIT_CARD;

export const isDepositTransaction = (
  transactionType: TRANSACTIONS_TYPES
): boolean => transactionType === TRANSACTIONS_TYPES.deposit;

export const getDisclaimerTextFromPaymentMethod = (
  paymentMethod: PAYMENT_METHOD
): string => {
  if (isBankPayment(paymentMethod)) {
    return translate('coinDetail.gemCard.bankPurchaseDisclaimer');
  }
  if (isDebitCardPayment(paymentMethod)) {
    return translate('coinDetail.gemCard.debitCardPurchaseDisclamer');
  }
  return null;
};

export const getIsSuccessStatus = (status: TRANSACTION_STATUS) => {
  const isSuccessStatus = SUCCESS_STATUSES.includes(status);

  return isSuccessStatus;
};

export const oneSuccessOfMultipleTransactinos = (
  statuses: Array<Transaction>
) => statuses.some((element) => getIsSuccessStatus(element.status));

const getPurchaseTitle = (
  paymentMethod: PAYMENT_METHOD,
  status?: TRANSACTION_STATUS
): string => {
  const isWarningStatus = WARNING_STATUSES.includes(status);
  let purchaseTitle = '';
  if (isBankPayment(paymentMethod)) {
    purchaseTitle = translate('coinDetail.gemCard.bankPurchase');
  }
  if (isDebitCardPayment(paymentMethod)) {
    purchaseTitle = translate('coinDetail.gemCard.debitPurchase');
  }
  if (paymentMethod === PAYMENT_METHOD.CRYPTO) {
    purchaseTitle = translate('components.depositStatusCard.cryptoDeposited');
  }
  if (isWarningStatus) {
    purchaseTitle += translate('coinDetail.gemCard.inProgress');
  }
  return purchaseTitle;
};

const getDepositTitle = (
  status: TRANSACTION_STATUS,
  paymentMethod: PAYMENT_METHOD
): string => {
  const isWarningStatus = WARNING_STATUSES.includes(status);
  let depositTitle = '';
  if (isWarningStatus) {
    depositTitle = translate('coinDetail.gemCard.depositInProgress');
  } else if (paymentMethod === PAYMENT_METHOD.CRYPTO) {
    depositTitle = translate('components.depositStatusCard.cryptoDeposited');
  } else {
    depositTitle = translate('coinDetail.gemCard.fundsDeposited');
  }
  return depositTitle;
};

export const getTransactionTitle = (
  transactionType: TRANSACTIONS_TYPES,
  paymentMethod: PAYMENT_METHOD,
  status: TRANSACTION_STATUS
): string => {
  if (transactionType === TRANSACTIONS_TYPES.deposit) {
    return getDepositTitle(status, paymentMethod);
  }
  if (transactionType === TRANSACTIONS_TYPES.purchase) {
    return getPurchaseTitle(paymentMethod, status);
  }
  return null;
};

export const getIsMultipleTransactionSucess = (statuses: Array<Transaction>) =>
  statuses.every((element) => getIsSuccessStatus(element.status));

export const getMultipleTransactionTitle = (
  paymentMethod: PAYMENT_METHOD,
  transactions: Transaction[]
): string => {
  let title = '';
  const cardTransaction =
    isDebitCardPayment(paymentMethod) || isBankPayment(paymentMethod);
  const atLeastOnePaymentSuccess = oneSuccessOfMultipleTransactinos(
    transactions
  );

  if (paymentMethod === PAYMENT_METHOD.CRYPTO) {
    title = atLeastOnePaymentSuccess
      ? translate('components.depositStatusCard.cryptoDeposited')
      : translate('coinDetail.gemCard.depositInProgress');
  }

  if (paymentMethod === PAYMENT_METHOD.COINBASE) {
    title = atLeastOnePaymentSuccess
      ? translate('coinDetail.gemCard.fundsDeposited')
      : translate('coinDetail.gemCard.depositInProgress');
  }

  if (cardTransaction) {
    title = translate('coinDetail.gemCard.fundsDeposited');
  }

  return title;
};

export const getTooltipVariantFromStatus = (
  status: TRANSACTION_STATUS
): TooltipVariant => {
  const isSuccessStatus = SUCCESS_STATUSES.includes(status);
  const isWarningStatus = WARNING_STATUSES.includes(status);
  const isErrorStatus = ERROR_STATUSES.includes(status);

  if (isSuccessStatus) {
    return TooltipVariant.SUCCESS;
  }
  if (isWarningStatus) {
    return TooltipVariant.WARNING;
  }
  if (isErrorStatus) {
    return TooltipVariant.ERROR;
  }
  return null;
};

export const getTooltipTextFromStatus = (
  status: TRANSACTION_STATUS
): string => {
  if (status === TRANSACTION_STATUS.COMPLETED) {
    return translate('coinDetail.gemCard.status.received');
  }
  if (status === TRANSACTION_STATUS.PROCESSING) {
    return translate('coinDetail.gemCard.status.processing');
  }
  if (status === TRANSACTION_STATUS.AWAITING_APPROVAL) {
    return translate('coinDetail.gemCard.status.awaitingApproval');
  }
  if (status === TRANSACTION_STATUS.CONFIRMED) {
    return translate('coinDetail.gemCard.status.confirmed');
  }
  if (status === TRANSACTION_STATUS.FAILED) {
    return translate('coinDetail.gemCard.status.failed');
  }
  return status;
};

export const getCardInfoLabels = (status: TRANSACTION_STATUS, date: string) => {
  switch (status) {
    case TRANSACTION_STATUS.CONFIRMED:
      return {
        firstLabel: translate('coinDetail.gemCard.confirmation'),
        secondLabel: `${MockedDeposits.toString()}/${MockedDeposits.toString()}`,
      };
    case TRANSACTION_STATUS.PROCESSING:
      return {
        firstLabel: translate('coinDetail.gemCard.estimatedDepositDate'),
        secondLabel: date,
      };
    case TRANSACTION_STATUS.COMPLETED:
      return {
        firstLabel: translate('coinDetail.gemCard.depositDate'),
        secondLabel: date,
      };
    default:
      return {
        firstLabel: translate('coinDetail.gemCard.confirmation'),
        secondLabel: `${MockedCompletedDeposits.toString()}/${MockedDeposits.toString()}`,
      };
  }
};

export const getBorderStyle = (theme: Theme): ViewStyle => {
  if (isDarkMode(theme)) {
    return {
      borderTopColor: palette.grey[700],
    };
  }
  return {
    borderTopColor: palette.grey[300],
  };
};
