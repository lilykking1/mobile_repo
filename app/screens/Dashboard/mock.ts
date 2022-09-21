import { COINS } from '@app/models';

export const portfolioData = {
  totalInvested: 128352.25,
  accrualValue: 1158,
  percentChange: 5.21,
};

export const selfDirectedData = {
  totalInvested: 27315.38,
  accrualValue: -231,
  percentChange: 0.89,
  coins: [
    COINS.ATOM,
    COINS.BTC,
    COINS.ETH,
    COINS.FIL,
    COINS.SOL,
    COINS.XRP,
    COINS.UNI,
    COINS.USDT,
  ],
};

export const managedPortfolioData = {
  totalInvested: 101034.97,
  accrualValue: 1339,
  percentChange: 6.31,
  // TODO: correct type
  chartData: [
    { time: 1, value: 2 },
    { time: 2, value: 3 },
    { time: 3, value: 4 },
    { time: 4, value: 6 },
    { time: 5, value: 7 },
    { time: 6, value: 8 },
    { time: 7, value: 3 },
    { time: 8, value: 5 },
    { time: 9, value: 5 },
  ],
};
