import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    marginVertical: 25,
  },
  valuesContainer: {
    backgroundColor: palette.grey[400],
    borderRadius: 15,
    marginTop: 25,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
});

export default styles;
