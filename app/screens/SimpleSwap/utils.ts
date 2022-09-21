import { palette } from '@app/theme';
import { Asset } from '@app/models';
import styles from './styles';
import { mockedCryptoConversions } from './mock';
import {
  DEFAULT_MOCKED_CONVERSION_VALUE,
  DEFAULT_SWAP_TO_COIN,
} from './constants';

export const getKeyboardOpenStyle = (keyboardOffset: number) => {
  if (keyboardOffset > 0) {
    return { marginBottom: keyboardOffset * 1.3 };
  }

  return {};
};

export const getArrowContainerStyle = (theme: string) => {
  if (theme === 'light') {
    return {
      container: [styles.arrowsStyle, { backgroundColor: palette.white }],
      arrowTint: palette.royalBlue[500],
    };
  }

  return {
    container: [
      styles.arrowsStyle,
      { backgroundColor: palette.royalBlue[1000] },
    ],
    arrowTint: palette.grey[600],
  };
};

export const getBorderStyle = (theme: string) => {
  if (theme === 'light') {
    return [styles.fromCoinContainer, { borderColor: palette.grey[400] }];
  }

  return [styles.fromCoinContainer, { borderColor: palette.grey[700] }];
};

export const getMockedConversionValues = (
  userValueSelected: number | string,
  fromCoinName: string,
  toCoinName: string
) => {
  if (userValueSelected === 0) {
    return 0;
  }

  const mockedCryptoConversion = mockedCryptoConversions[fromCoinName]
    ? mockedCryptoConversions[fromCoinName][toCoinName]
    : 0;

  const numberedValueSelected = Number(userValueSelected);

  if (mockedCryptoConversion) {
    const valueMultiplied = numberedValueSelected * mockedCryptoConversion;
    return valueMultiplied.toFixed(4);
  }

  return (numberedValueSelected * DEFAULT_MOCKED_CONVERSION_VALUE).toFixed(4);
};

export const findCoinBySymbol = (
  assetsList: Asset[],
  coinSymbol: string
): Asset | undefined =>
  assetsList.find(
    (coinData) => coinData.symbol.toUpperCase() === coinSymbol.toUpperCase()
  );

export const getTheHighestHoldingCoin = (assetsList: Asset[]): Asset =>
  assetsList.reduce((prev, current) =>
    Number(prev.fiatAmount) >= Number(current.fiatAmount) ? prev : current
  );

export const getTheSecondHighestHoldingCoin = (assetsList: Asset[]): Asset => {
  const highestHoldingCoin = getTheHighestHoldingCoin(assetsList);
  return assetsList.reduce((prev, current) => {
    if (prev.symbol === highestHoldingCoin.symbol) {
      return current;
    }
    if (current.symbol === highestHoldingCoin.symbol) {
      return prev;
    }
    return Number(prev.fiatAmount) >= Number(current.fiatAmount)
      ? prev
      : current;
  });
};

export const getSwapToCoin = (
  assetsList: Asset[],
  selectedCoinToSwapSymbol?: string
): Asset => {
  const highestHoldingCoin = getTheHighestHoldingCoin(assetsList);
  if (highestHoldingCoin.symbol.toUpperCase() === DEFAULT_SWAP_TO_COIN) {
    const secondHighestHoldingCoin = getTheSecondHighestHoldingCoin(assetsList);
    return secondHighestHoldingCoin;
  }
  if (selectedCoinToSwapSymbol?.toUpperCase() === DEFAULT_SWAP_TO_COIN) {
    return highestHoldingCoin;
  }
  return findCoinBySymbol(assetsList, DEFAULT_SWAP_TO_COIN);
};
