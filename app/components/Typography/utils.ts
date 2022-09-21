import type { StyleSheet, TextStyle } from 'react-native';

import { Theme } from '@app/state/stores/settings/types';

import {
  TypographySize,
  TypographySizeStyle,
  TypographyVariant,
  TypographyVariantStyle,
} from './types';
import styles, { sizesStyle, variationsStyle } from './styles';

interface GetVariantProps {
  theme: Theme;
  variant?: TypographyVariant;
  disabled?: boolean;
  altLight?: TypographyVariant;
  altDark?: TypographyVariant;
}

const getDisabledStyle = (isDarkTheme: boolean) =>
  isDarkTheme ? variationsStyle['grey.700'] : variationsStyle['grey.500'];

const getDefaultStyle = (isDarkTheme: boolean) =>
  isDarkTheme ? variationsStyle['grey.300'] : variationsStyle['secondary.900'];

export const getVariantStyle = ({
  theme,
  variant,
  disabled,
  altLight,
  altDark,
}: GetVariantProps): StyleSheet.NamedStyles<TypographyVariantStyle> => {
  const isDarkTheme = theme === 'dark';

  // returns disabled styles if it's disabled
  if (disabled) {
    return getDisabledStyle(isDarkTheme);
  }

  // returns the alt Light if it's passed and is light theme
  if (altLight && !isDarkTheme) {
    return variationsStyle[altLight];
  }

  // returns the alt Dark if it's passed and is dark theme
  if (altDark && isDarkTheme) {
    return variationsStyle[altDark];
  }

  if (!variant) {
    return getDefaultStyle(isDarkTheme);
  }

  return variationsStyle[variant];
};

export const getSizeStyle = (
  size: TypographySize
): StyleSheet.NamedStyles<TypographySizeStyle> => {
  if (!size) {
    return sizesStyle.buttons;
  }

  return sizesStyle[size];
};

export const getStrongStyle = (strong?: boolean): TextStyle => {
  if (!strong) {
    return null;
  }

  return styles.strong;
};
