import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    height: 6,
    marginRight: 10,
    width: 6,
  },
  invisible: {
    backgroundColor: palette.transparent,
  },
  regular: {
    backgroundColor: palette.grey[400],
  },
  selected: {
    backgroundColor: palette.royalBlue[500],
  },
});

export default styles;
