import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';

const styles = StyleSheet.create({
  badgeAlerts: {
    alignItems: 'center',
    backgroundColor: palette.royalBlue[500],
    borderRadius: 7,
    height: 14,
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
    width: 14,
  },
  base: {
    alignItems: 'center',
    borderRadius: 12,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  horizontalSpace: {
    marginRight: 8,
  },
  pressed: {
    backgroundColor: palette.grey[600],
  },
});

export default styles;
