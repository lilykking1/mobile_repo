import { AssetVariation } from '@app/models';

const TOTAL_PERCENT = 100;

const getPercentageByTotalAmount = (
  partialAmount: number,
  totalAmount: number
): number => {
  const percentage = (partialAmount * TOTAL_PERCENT) / totalAmount;
  return Number(percentage.toFixed(2));
};

export const getAssetsVariationListWithPercentage = (
  assetsList: AssetVariation[],
  totalAmount: number
): AssetVariation[] => {
  const listWithPercentage = assetsList.map((asset) => ({
    ...asset,
    currentPercentage: getPercentageByTotalAmount(
      asset.currentFiatAmount,
      totalAmount
    ),
    endPercentage: getPercentageByTotalAmount(asset.endFiatAmount, totalAmount),
  }));

  return listWithPercentage;
};
