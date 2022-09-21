import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';

const styles = StyleSheet.create({
  base: {
    height: 36,
    width: 36,
  },
  pressed: {
    backgroundColor: palette.grey[600],
  },
});

export default styles;
