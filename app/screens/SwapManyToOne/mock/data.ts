import { translate } from '@app/i18n';
import { Asset } from '@app/models';

export interface CoinSectionData {
  title?: string;
  data?: Asset[];
}

const stableCoinsSectionData: CoinSectionData = {
  title: translate('screens.stackedWallet.manyToOneSelectTo.stableCoins'),
  data: [
    {
      symbol: 'USDT',
      name: 'Tether',
      coinAmount: 1.0,
      fiatAmount: 1,
    },
    {
      symbol: 'USDC',
      name: 'USD Coin',
      coinAmount: 1.0,
      fiatAmount: 1,
    },
  ],
};

const notOwnedCoinsSectionData: CoinSectionData = {
  title: translate('screens.stackedWallet.manyToOneSelectTo.notOwned'),
  data: [
    {
      symbol: 'DOT',
      name: 'Polkadot',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'SHIB',
      name: 'Shiba Inu',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'AVAX',
      name: 'Avalanche',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'DAI',
      name: 'Dai',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'MATIC',
      name: 'Polygon',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'TRX',
      name: 'TRON',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'XMR',
      name: 'Monero',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'YFI',
      name: 'yearn.finance',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'SNX',
      name: 'Synthetix Network Token',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'OMG',
      name: 'OMG Network',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'ZRX',
      name: '0x',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'GNT',
      name: 'Golem',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'BAL',
      name: 'Balancer',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'SRM',
      name: 'Serum',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'SUSHI',
      name: 'SushiSwap',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'CVC',
      name: 'Civic',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'REN',
      name: 'Ren',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'BNT',
      name: 'Bancor',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'RLC',
      name: 'iExec RLC',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'CHR',
      name: 'Chromia',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
    {
      symbol: 'RAY',
      name: 'Raydium',
      coinAmount: 0.341,
      fiatAmount: 1240.03,
    },
  ],
};

export const getCoinsDataList = (userTokens: Asset[]): CoinSectionData[] => [
  { ...stableCoinsSectionData },
  {
    title: translate('screens.stackedWallet.manyToOneSelectTo.myCoins'),
    data: userTokens,
  },
  { ...notOwnedCoinsSectionData },
];
