import { TRANSACTION_STATUS } from '@app/models/Transactions';

export const MockedDeposits = 1;
export const MockedCompletedDeposits = 0;

export const SUCCESS_STATUSES = [
  TRANSACTION_STATUS.COMPLETED,
  TRANSACTION_STATUS.CONFIRMED,
];

export const WARNING_STATUSES = [
  TRANSACTION_STATUS.AWAITING_APPROVAL,
  TRANSACTION_STATUS.PROCESSING,
];

export const ERROR_STATUSES = [TRANSACTION_STATUS.FAILED];
