export interface Asset {
  name: string;
  symbol: string;
  fiatAmount?: number;
  coinAmount?: number;
}

export const enum AssetVariationDirection {
  FROM,
  TO,
}

export interface AssetVariation {
  coin: string;
  currentCoinAmount: number;
  currentFiatAmount: number;
  endCoinAmount: number;
  endFiatAmount: number;
  currentPercentage?: number;
  endPercentage?: number;
  direction: AssetVariationDirection;
}
