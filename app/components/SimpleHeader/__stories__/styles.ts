import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    ...StyleSheet.absoluteFillObject,
    paddingHorizontal: 10,
  },
  listItem: {
    backgroundColor: palette.grey[600],
    height: 75,
    marginTop: 10,
    width: '100%',
  },
});

export default styles;
