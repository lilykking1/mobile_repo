import { StyleSheet } from 'react-native';

import { palette } from '@app/theme';

const styles = StyleSheet.create({
  circle: {
    backgroundColor: palette.green[500],
    borderRadius: 3,
    height: 6,
    marginRight: 5,
    width: 6,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  subContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: 36,
    justifyContent: 'space-between',
  },
  topContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
