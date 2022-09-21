import { StyleSheet } from 'react-native';

import { palette } from '@app/theme';
import { getFontStyleForWeight } from '@app/utils/font';

import { TextButtonSizeStyle, TextButtonVariantStyle } from './types';

export const sizes = StyleSheet.create<TextButtonSizeStyle>({
  large: {
    ...getFontStyleForWeight({
      fontFamily: 'VisueltPro',
    }),
    fontSize: 18,
    height: 54,
    paddingHorizontal: 28,
  },
  normal: {
    fontSize: 14,
    height: 50,
    paddingHorizontal: 24,
  },
  small: {
    fontSize: 14,
    height: 36,
    paddingHorizontal: 16,
  },
});

export const variations = StyleSheet.create<TextButtonVariantStyle>({
  primary: {
    borderColor: palette.transparent,
    color: palette.royalBlue[500],
  },
  secondary: {
    borderColor: palette.transparent,
    color: palette.grey[600],
  },
});

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    backgroundColor: palette.transparent,
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
  disabled: {
    opacity: 0.75,
  },
  icon: {
    paddingHorizontal: 12,
  },
  pill: {
    borderRadius: 100,
  },
  pressed: {
    backgroundColor: palette.grey[300],
  },
  text: {
    alignSelf: 'center',
  },
});

export const disabledTextVariations = StyleSheet.create<TextButtonVariantStyle>(
  {
    primary: {
      color: palette.grey[600],
    },
    secondary: {
      color: palette.grey[500],
    },
  }
);

export const pressTextVariations = StyleSheet.create<TextButtonVariantStyle>({
  primary: {
    color: palette.royalBlue[500],
  },
  secondary: {
    color: palette.royalBlue[500],
  },
});
export default styles;
