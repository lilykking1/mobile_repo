import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  absoluteLines: {
    height: 188,
    position: 'absolute',
    width: '100%',
    zIndex: -1,
  },
  coinbaseIcon: {
    marginLeft: 7,
  },
  container: {
    flex: 1,
    paddingTop: 30,
  },
  gridLines: {
    flex: 1,
  },
  headerValues: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  smallAmount: {
    color: palette.grey[600],
    fontSize: 14,
    marginBottom: 24,
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 7,
  },
});

export default styles;
