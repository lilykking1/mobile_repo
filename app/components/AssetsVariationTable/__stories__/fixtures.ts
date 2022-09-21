import { AssetVariation, AssetVariationDirection } from '@app/models';

export const items: AssetVariation[] = [
  {
    coin: 'ETH',
    currentValue: 14384.19,
    currentPercentage: 0.22,
    endValue: 10874.99,
    endPercentage: 2.98,
    direction: AssetVariationDirection.FROM,
  },
  {
    coin: 'ATOM',
    currentValue: 1129.98,
    currentPercentage: 10.73,
    endValue: 10874.99,
    endPercentage: 2.98,
    direction: AssetVariationDirection.TO,
  },
  {
    coin: 'BTC',
    currentValue: 10533.45,
    currentPercentage: 0.025,
    endValue: 10874.99,
    endPercentage: 2.98,
    direction: AssetVariationDirection.TO,
  },
];
