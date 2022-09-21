import { StyleSheet } from 'react-native';
import { getFontStyleForWeight } from '@app/utils/font';
import { paletteColors } from '@app/theme';

export const styles = StyleSheet.create({
  base: {
    ...getFontStyleForWeight({
      fontFamily: 'VisueltPro',
    }),
  },
  container: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  rightLabel: {
    color: paletteColors.grey[600],
  },
});

export default styles;
