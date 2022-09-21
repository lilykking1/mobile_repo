import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';
import color from 'color';
import { TooltipVariantStyle } from './types';

export const styles = StyleSheet.create({
  tooltipContainer: {
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

export const variations = StyleSheet.create<TooltipVariantStyle>({
  error: {
    backgroundColor: color(palette.red[500]).alpha(0.1).toString(),
  },
  success: {
    backgroundColor: color(palette.green[500]).alpha(0.1).toString(),
  },
  warning: {
    backgroundColor: color(palette.yellow[600]).alpha(0.1).toString(),
  },
});
