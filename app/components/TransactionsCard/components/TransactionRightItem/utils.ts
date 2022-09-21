import { TypographyVariant } from '@app/components/Typography/types';
import { TRANSACTIONS_TYPES } from '@app/models/Transactions';

export const isNegativeTransactionType = (
  transactionType: TRANSACTIONS_TYPES
): boolean =>
  transactionType === TRANSACTIONS_TYPES.purchase ||
  transactionType === TRANSACTIONS_TYPES.withdrawal;

const isSwapTransactionType = (transactionType: TRANSACTIONS_TYPES): boolean =>
  transactionType === TRANSACTIONS_TYPES.swap;

export const getAmountPrefixByTransactionType = (
  transactionType: TRANSACTIONS_TYPES
): string => {
  if (isNegativeTransactionType(transactionType)) {
    return '-$';
  }
  if (isSwapTransactionType(transactionType)) {
    return '$';
  }
  return '+$';
};

export const getAmountVariantByTransactionType = (
  transactionType: TRANSACTIONS_TYPES
): TypographyVariant => {
  if (isNegativeTransactionType(transactionType)) {
    return 'grey.600';
  }
  return 'secondary.900';
};
