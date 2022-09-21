import { palette } from '@app/theme';
import {
  CoinStackData,
  StackBarData,
  CoinStackDetails,
  assetsDetails,
  PortfolioType,
  PORTFOLIO_TYPES_TITLES,
  PORTFOLIO_USE_HEADER_GRIDS,
} from '@app/models/Portfolio';
import {
  PAYMENT_METHOD,
  TRANSACTION_STATUS,
  TRANSACTIONS_TYPES,
  UserPortfolioFlow,
} from '@app/models/Transactions';
import { DashboardRoutes } from '@app/navigation/types';
import { Transaction } from '../../screens/TransactionStatus/types';

const coinsList = ['atom', 'btc', 'eth', 'fil', 'sol', 'uni', 'usdt', 'xrp'];

const transactionsApi = {
  data: {
    totalAmount: '101034.24',
    coinStacks: [
      {
        portfolioType: PortfolioType.INDIVIDUAL_COINS,
        amount: '53248.98',
        percentage: '50',
        portfolioChange: 241,
        accrualPercentage: 6.31,
        coins: coinsList.slice(0, 3),
        color: palette.yellow[500],
        details: [
          {
            coin: 'btc',
            coinAmount: '0.708402',
            fiatAmount: '26601.44',
            lending: {
              text: 'Lending',
              amount: '0.2002402',
              coin: 'BTC',
            },
          },
          {
            coin: 'eth',
            coinAmount: '25.5403',
            fiatAmount: '25605.22',
          },
          {
            coin: 'xrp',
            coinAmount: '941.95',
            fiatAmount: '1042.32',
          },
        ],
      },
      {
        portfolioType: PortfolioType.STABLE_COINS,
        amount: '30806.29',
        percentage: '29',
        portfolioChange: null,
        accrualPercentage: null,
        coins: coinsList.slice(0, 2),
        color: palette.green[400],
        details: [
          {
            coin: 'usdt',
            fiatAmount: '25,601.44',
            coinAmount: '25,601.44',
            lending: {
              text: 'Lending',
              amount: '2,560.14',
              coin: 'USDT',
            },
          },
          {
            coin: 'dai',
            fiatAmount: '24,104.03',
            coinAmount: '24,104.03',
          },
        ],
      },
      {
        portfolioType: PortfolioType.MANAGED_ASSETS,
        amount: '19710.83',
        percentage: '21',
        portfolioChange: 847,
        accrualPercentage: 6.31,
        coins: coinsList.slice(0, 3),
        color: palette.royalBlue[400],
        details: [
          {
            assetName: 'Super 4',
            fiatAmount: '10330.01',
            assetChange: 158,
            accrualPercentage: 2.21,
            coins: ['fil', 'xrp', 'uni'],
          },
          {
            assetName: 'DeFi 3',
            fiatAmount: '5361.42',
            assetChange: 51,
            accrualPercentage: 0.42,
            coins: ['dai', 'eth', 'btc'],
          },
          {
            assetName: 'DeFi 5',
            fiatAmount: '4010.43',
            assetChange: 92,
            accrualPercentage: 4.97,
            coins: ['usdt', 'atom', 'sol'],
          },
        ],
      },
    ],
  },
};

const multipleTransactionsMock: Array<Transaction> = [
  {
    id: 1,
    transactionCoin: 'sol',
    units: 0.005,
    status: TRANSACTION_STATUS.CONFIRMED,
    totalTransactions: 1,
    finishedTransactions: 1,
  },
  {
    id: 2,
    transactionCoin: 'eth',
    units: 20,
    status: TRANSACTION_STATUS.PROCESSING,
    totalTransactions: 1,
    finishedTransactions: 0,
  },
  {
    id: 3,
    transactionCoin: 'btc',
    units: 0.4,
    status: TRANSACTION_STATUS.AWAITING_APPROVAL,
    totalTransactions: 1,
    finishedTransactions: 0,
  },
  {
    id: 4,
    transactionCoin: 'usdc',
    units: 20,
    status: TRANSACTION_STATUS.COMPLETED,
    totalTransactions: 1,
    finishedTransactions: 1,
  },
];

const singleTransactionMock: Array<Transaction> = [
  {
    id: 1,
    transactionCoin: 'eth',
    units: 0.005,
    status: TRANSACTION_STATUS.PROCESSING,
    totalTransactions: 1,
    finishedTransactions: 1,
  },
];

export const mockedRouteParams: DashboardRoutes['TransactionStatus'] = {
  riskAmount: 71,
  fiatAmount: 150,
  coinAmount: 0.85,
  flow: UserPortfolioFlow.PORTFOLIO_SETUP,
  status: TRANSACTION_STATUS.PROCESSING,
  paymentMethod: PAYMENT_METHOD.COINBASE,
  date: 'Friday, 28 March 2022',
  transactionType: TRANSACTIONS_TYPES.purchase,
  transactions: multipleTransactionsMock,
};

export const mockedRouteParamsForBank: DashboardRoutes['TransactionStatus'] = {
  riskAmount: 71,
  fiatAmount: 150,
  coinAmount: 0.85,
  flow: UserPortfolioFlow.PORTFOLIO_SETUP,
  status: TRANSACTION_STATUS.PROCESSING,
  paymentMethod: PAYMENT_METHOD.BANK,
  date: 'Friday, 28 March 2022',
  transactionType: TRANSACTIONS_TYPES.purchase,
  transactions: multipleTransactionsMock,
};

export const transactionStatusCardMock: DashboardRoutes['TransactionStatus'] = {
  riskAmount: 75,
  fiatAmount: 200,
  coinAmount: 0.85,
  flow: UserPortfolioFlow.PORTFOLIO_SETUP,
  status: TRANSACTION_STATUS.PROCESSING,
  paymentMethod: PAYMENT_METHOD.CRYPTO,
  date: 'Friday, 28 March 2022',
  transactionType: TRANSACTIONS_TYPES.purchase,
  transactions: singleTransactionMock,
};

export const getPortfolioName = (type: PortfolioType): string =>
  PORTFOLIO_TYPES_TITLES[type];

export const getPortfolioInternalGrids = (type: PortfolioType): boolean =>
  PORTFOLIO_USE_HEADER_GRIDS[type];

export const getTotalAmount = (): string => {
  const { totalAmount } = transactionsApi.data;
  return totalAmount;
};

export const getCoinStacks = (limit = 3): CoinStackData[] => {
  const items = transactionsApi.data.coinStacks.slice(0, limit);
  return items;
};

export const getCoinStacksDetails = (
  portfolio: PortfolioType
): CoinStackDetails[] | assetsDetails[] => {
  const items = getCoinStacks()
    .filter((a) => a.portfolioType === portfolio)
    .map((c) => c.details)[0];
  return items;
};

export const getCoinStacksTotalAmount = (portfolio: PortfolioType): string => {
  const items = getCoinStacks()
    .filter((a) => a.portfolioType === portfolio)
    .map((c) => c.amount)[0];
  return items;
};

export const getStackBarData = (limit = 3): StackBarData[] => {
  const items = getCoinStacks()
    .map(({ color, percentage }) => ({
      color,
      percentage: Number(percentage),
    }))
    .slice(0, limit);
  return items;
};

export const getPortfolioChange = (portfolio: PortfolioType): number => {
  const items = getCoinStacks()
    .filter((a) => a.portfolioType === portfolio)
    .map((c) => c.portfolioChange)[0];
  return items;
};

export const getAccrualPercentage = (portfolio: PortfolioType): number => {
  const items = getCoinStacks()
    .filter((a) => a.portfolioType === portfolio)
    .map((c) => c.accrualPercentage)[0];
  return items;
};

export const isAssetsPortfolio = (portfolio: PortfolioType): boolean => {
  const item = getCoinStacks()
    .filter((a) => a.portfolioType === portfolio)
    .map((c) => c.portfolioType === PortfolioType.MANAGED_ASSETS)[0];
  return item;
};

export const getAssetsPortfolio = (portfolio: PortfolioType): any => {
  const item = getCoinStacks().filter((a) => a.portfolioType === portfolio);
  return item[0];
};

const RAND_MIN = 2;
const RAND_MAX = -2;

const priceDefault = 1000.22;
const statusDefault = '+';

const accDefault = 2.5;

// value of pullback after each price change (MIN: 0 MAX: 1)
const PULLBACK_PARAM = 0.1;

const generatePrice = (price: number, status: string, acc: number) => {
  // randomize the acceleration parameter
  const randAcc = (Math.random() * (RAND_MAX - RAND_MIN) + RAND_MIN) * acc;
  let newPrice;

  if (acc > 0) {
    // +ve acc: uptrend
    newPrice =
      status === '+' ? price - randAcc * PULLBACK_PARAM : price + randAcc;
  } else {
    // -ve acc: downtrend
    newPrice =
      status === '+' ? price + randAcc : price - randAcc * PULLBACK_PARAM;
  }

  newPrice = Math.round(newPrice * 10000) / 10000;

  return newPrice > 0 ? newPrice : 0;
};

export const generateDataArray = (dataLength: number): any[] =>
  Array(dataLength)
    .fill(1)
    .map((_, i) => {
      const newPrice = generatePrice(priceDefault, statusDefault, accDefault);
      return {
        time: new Date(2022, 4, 1 + i),
        value: newPrice,
      };
    });
