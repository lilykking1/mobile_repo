import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 15,
    paddingHorizontal: 15,
  },
  headerTitle: {
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 2,
  },
  iconBtn: {
    backgroundColor: palette.transparent,
    borderRadius: 12,
    width: 36,
  },
});

export default styles;
