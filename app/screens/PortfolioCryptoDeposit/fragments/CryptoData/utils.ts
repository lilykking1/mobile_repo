import { ViewStyle } from 'react-native';
import {
  COINS_PREFIX,
  COINS_THAT_SHOW_FIAT_AMOUNT,
  CONTAINER_FLEX_VALUE_WHEN_FUNDING,
  CONTAINER_FLEX_VALUE_WHEN_NOT_FUNDING,
  RANDOM_MOCKED_DIVISOR,
} from './contants';
import styles from './styles';

export const getCoinAmount = (
  initialInvestment: number,
  coin: string
): number => {
  if (COINS_THAT_SHOW_FIAT_AMOUNT.includes(coin)) {
    return initialInvestment;
  }

  return initialInvestment / RANDOM_MOCKED_DIVISOR;
};

export const getPrecisionValue = (amount: number): number => {
  const stringfied = amount.toString();
  const splitted = stringfied.split('.');

  return splitted[1] ? Math.min(splitted[1].length, 6) : 0;
};

export const getCoinAmountPrefix = (coin: string): string => COINS_PREFIX[coin];

export const getShouldShowFiatAmount = (coin: string): boolean =>
  !COINS_THAT_SHOW_FIAT_AMOUNT.includes(coin);

export const getContainerStyles = (isFunding: boolean): ViewStyle => {
  const flex = isFunding
    ? CONTAINER_FLEX_VALUE_WHEN_FUNDING
    : CONTAINER_FLEX_VALUE_WHEN_NOT_FUNDING;
  return { ...styles.container, flex };
};
