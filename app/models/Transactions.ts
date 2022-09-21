// TODO: Refactor enum names and types with API integration.

export enum PAYMENT_METHOD {
  BANK = 'Bank',
  DEBIT_CARD = 'Debit Card',
  CRYPTO = 'Crypto',
  COINBASE = 'Coinbase',
}

export enum TRANSACTION_STATUS {
  COMPLETED = 'completed',
  PROCESSING = 'processing',
  FAILED = 'failed',
  CONFIRMED = 'Confirmed',
  AWAITING_APPROVAL = 'Awaiting approval',
}

export enum TRANSACTIONS_TYPES {
  deposit = 'deposit',
  swap = 'swap',
  withdrawal = 'withdrawal',
  purchase = 'purchase',
}

export const TRANSACTIONS_TYPES_TITLES = {
  [TRANSACTIONS_TYPES.deposit]: 'deposit',
  [TRANSACTIONS_TYPES.swap]: 'swap',
  [TRANSACTIONS_TYPES.withdrawal]: 'withdrawal',
  [TRANSACTIONS_TYPES.purchase]: 'purchase',
};

export interface TransactionData {
  coin: string;
  paymentMethod?: PAYMENT_METHOD;
  type?: TRANSACTIONS_TYPES;
  fiatAmount: string;
  date: string;
  status?: TRANSACTION_STATUS;
  coinAmount?: string;
  address?: string;
  swapDestination?: string;
  swapFrom?: string;
  swapTo?: string;
  swapFromAmount?: string;
  swapToAmount?: string;
  withdrawalExchange?: string;
}

export interface TransactionsData {
  year: number;
  transactions: TransactionData[];
}

export enum UserPortfolioFlow {
  PORTFOLIO_SETUP = 'Portfolio setup',
  PORTFOLIO_MODIFICATION = 'Portfolio modification',
}
