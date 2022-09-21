import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  close: {
    alignItems: 'center',
    borderColor: palette.greyAmethyst,
    borderRadius: 100,
    borderWidth: 1,
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
    width: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
