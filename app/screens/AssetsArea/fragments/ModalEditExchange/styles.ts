import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  customInputStyle: {
    backgroundColor: palette.white,
    borderColor: palette.grey[500],
    borderRadius: 12,
  },
  itemSeparator: {
    marginTop: 30,
  },
});

export default styles;
