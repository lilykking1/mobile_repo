import { Asset } from '@app/models';
import { coinAmountToCurrency } from '@app/utils/assets';

export const calculateTotalExchange = (
  swapCoins: Array<Asset>,
  coinsValue: any
): number => {
  // TODO : Confirm this math after we have back-end service
  let newValueAfterExchange = 0;

  swapCoins.forEach((item) => {
    if (coinsValue[item.symbol]) {
      const valueWithExchange = coinAmountToCurrency(
        parseFloat(coinsValue[item.symbol]),
        item.fiatAmount
      );
      newValueAfterExchange += valueWithExchange;
    }
  });

  return newValueAfterExchange;
};

export const updateCoinsToMaxValue = (coins: Array<Asset>): any => {
  const newValues = {};

  coins.forEach((coinData) => {
    newValues[coinData.symbol] = coinData.coinAmount;
  });

  return newValues;
};
