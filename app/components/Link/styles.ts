import { StyleSheet } from 'react-native';

import { palette } from '@app/theme';
import { getFontStyleForWeight } from '@app/utils/font';

import { LinkSizeStyle, LinkVariantStyle } from './types';

export const sizes = StyleSheet.create<LinkSizeStyle>({
  large: {
    fontSize: 22,
    lineHeight: 28,
  },
  normal: {
    ...getFontStyleForWeight({
      fontFamily: 'VisueltPro',
      fontWeight: '500',
    }),
    fontSize: 14,
    lineHeight: 18,
  },
  small: {
    ...getFontStyleForWeight({
      fontFamily: 'VisueltPro',
      fontWeight: '500',
    }),
    fontSize: 12,
    lineHeight: 16,
  },
});

export const variations = StyleSheet.create<LinkVariantStyle>({
  danger: {
    color: palette.red[500],
  },
  inverted: {
    color: palette.white,
  },
  primary: {
    color: palette.royalBlue[500],
  },
  success: {
    color: palette.green[500],
  },
  transparent: {
    color: palette.grey[600],
  },
});

const styles = StyleSheet.create({
  base: {
    ...getFontStyleForWeight({
      fontFamily: 'VisueltPro',
    }),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
  },
  underlined: {
    borderBottomWidth: 1,
    paddingBottom: 1,
  },
});

export default styles;
