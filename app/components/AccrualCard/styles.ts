import { StyleSheet } from 'react-native';

import { palette, paletteColors } from '@app/theme';

import Color from 'color';
import { AccrualCardSizeStyle, AccrualCardVariantStyle } from './types';

export const sizes = StyleSheet.create<AccrualCardSizeStyle>({
  large: {
    borderRadius: 12,
  },
  medium: {
    borderRadius: 8,
  },
  small: {
    borderRadius: 4,
  },
  xlarge: {
    borderRadius: 20,
  },
});

export const styles = StyleSheet.create({
  base: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
  },
});

export const variations = StyleSheet.create<AccrualCardVariantStyle>({
  loss: {
    backgroundColor: paletteColors.yellow[200],
    text: {
      color: paletteColors.yellow[600],
    },
  },
  'loss-red': {
    backgroundColor: paletteColors.red[200],
    text: {
      color: paletteColors.red[600],
    },
  },
  none: {
    backgroundColor: palette.transparent,
    text: {
      color: palette.greeenShark,
    },
  },
  profit: {
    backgroundColor: Color(paletteColors.green[200]).alpha(0.1).toString(),
    text: {
      color: paletteColors.green[500],
    },
  },
});
