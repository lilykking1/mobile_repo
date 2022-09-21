import { Asset, TransactionsData } from '.';

export enum WALLETS {
  StackedWallet = 'stacked-wallet',
}

export const WALLET_TITLES = {
  [WALLETS.StackedWallet]: 'Stacked Wallet',
};

export interface Wallet {
  totalInvested: number;
  tokens: Asset[];
  transactions: TransactionsData[];
}
