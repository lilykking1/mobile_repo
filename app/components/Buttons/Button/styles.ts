import { StyleSheet } from 'react-native';
import Color from 'color';

import { palette } from '@app/theme';

import { SHADOW_COLOR_OPACITY } from './constants';

import { ButtonSizeStyle, ButtonVariantStyle } from './types';

export const sizes = StyleSheet.create<ButtonSizeStyle>({
  large: {
    paddingHorizontal: 40,
    paddingVertical: 8,
  },
  normal: {
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
  small: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});

export const variationsDark = StyleSheet.create<ButtonVariantStyle>({
  green: {
    backgroundColor: palette.green[500],
    borderColor: palette.green[500],
    color: palette.white,
    elevation: 4,
    shadowColor: Color(palette.green[200])
      .alpha(SHADOW_COLOR_OPACITY)
      .toString(),
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
  },
  primary: {
    backgroundColor: palette.royalBlue[500],
    borderColor: palette.royalBlue[500],
    color: palette.white,
    elevation: 4,
    shadowColor: Color(palette.royalBlue[500])
      .alpha(SHADOW_COLOR_OPACITY)
      .toString(),
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
  },
  red: {
    backgroundColor: palette.red[500],
    borderColor: palette.red[500],
    color: palette.white,
    elevation: 4,
    shadowColor: Color(palette.red[500]).alpha(SHADOW_COLOR_OPACITY).toString(),
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
  },
  secondary: {
    borderColor: palette.grey[500],
    color: palette.grey[500],
  },
});

export const variationsLight = StyleSheet.create<ButtonVariantStyle>({
  green: {
    backgroundColor: palette.green[500],
    borderColor: palette.green[500],
    color: palette.white,
    elevation: 4,
    shadowColor: Color(palette.green[200])
      .alpha(SHADOW_COLOR_OPACITY)
      .toString(),
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
  },
  primary: {
    backgroundColor: palette.royalBlue[500],
    borderColor: palette.royalBlue[500],
    color: palette.white,
    elevation: 4,
    shadowColor: Color(palette.royalBlue[500])
      .alpha(SHADOW_COLOR_OPACITY)
      .toString(),
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
  },
  red: {
    backgroundColor: palette.red[500],
    borderColor: palette.red[500],
    color: palette.white,
    elevation: 4,
    shadowColor: Color(palette.red[500]).alpha(SHADOW_COLOR_OPACITY).toString(),
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
  },
  secondary: {
    borderColor: palette.grey[600],
    color: palette.grey[600],
  },
});

export const variationsStyleTheme = {
  light: variationsLight,
  dark: variationsDark,
};

export const pressVariations = StyleSheet.create<ButtonVariantStyle>({
  green: {
    backgroundColor: palette.green[600],
    borderColor: palette.green[600],
  },
  primary: {
    backgroundColor: palette.royalBlue[600],
  },
  red: {
    backgroundColor: palette.red[600],
    borderColor: palette.red[600],
  },
  secondary: {
    backgroundColor: palette.transparent,
    borderColor: palette.royalBlue[500],
  },
});

export const pressTextVariations = StyleSheet.create<ButtonVariantStyle>({
  green: {
    color: palette.white,
  },
  primary: {
    color: palette.white,
  },
  red: {
    color: palette.white,
  },
  secondary: {
    color: palette.royalBlue[500],
  },
});

const disabledVariationsLight = StyleSheet.create<ButtonVariantStyle>({
  green: {
    backgroundColor: Color(palette.green[200]).alpha(0.1).toString(),
    borderColor: palette.transparent,
    elevation: 0,
    shadowOpacity: 0,
  },
  primary: {
    backgroundColor: palette.grey[500],
    borderColor: palette.grey[500],
    elevation: 0,
    shadowOpacity: 0,
  },
  red: {
    backgroundColor: palette.red[200],
    borderColor: palette.transparent,
    elevation: 0,
    shadowOpacity: 0,
  },
  secondary: {
    backgroundColor: palette.transparent,
    borderColor: palette.grey[400],
  },
});

const disabledVariationsDark = StyleSheet.create<ButtonVariantStyle>({
  green: {
    backgroundColor: palette.royalBlue[950],
    borderColor: palette.royalBlue[950],
    elevation: 0,
    shadowOpacity: 0,
  },
  primary: {
    backgroundColor: palette.grey[700],
    borderColor: palette.grey[700],
    elevation: 0,
    shadowOpacity: 0,
  },
  red: {
    backgroundColor: palette.royalBlue[950],
    borderColor: palette.royalBlue[950],
    elevation: 0,
    shadowOpacity: 0,
  },
  secondary: {
    backgroundColor: palette.transparent,
    borderColor: palette.grey[700],
  },
});

export const disabledButtonStyleTheme = {
  light: disabledVariationsLight,
  dark: disabledVariationsDark,
};

const disabledTextVariationsLight = StyleSheet.create<ButtonVariantStyle>({
  green: {
    color: palette.grey[500],
  },
  primary: {
    color: palette.grey[600],
  },
  red: {
    color: palette.grey[500],
  },
  secondary: {
    color: palette.grey[500],
  },
});

const disabledTextVariationsDark = StyleSheet.create<ButtonVariantStyle>({
  green: {
    color: palette.grey[700],
  },
  primary: {
    color: palette.grey[600],
  },
  red: {
    color: palette.grey[700],
  },
  secondary: {
    color: palette.grey[700],
  },
});

export const disabledButtonTextStyleTheme = {
  light: disabledTextVariationsLight,
  dark: disabledTextVariationsDark,
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  block: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    width: '100%',
  },
  extraSpace: {
    marginVertical: 5,
  },
  icon: {
    paddingHorizontal: 4,
  },
  pill: {
    borderRadius: 32,
    borderWidth: 1,
  },
  text: {
    alignSelf: 'center',
  },
});

export default styles;
