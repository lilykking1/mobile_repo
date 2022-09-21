import { getAssetsVariationListWithPercentage } from '../utils';
import { variationAssetsList, STACKED_WALLET_TOTAL_FIAT_AMOUNT } from './mock';

describe('Get coins percentages from Stacked Wallet', () => {
  it('gets the right current coin percentage from Stacked Wallet total amout', () => {
    const list = getAssetsVariationListWithPercentage(
      variationAssetsList,
      STACKED_WALLET_TOTAL_FIAT_AMOUNT
    );

    const initialPosition = 0;
    let expected = 5;

    expect(list[initialPosition].currentPercentage).toBeDefined();
    expect(list[initialPosition].currentPercentage).toEqual(expected);

    const secondPosition = 1;
    expected = 20;

    expect(list[secondPosition].currentPercentage).toBeDefined();
    expect(list[secondPosition].currentPercentage).toEqual(expected);
  });

  it('gets the right end coin percentage from Stacked Wallet total amout', () => {
    const list = getAssetsVariationListWithPercentage(
      variationAssetsList,
      STACKED_WALLET_TOTAL_FIAT_AMOUNT
    );

    const initialPosition = 0;
    let expected = 10;

    expect(list[initialPosition].endPercentage).toBeDefined();
    expect(list[initialPosition].endPercentage).toEqual(expected);

    const secondPosition = 1;
    expected = 10;

    expect(list[secondPosition].endPercentage).toBeDefined();
    expect(list[secondPosition].endPercentage).toEqual(expected);
  });
});
