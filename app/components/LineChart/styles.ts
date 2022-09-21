import { StyleSheet, ViewStyle } from 'react-native';
import { CHART_DEFAULT_PADDING } from './constants';

interface Styles {
  container: ViewStyle;
}

export const getBaseStyles = (height?: number, width?: number): Styles =>
  StyleSheet.create({
    container: {
      height,
      width,
    },
  });

export const styles = StyleSheet.create({
  card: {
    flex: 0,
    paddingVertical: 10,
  },
  centralContainer: {
    alignItems: 'center',
    flex: 2,
  },
  childrenContainer: {
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  emptyChartContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: CHART_DEFAULT_PADDING,
    marginTop: CHART_DEFAULT_PADDING,
  },
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
  sideContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
});
