import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';

const styles = StyleSheet.create({
  container: {
    borderColor: palette.transparent,
    borderWidth: 2,
    marginRight: 8,
    padding: 2,
  },
  selected: {
    borderColor: palette.primary,
    borderRadius: 24,
  },
});

export default styles;
