import { ViewStyle } from 'react-native';
import {
  COIN_MARGIN,
  COINS_PER_COLUMN,
  ICON_PADDING_TOP,
  ICON_SIZE,
} from './constants';

export const getCoinIconMargin = (coins: number): number => {
  if (coins > COINS_PER_COLUMN) {
    return COIN_MARGIN * COINS_PER_COLUMN;
  }
  return COIN_MARGIN * coins;
};

export const getCoinIconStyle = (index: number, row: number): ViewStyle => ({
  position: index === 0 ? 'relative' : 'absolute',
  left: 25 * (index % COINS_PER_COLUMN),
  top: row * (ICON_SIZE + ICON_PADDING_TOP),
});

export const getContainerCoinsStyle = (
  row: number,
  coinsLength: number
): ViewStyle => ({
  height: ICON_SIZE * (row + 1),
  marginRight: getCoinIconMargin(coinsLength),
});
