import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  thumbAmount: {
    position: 'absolute',
    top: -22,
  },
  thumbContainer: {
    borderRadius: 18,
    elevation: 10,
    height: 33,
    justifyContent: 'center',
    right: 20,
    shadowColor: palette.grey[600],
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: 56,
  },
});

export default styles;
