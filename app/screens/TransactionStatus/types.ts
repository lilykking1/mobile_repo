import { TRANSACTION_STATUS } from '@app/models/Transactions';

export interface DepositCoinData {
  id: string;
  value: string;
  walletAddress?: string;
}

export interface Transaction {
  id: number;
  transactionCoin: string;
  units: number;
  status: TRANSACTION_STATUS;
  totalTransactions: number;
  finishedTransactions: number;
}
