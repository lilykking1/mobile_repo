import { SocialLink, SocialName } from '../types';

interface CoinData {
  description?: string;
  twitter?: SocialLink;
  telegram?: SocialLink;
  website?: SocialLink;
  github?: SocialLink;
}

export const coinData: CoinData = {
  description:
    'Ethereum is a distributed blockchain computing platform for smart contracts and decentralized applications..',
  twitter: {
    name: SocialName.TWITTER,
    href: 'https://www.twitter.com',
  },
  website: {
    name: SocialName.WEBSITE,
    href: 'https://www.bitcoin.com',
  },
  telegram: {
    name: SocialName.TELEGRAM,
    href: 'https://www.telegram.org',
  },
  github: {
    name: SocialName.GITHUB,
    href: 'https://www.github.com',
  },
};

export const coinDetails = {
  coinName: 'Ethereum',
  coinMovementPercentage: '25',
  coinMovementValue: 100,
  coinValue: '$4,500.53',
};
export const userCoin = {
  coinName: 'ETH',
  coinAmount: 1.391,
  fiatAmount: 4854.59,
};

export const keyMetrics = {
  price: 0.602,
  hrChange: 0.0887,
  hrRealVol: -14749.72,
  liquidMarketcap: 22357157.89,
  liquidSupply: 115208.88,
  maxSupply: '-',
};

export const priceMetrics = {
  OnehrLowHigh: '$3,919.23 / $3.991.09',
  TFhrLowHigh: '$3,919.23 / $3.991.09',
  athUsd: 4338.43,
  athDate: '05/13/2021',
  cycleLowUsd: 4338.43,
  cycleLowDate: '05/13/2021',
};

interface Data {
  time: number;
  value: number;
}
export const chartData: Data[] = [
  { time: 0, value: Math.random() },
  { time: 1, value: Math.random() },
  { time: 2, value: Math.random() },
  { time: 3, value: Math.random() },
  { time: 4, value: Math.random() },
  { time: 5, value: Math.random() },
  { time: 6, value: Math.random() },
  { time: 7, value: Math.random() },
  { time: 8, value: Math.random() },
  { time: 9, value: Math.random() },
  { time: 10, value: Math.random() },
  { time: 11, value: Math.random() },
  { time: 12, value: Math.random() },
  { time: 13, value: Math.random() },
  { time: 14, value: Math.random() },
  { time: 15, value: Math.random() },
  { time: 16, value: Math.random() },
  { time: 17, value: Math.random() },
  { time: 18, value: Math.random() },
  { time: 19, value: Math.random() },
];
