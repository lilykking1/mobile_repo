import type { StyleSheet } from 'react-native';
import { Theme } from '@app/state/stores/settings/types';

import { CardSize, CardVariant } from './types';
import { variations, sizes, styles } from './styles';

export const getBaseStyle = (usePadding: boolean): any[] => [
  styles.base,
  { padding: usePadding ? 16 : 0 },
];

export const getVariantStyle = (
  variant: CardVariant,
  theme: Theme
): StyleSheet.NamedStyles<any> => {
  // dark theme
  const isDarkTheme = theme === 'dark';
  if (!variant && isDarkTheme) {
    return variations.dark;
  }

  switch (variant) {
    case 'white':
      return variations.white;
    case 'dark':
      return variations.dark;
    case 'grey':
      return variations.grey;
    case 'red':
      return variations.red;
    case 'green':
      return variations.green;
    case 'transparent':
    default:
      return variations.white;
  }
};

export const getSizeStyle = (size: CardSize): StyleSheet.NamedStyles<any> => {
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

export const getOutlineStyle = (
  variant: CardVariant,
  outline: boolean
): StyleSheet.NamedStyles<any> | undefined => {
  if (!outline) {
    return undefined;
  }
  switch (variant) {
    case 'white':
    case 'grey':
    case 'transparent':
      return styles.outline;
    default:
      return undefined;
  }
};
