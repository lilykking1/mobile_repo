import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 15,
  },
  footer: {
    bottom: 18,
    justifyContent: 'center',
    left: 24,
    position: 'absolute',
    right: 24,
  },
  marketMessage: {
    color: palette.grey[600],
    textAlign: 'center',
  },
});

export default styles;
