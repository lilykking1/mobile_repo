import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';
import color from 'color';

export const variantStyle = StyleSheet.create({
  gainChart: {
    backgroundColor: color(palette.green[500]).alpha(0.3).toString(),
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: 0.5,
  },
  lossChart: {
    backgroundColor: color(palette.red[500]).alpha(0.3).toString(),
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginRight: 0.5,
  },
});

export const filledStyle = StyleSheet.create({
  gainBubbleChart: {
    backgroundColor: palette.green[500],
  },
  gainFilledChart: {
    backgroundColor: palette.green[500],
  },
  lossBubbleChart: {
    backgroundColor: palette.red[500],
  },
  lossFilledChart: {
    alignSelf: 'flex-end',
    backgroundColor: palette.red[500],
  },
});

const styles = StyleSheet.create({
  base: {
    height: 8,
    width: '50%',
  },
  bubbleBase: {
    backgroundColor: palette.white,
    borderRadius: 50,
    height: 8,
    position: 'absolute',
    width: 8,
  },
  filledChartBase: {
    height: 8,
  },
});

export default styles;
