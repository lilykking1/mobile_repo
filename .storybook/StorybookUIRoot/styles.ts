import { Platform, StatusBar, StyleSheet } from 'react-native';

import { palette } from '@app/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.purplePersian,
    flex: 1,
  },
  keyboard: {
    flex: 1,
    // Fix Android issue with StatusBar
    // https://github.com/storybookjs/react-native/issues/67
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default styles;
