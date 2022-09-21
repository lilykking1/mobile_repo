import { StyleSheet } from 'react-native';

import { palette } from '@app/theme';
import { CardSizeStyle, CardVariantStyle } from './types';

export const sizes = StyleSheet.create<CardSizeStyle>({
  large: {
    borderRadius: 16,
  },
  medium: {
    borderRadius: 12,
  },
  small: {
    borderRadius: 8,
  },
  xlarge: {
    borderRadius: 20,
  },
});

export const styles = StyleSheet.create({
  base: {
    borderWidth: 1,
    flex: 1,
  },
  highlight: {
    borderColor: palette.primary,
    borderWidth: 2,
  },
  outline: {
    borderColor: palette.grey[400],
    borderWidth: 2,
  },
});

export const variations = StyleSheet.create<CardVariantStyle>({
  dark: {
    backgroundColor: palette.royalBlue[950],
    borderColor: palette.royalBlue[950],
  },
  green: {
    backgroundColor: palette.success,
    borderColor: palette.success,
  },
  grey: {
    backgroundColor: palette.grey[300],
    borderColor: palette.grey[300],
  },
  red: {
    backgroundColor: palette.danger,
    borderColor: palette.danger,
  },
  transparent: {
    backgroundColor: palette.transparent,
    borderColor: palette.transparent,
  },
  white: {
    backgroundColor: palette.white,
    borderColor: palette.white,
  },
});
