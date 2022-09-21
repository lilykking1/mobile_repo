import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  actionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: palette.white,
    flex: 1,
    width: '100%',
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
