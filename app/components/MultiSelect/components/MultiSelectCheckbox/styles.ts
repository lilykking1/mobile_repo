import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';

const styles = StyleSheet.create({
  default: {
    borderColor: palette.greyWaterloo,
    borderRadius: 2,
    borderWidth: 1,
    height: 20,
    overflow: 'hidden',
    width: 20,
  },
});

export default styles;
