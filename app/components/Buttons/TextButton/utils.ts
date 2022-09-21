import type { StyleSheet } from 'react-native';

import {
  TextButtonSize,
  TextButtonVariant,
  TextButtonVariantStyle,
} from './types';
import {
  disabledTextVariations,
  pressTextVariations,
  sizes,
  variations,
} from './styles';

export const getSizeStyle = (
  size: TextButtonSize
): StyleSheet.NamedStyles<any> => {
  switch (size) {
    case 'small':
      return sizes.small;
    case 'large':
      return sizes.large;
    case 'normal':
    default:
      return sizes.normal;
  }
};

export const getVariantStyle = (
  variant: TextButtonVariant
): StyleSheet.NamedStyles<TextButtonVariantStyle> => {
  switch (variant) {
    case 'secondary':
      return variations.secondary;
    case 'primary':
    default:
      return variations.primary;
  }
};
export const getDisabledTextStyle = (
  variant: TextButtonVariant
): StyleSheet.NamedStyles<any> => {
  switch (variant) {
    case 'secondary':
      return disabledTextVariations.secondary;
    default:
      return disabledTextVariations.primary;
  }
};

export const getPressedTextStyle = (
  variant: TextButtonVariant
): StyleSheet.NamedStyles<any> => {
  switch (variant) {
    case 'secondary':
      return pressTextVariations.secondary;
    case 'primary':
    default:
      return pressTextVariations.primary;
  }
};
