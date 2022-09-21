import type { StyleSheet, ViewStyle } from 'react-native';
import { PaletteColor, paletteColors } from '@app/theme';
import { AccrualCardSize, AccrualCardVariant } from './types';
import { sizes, variations } from './styles';

export const getSizeStyle = (
  size: AccrualCardSize
): StyleSheet.NamedStyles<any> => {
  switch (size) {
    case 'small':
      return sizes.small;
    case 'large':
      return sizes.large;
    case 'xlarge':
      return sizes.xlarge;
    case 'medium':
    default:
      return sizes.medium;
  }
};

// Return the variant based on the value
export const getAccrualStyle = (variant: AccrualCardVariant): ViewStyle => {
  switch (variant) {
    case 'profit':
      return variations.profit;
    case 'loss':
      return variations.loss;
    case 'loss-red':
      return variations['loss-red'];
    default:
      return variations.none;
  }
};

export const getAccrualLabelStyle = (
  variant: AccrualCardVariant
): ViewStyle => {
  switch (variant) {
    case 'profit':
      return variations.profit.text;
    case 'loss':
      return variations.loss.text;
    case 'loss-red':
      return variations['loss-red'].text;
    default:
      return variations.none.text;
  }
};

export const getCaretLossTint = (variant: AccrualCardVariant): PaletteColor => {
  switch (variant) {
    case 'loss':
      return paletteColors.yellow[500];
    default:
      return paletteColors.red[500];
  }
};

export const getCaretProfitTint = (
  variant: AccrualCardVariant
): PaletteColor => {
  switch (variant) {
    case 'loss':
      return paletteColors.green[500];
    default:
      return paletteColors.green[500];
  }
};

export const getAccrualVariantFromValue = (
  value: number
): AccrualCardVariant => {
  const profitDownLimit = 0;

  if (value > profitDownLimit) {
    return 'profit';
  }

  return 'loss';
};
