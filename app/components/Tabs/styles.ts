import { StyleSheet } from 'react-native';

import { palette } from '@app/theme';

const styles = StyleSheet.create({
  activeContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  container: {
    alignSelf: 'center',
    borderRadius: 16,
    height: 50,
    overflow: 'hidden',
    padding: 4,
    position: 'relative',
    width: '100%',
  },
  inactiveContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: 50,
    position: 'absolute',
    width: '100%',
    zIndex: -1,
  },
  mask: {
    // Must be black to mask the alpha channel
    backgroundColor: palette.black,
    height: '100%',
  },
});

export default styles;
