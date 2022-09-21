import type { StyleProp, StyleSheet, TextProps, TextStyle } from 'react-native';
import { Theme } from '@app/state/stores/settings/types';
import { ButtonSize, ButtonVariant } from './types';
import styles, {
  disabledButtonStyleTheme,
  disabledButtonTextStyleTheme,
  pressTextVariations,
  pressVariations,
  sizes,
  variationsStyleTheme,
} from './styles';

export const getSizeStyle = (size: ButtonSize): StyleSheet.NamedStyles<any> => {
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
  variant: ButtonVariant = 'primary',
  theme: Theme = 'light'
): StyleSheet.NamedStyles<any> => variationsStyleTheme[theme][variant];

export const getPressedStyle = (
  variant: ButtonVariant
): StyleSheet.NamedStyles<any> => {
  switch (variant) {
    case 'secondary':
      return pressVariations.secondary;
    case 'green':
      return pressVariations.green;
    case 'red':
      return pressVariations.red;
    case 'primary':
    default:
      return pressVariations.primary;
  }
};

export const getPressedTextStyle = (
  variant: ButtonVariant
): StyleSheet.NamedStyles<any> => {
  switch (variant) {
    case 'primary':
      return pressTextVariations.primary;
    case 'secondary':
      return pressTextVariations.secondary;
    case 'green':
      return pressTextVariations.green;
    case 'red':
      return pressTextVariations.red;
    default:
      return pressTextVariations.primary;
  }
};

export const getDisabledStyle = (
  variant: ButtonVariant,
  useVariantDisabledColor: boolean,
  theme: Theme
): StyleSheet.NamedStyles<any> => {
  const themeToUse = theme || 'light';
  if (!useVariantDisabledColor) {
    return disabledButtonStyleTheme[themeToUse].primary;
  }
  return disabledButtonStyleTheme[themeToUse][variant];
};

export const getDisabledTextStyle = (
  variant: ButtonVariant,
  useVariantDisabledColor: boolean,
  theme: Theme
): StyleSheet.NamedStyles<any> => {
  const themeToUse = theme || 'light';
  if (!useVariantDisabledColor) {
    return disabledButtonTextStyleTheme[themeToUse].primary;
  }
  return disabledButtonTextStyleTheme[themeToUse][variant];
};

export const getTextBaseStyle = (
  useDefaultLineHeight: boolean,
  labelStyle: TextProps
): StyleProp<TextStyle> => [
  styles.text,
  { lineHeight: useDefaultLineHeight ? 28 : undefined },
  labelStyle,
];
