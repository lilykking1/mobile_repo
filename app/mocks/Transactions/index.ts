import {
  PAYMENT_METHOD,
  TransactionData,
  TransactionsData,
  TRANSACTIONS_TYPES,
  TRANSACTION_STATUS,
} from '@app/models/Transactions';
import {
  WALLET_TITLES,
  WALLETS,
  EXCHANGES,
  EXCHANGE_TITLES,
} from '@app/models';

const transactionsApi = {
  data: {
    transactions: [
      {
        year: 2022,
        transactions: [
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
            date: '28 Feb, 12:33 PM',
          },
          {
            coin: 'BTC',
            type: TRANSACTIONS_TYPES.withdrawal,
            address: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
            withdrawalExchange: EXCHANGE_TITLES[EXCHANGES.Binance],
            fiatAmount: '4,200.36',
            coinAmount: '0.82',
            date: '28 Feb, 12:34 PM',
          },
          {
            coin: 'BTC',
            type: TRANSACTIONS_TYPES.purchase,
            withdrawalExchange: WALLET_TITLES[WALLETS.StackedWallet],
            paymentMethod: PAYMENT_METHOD.DEBIT_CARD,
            fiatAmount: '4,431.30',
            coinAmount: '0.1',
            date: '28 Feb, 12:35 PM',
          },
          {
            coin: 'BTC',
            type: TRANSACTIONS_TYPES.purchase,
            withdrawalExchange: WALLET_TITLES[WALLETS.StackedWallet],
            paymentMethod: PAYMENT_METHOD.BANK,
            fiatAmount: '4,431.30',
            coinAmount: '0.1',
            date: '28 Feb, 12:36 PM',
          },
        ],
      },
      {
        year: 2021,
        transactions: [
          {
            coin: 'USD',
            paymentMethod: PAYMENT_METHOD.DEBIT_CARD,
            type: TRANSACTIONS_TYPES.deposit,
            fiatAmount: '4,232.36',
            date: '28 Feb, 12:33 PM',
          },
          {
            coin: 'ETH',
            address: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
            type: TRANSACTIONS_TYPES.deposit,
            fiatAmount: '4,210.36',
            coinAmount: '0.82',
            date: '28 Feb, 12:34 PM',
          },
        ],
      },
      {
        year: 2020,
        transactions: [
          {
            coin: 'USD',
            paymentMethod: PAYMENT_METHOD.DEBIT_CARD,
            type: TRANSACTIONS_TYPES.deposit,
            fiatAmount: '4,231.36',
            coinAmount: '0.82',
            date: '28 Feb, 12:40 PM',
          },
          {
            coin: 'ETH',
            address: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
            type: TRANSACTIONS_TYPES.deposit,
            fiatAmount: '4,220.36',
            coinAmount: '0.82',
            date: '28 Feb, 12:41 PM',
          },
        ],
      },
      {
        year: 2019,
        transactions: [
          {
            coin: 'USD',
            paymentMethod: PAYMENT_METHOD.DEBIT_CARD,
            type: TRANSACTIONS_TYPES.deposit,
            fiatAmount: '4,333.36',
            date: '28 Feb, 12:42 PM',
          },
          {
            coin: 'ETH',
            address: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
            type: TRANSACTIONS_TYPES.deposit,
            fiatAmount: '4,400.36',
            coinAmount: '0.82',
            date: '28 Feb, 12:43 PM',
          },
        ],
      },
      {
        year: 2018,
        transactions: [
          {
            coin: 'USD',
            paymentMethod: PAYMENT_METHOD.DEBIT_CARD,
            type: TRANSACTIONS_TYPES.deposit,
            fiatAmount: '4,532.36',
            date: '28 Feb, 12:44 PM',
          },
          {
            coin: 'ETH',
            address: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
            type: TRANSACTIONS_TYPES.deposit,
            fiatAmount: '4,610.36',
            coinAmount: '0.82',
            date: '28 Feb, 12:45 PM',
          },
        ],
      },
      {
        year: 2017,
        transactions: [
          {
            coin: 'USD',
            paymentMethod: PAYMENT_METHOD.DEBIT_CARD,
            type: TRANSACTIONS_TYPES.deposit,
            fiatAmount: '4,731.36',
            date: '28 Feb, 12:46 PM',
          },
          {
            coin: 'ETH',
            address: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
            type: TRANSACTIONS_TYPES.deposit,
            fiatAmount: '4,820.36',
            coinAmount: '0.82',
            date: '28 Feb, 12:47 PM',
          },
        ],
      },
    ],
  },
};

export const getTransactions = (limit = 6): TransactionsData[] => {
  const items = transactionsApi.data.transactions.slice(0, limit);
  return items;
};

const transactionsInProgressApi = {
  data: {
    transactions: [
      {
        coin: 'ETH',
        paymentMethod: PAYMENT_METHOD.DEBIT_CARD,
        type: TRANSACTIONS_TYPES.purchase,
        fiatAmount: '4,233.36',
        coinAmount: '0.823',
        date: 'Friday, 27 May 2022',
        status: TRANSACTION_STATUS.PROCESSING,
      },
      {
        coin: 'BTC',
        paymentMethod: PAYMENT_METHOD.BANK,
        type: TRANSACTIONS_TYPES.purchase,
        fiatAmount: '4,233.36',
        coinAmount: '0.441',
        date: 'Saturday, 28 May 2022',
        status: TRANSACTION_STATUS.PROCESSING,
      },
      {
        coin: 'ETH',
        paymentMethod: PAYMENT_METHOD.DEBIT_CARD,
        type: TRANSACTIONS_TYPES.purchase,
        fiatAmount: '4,233.36',
        coinAmount: '0.821',
        date: 'Saturday, 28 May 2022',
        status: TRANSACTION_STATUS.PROCESSING,
      },
      {
        coin: 'DOT',
        paymentMethod: PAYMENT_METHOD.DEBIT_CARD,
        type: TRANSACTIONS_TYPES.purchase,
        fiatAmount: '4,233.36',
        coinAmount: '0.822',
        date: 'Saturday, 28 May 2022',
        status: TRANSACTION_STATUS.PROCESSING,
      },
      {
        coin: 'TRX',
        paymentMethod: PAYMENT_METHOD.BANK,
        type: TRANSACTIONS_TYPES.purchase,
        fiatAmount: '4,233.36',
        coinAmount: '3.221',
        date: 'Sunday, 29 May 2022',
        status: TRANSACTION_STATUS.PROCESSING,
      },
      {
        coin: 'DAI',
        paymentMethod: PAYMENT_METHOD.DEBIT_CARD,
        type: TRANSACTIONS_TYPES.purchase,
        fiatAmount: '4,233.36',
        coinAmount: '0.852',
        date: 'Monday, 30 May 2022',
        status: TRANSACTION_STATUS.PROCESSING,
      },
      {
        coin: 'SHIB',
        paymentMethod: PAYMENT_METHOD.BANK,
        type: TRANSACTIONS_TYPES.purchase,
        fiatAmount: '4,233.36',
        coinAmount: '1.232',
        date: 'Monday, 30 May 2022',
        status: TRANSACTION_STATUS.PROCESSING,
      },
      {
        coin: 'BNB',
        paymentMethod: PAYMENT_METHOD.BANK,
        type: TRANSACTIONS_TYPES.purchase,
        fiatAmount: '4,233.36',
        coinAmount: '1.55',
        date: 'Monday, 30 May 2022',
        status: TRANSACTION_STATUS.PROCESSING,
      },
    ],
  },
};

export const getProcessingTransactionFromCoin = (
  coin: string
): TransactionData => {
  const searchedCoin = transactionsInProgressApi.data.transactions.find(
    (searchCoin) =>
      searchCoin.coin.toLowerCase() === coin.toLowerCase() &&
      searchCoin.status === TRANSACTION_STATUS.PROCESSING
  );
  return searchedCoin;
};
