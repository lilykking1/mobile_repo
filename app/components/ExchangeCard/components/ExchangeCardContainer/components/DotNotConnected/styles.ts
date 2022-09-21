import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.red[500],
    borderColor: palette.white,
    borderRadius: 6,
    borderWidth: 2,
    height: 12,
    position: 'absolute',
    right: -6,
    top: -6,
    width: 12,
  },
});

export default styles;
