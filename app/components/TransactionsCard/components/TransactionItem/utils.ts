import { TRANSACTIONS_TYPES } from '@app/models/Transactions';

export const isFiatDeposit = (
  type: TRANSACTIONS_TYPES,
  address?: string
): boolean => type === 'deposit' && !address;
