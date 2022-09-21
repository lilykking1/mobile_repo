import { TRANSACTIONS_TYPES } from '@app/models/Transactions';
import {
  EXCHANGES,
  EXCHANGE_TITLES,
  WALLETS,
  WALLET_TITLES,
} from '@app/models';

export const transactions = {
  year: 2022,
  transactions: [
    {
      coin: 'USD',
      paymentMethod: 'Debit Card',
      type: TRANSACTIONS_TYPES.deposit,
      fiatAmount: '4,233.36',
      date: '28 Feb, 12:31 PM',
    },
    {
      coin: 'ETH',
      address: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      type: TRANSACTIONS_TYPES.deposit,
      fiatAmount: '4,200.36',
      coinAmount: '0.82',
      date: '28 Feb, 12:32 PM',
    },
    {
      coin: 'ETH',
      swapDestination: WALLET_TITLES[WALLETS.StackedWallet],
      swapFrom: 'BTC',
      swapTo: 'ETH',
      swapFromAmount: '0.095',
      swapToAmount: '1.36',
      type: TRANSACTIONS_TYPES.swap,
      fiatAmount: '4,200.36',
      date: '28 Feb, 12:32 PM',
    },
    {
      coin: 'BTC',
      type: TRANSACTIONS_TYPES.withdrawal,
      withdrawalExchange: EXCHANGE_TITLES[EXCHANGES.Binance],
      fiatAmount: '4,200.36',
      coinAmount: '0.82',
      date: '28 Feb, 12:32 PM',
    },
  ],
};
