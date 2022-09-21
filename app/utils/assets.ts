import { Asset, AssetVariation, AssetVariationDirection } from '@app/models';

export const coinAmountToCurrency = (
  value: number,
  fiatAmount: number
): number => value * fiatAmount;

export const currencyToCoinAmount = (
  value: number,
  fiatAmount: number
): number => value / fiatAmount;

export const calculateWillGetCoinEndAmount = (
  coinAmountBeforeChange: number,
  coinAmountAfterChange: number,
  fiatAmount: number
): number =>
  coinAmountBeforeChange +
  currencyToCoinAmount(coinAmountAfterChange, fiatAmount);

export const createAssetList = (
  selectedToCoin: Asset,
  swapFromCoins: Array<Asset>,
  coinsValue: any,
  exchangedCoinQuantity = '0'
): Array<AssetVariation> => {
  // TODO : Confirm this math after we have back-end service

  const assetsList: Array<AssetVariation> = [];

  // Add "you will get coin"
  assetsList.push({
    coin: selectedToCoin.symbol,
    currentCoinAmount: selectedToCoin.coinAmount,
    endCoinAmount: calculateWillGetCoinEndAmount(
      selectedToCoin.coinAmount,
      parseFloat(exchangedCoinQuantity),
      selectedToCoin.fiatAmount
    ),
    currentFiatAmount: selectedToCoin.fiatAmount,
    endFiatAmount: coinAmountToCurrency(
      parseFloat(exchangedCoinQuantity),
      selectedToCoin.fiatAmount
    ),
    direction: AssetVariationDirection.TO,
  });

  // Add coins from sliders
  swapFromCoins.forEach((coinData) => {
    assetsList.push({
      coin: coinData.symbol,
      currentCoinAmount: coinData.coinAmount,
      currentFiatAmount: coinData.fiatAmount,
      endCoinAmount: coinsValue[coinData.symbol] || 0,
      endFiatAmount:
        coinAmountToCurrency(
          coinsValue[coinData.symbol],
          coinData.fiatAmount
        ) || 0,
      direction: AssetVariationDirection.FROM,
    });
  });

  return assetsList;
};
