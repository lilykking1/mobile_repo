import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';

export const styles = StyleSheet.create({
  currentNumber: {
    left: 22,
    position: 'absolute',
    top: -23,
  },
  thumb: {
    alignItems: 'center',
    backgroundColor: palette.white,
    borderRadius: 20,
    borderWidth: 0,
    flexDirection: 'row',
    height: 32,
    justifyContent: 'center',
    width: 54,
  },
  thumbDetail: {
    height: 12,
    margin: 2,
    width: 2,
  },
});
