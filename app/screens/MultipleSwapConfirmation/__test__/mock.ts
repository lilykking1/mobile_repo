import { AssetVariation, AssetVariationDirection } from '@app/models';

export const STACKED_WALLET_TOTAL_FIAT_AMOUNT = 50_000.0;

export const variationAssetsList: AssetVariation[] = [
  {
    coin: 'USDT',
    currentCoinAmount: 2500,
    currentFiatAmount: 2500,
    endCoinAmount: 5000,
    endFiatAmount: 5000,
    direction: AssetVariationDirection.TO,
  },
  {
    coin: 'ETH',
    currentCoinAmount: 1.921,
    currentFiatAmount: 10_000.0,
    endCoinAmount: 0.824,
    endFiatAmount: 5000,
    direction: AssetVariationDirection.FROM,
  },
];
