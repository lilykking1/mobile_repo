import { getTransactions } from '@app/mocks/Transactions';
import { assetsList } from '../Coins';

export const walletData = {
  totalInvested: 128_352.25,
  tokens: assetsList,
  transactions: getTransactions(6),
};
