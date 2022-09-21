import { palette } from '@app/theme';
import { getFontStyleForWeight } from '@app/utils/font';
import { StyleSheet } from 'react-native';

import { RadioButtonItemSizeStyle, RadioButtonItemVariantStyle } from './types';

export const sizeStyles = StyleSheet.create<RadioButtonItemSizeStyle>({
  normal: {
    lineHeight: 18,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  small: {
    lineHeight: 15,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});

export const inactiveStyles = StyleSheet.create<RadioButtonItemVariantStyle>({
  danger: {
    color: palette.red[500],
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
  warning: {
    color: palette.yellow[500],
  },
});

const styles = StyleSheet.create({
  base: {
    ...getFontStyleForWeight({
      fontFamily: 'VisueltPro',
      fontWeight: '500',
    }),
    color: palette.white,
  },
  container: {
    flexWrap: 'nowrap',
  },
});

export default styles;
