import { StyleSheet } from 'react-native';
import color from 'color';

import { palette } from '@app/theme';

const styles = StyleSheet.create({
  blur: {
    backgroundColor: color(palette.primary).alpha(0.1).toString(),
    bottom: 0,
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    zIndex: 2,
  },
});

export default styles;
