import { ViewStyle } from 'react-native';
import Color from 'color';
import { EXCHANGES, EXCHANGE_COLORS } from '@app/models';
import { palette } from '@app/theme';
import { Theme } from '@app/state/stores/settings/types';

const STACKED_WALLET_COLORS = {
  light: palette.grey[300],
  dark: Color('#7892FA').alpha(0.15).toString(),
};

/**
 * Dynamic background/border color depending on card type and exchange
 * @param {EXCHANGES} exchange exchange name
 * @param {boolean} stackedWallet if it's stackedWallet card or not
 * @returns ViewStyle for card
 */
export const getExchangeCardStyles = (
  exchange?: EXCHANGES,
  stackedWallet?: boolean,
  theme?: Theme
): ViewStyle => {
  let backgroundColor = palette.white;
  const borderColor = palette.transparent;

  if (exchange && !stackedWallet) {
    backgroundColor = EXCHANGE_COLORS[exchange][theme];
  }

  if (stackedWallet) {
    backgroundColor = STACKED_WALLET_COLORS[theme];
  }

  return {
    backgroundColor,
    borderColor,
  };
};
