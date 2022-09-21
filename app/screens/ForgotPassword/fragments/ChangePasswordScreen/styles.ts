import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 300,
  },
  container: {
    paddingHorizontal: 40,
  },
  titleHeader: {
    textAlign: 'center',
  },
  titleScreen: {
    color: palette.grey[600],
    fontSize: 14,
    marginVertical: 24,
  },
});

export default styles;
