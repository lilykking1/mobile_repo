import { Asset, AssetVariation, AssetVariationDirection } from '@app/models';
import {
  calculateTotalExchange,
  updateCoinsToMaxValue,
} from '@app/screens/SwapManyToOne/components/MTOSliders/utils';
import {
  calculateWillGetCoinEndAmount,
  coinAmountToCurrency,
  createAssetList,
  currencyToCoinAmount,
} from '@app/utils/assets';

describe('Calculate values', () => {
  it('should calculate correct currency based on coin quantity and fiat amount', () => {
    const value = 10;
    const fiatAmount = 2;
    const expected = 20;
    const result = coinAmountToCurrency(value, fiatAmount);
    expect(result).toEqual(expected);
  });

  it('should calculate correct coin amount based on currency and fiat amount', () => {
    const value = 10;
    const fiatAmount = 2;
    const expected = 5;
    const result = currencyToCoinAmount(value, fiatAmount);
    expect(result).toEqual(expected);
  });

  it("should calculate correct 'Will Get' coin end amount", () => {
    const coinAmountBeforeChange = 10;
    const coinAmountAfterChange = 20;
    const fiatAmount = 2;
    const expected = 20;
    const result = calculateWillGetCoinEndAmount(
      coinAmountBeforeChange,
      coinAmountAfterChange,
      fiatAmount
    );
    expect(result).toEqual(expected);
  });

  it('should create an array of AssetVariation with all coins and their values', () => {
    const selectedToCoin: Asset = {
      symbol: 'BTCD',
      coinAmount: 10,
      name: 'BitcoinDark',
      fiatAmount: 1,
    };
    const swapFromCoins: Array<Asset> = [
      {
        symbol: 'BTC',
        coinAmount: 5,
        name: 'Bitcoin',
        fiatAmount: 2,
      },
      {
        symbol: 'SOL',
        coinAmount: 5,
        name: 'Solana',
        fiatAmount: 1.5,
      },
    ];
    const coinsValue = { BTC: 10, SOL: 5 };
    const exchangedCoinQuantity = '20';

    const expected: AssetVariation[] = [
      {
        coin: 'BTCD',
        currentCoinAmount: 10,
        currentFiatAmount: 1,
        endCoinAmount: 30,
        endFiatAmount: 20,
        direction: AssetVariationDirection.TO,
      },
      {
        coin: 'BTC',
        currentCoinAmount: 5,
        currentFiatAmount: 2,
        endCoinAmount: 10,
        endFiatAmount: 20,
        direction: AssetVariationDirection.FROM,
      },
      {
        coin: 'SOL',
        currentCoinAmount: 5,
        currentFiatAmount: 1.5,
        endCoinAmount: 5,
        endFiatAmount: 7.5,
        direction: AssetVariationDirection.FROM,
      },
    ];

    const result = createAssetList(
      selectedToCoin,
      swapFromCoins,
      coinsValue,
      exchangedCoinQuantity
    );
    expect(result).toEqual(expected);
  });

  it('should calculate total exchange', () => {
    const swapCoins: Array<Asset> = [
      {
        symbol: 'BTC',
        coinAmount: 5,
        name: 'Bitcoin',
        fiatAmount: 2,
      },
      {
        symbol: 'SOL',
        coinAmount: 5,
        name: 'Solana',
        fiatAmount: 1.5,
      },
    ];
    const coinsValue = { BTC: 10, SOL: 5 };
    const expected = 27.5;

    const result = calculateTotalExchange(swapCoins, coinsValue);
    expect(result).toEqual(expected);
  });

  it('should create a new object with max coins possible to exchange', () => {
    const coins: Array<Asset> = [
      {
        symbol: 'BTC',
        coinAmount: 5,
        name: 'Bitcoin',
        fiatAmount: 2,
      },
      {
        symbol: 'SOL',
        coinAmount: 5,
        name: 'Solana',
        fiatAmount: 1.5,
      },
    ];
    const expected = { BTC: 5, SOL: 5 };

    const result = updateCoinsToMaxValue(coins);
    expect(result).toEqual(expected);
  });
});
