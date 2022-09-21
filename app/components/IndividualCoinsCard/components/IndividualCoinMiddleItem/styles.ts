import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';
import Color from 'color';

const styles = StyleSheet.create({
  empty: {
    backgroundColor: palette.grey[600],
    height: 1,
    width: 5,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: Color(palette.green[500]).alpha(0.2).toString(),
    borderRadius: 6,
    height: 12,
    justifyContent: 'center',
    marginRight: 4,
    width: 12,
  },
  middleItemContainer: {
    alignItems: 'center',
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default styles;
