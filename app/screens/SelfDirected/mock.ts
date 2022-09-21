import { COINS } from '@app/models';

export const stackedWalletData = {
  accrualPercentage: 18,
  accrualValue: 158,
  percentChange: '2.5',
  coinAmount: '380',
  fiatAmount: '120',
};

export const mockWalletData = [
  {
    key: 1,
    name: COINS.BTC,
  },
  {
    key: 2,
    name: COINS.ETH,
  },
  {
    key: 3,
    name: COINS.XRP,
  },
  {
    key: 4,
    name: COINS.BTC,
  },
  {
    key: 5,
    name: COINS.ETH,
  },
  {
    key: 6,
    name: COINS.XRP,
  },
];
