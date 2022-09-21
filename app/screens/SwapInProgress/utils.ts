import { AssetVariation, AssetVariationDirection } from '@app/models';

export const getCoinsNameByDirection = (
  assetsList: AssetVariation[],
  coinDirection: AssetVariationDirection
): Array<string> =>
  assetsList
    .filter(({ direction }) => coinDirection === direction)
    .map(({ coin }) => coin);
