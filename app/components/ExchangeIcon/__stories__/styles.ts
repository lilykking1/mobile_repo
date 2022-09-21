import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dark: {
    backgroundColor: palette.purpleZodiac,
    color: palette.whiteZircon,
  },
  icon: {
    alignItems: 'center',
    backgroundColor: palette.white,
    borderRadius: 4,
    justifyContent: 'center',
    margin: 4,
    paddingVertical: 18,
    width: 108,
  },
  label: {
    fontSize: 10,
    marginTop: 12,
    textAlign: 'center',
  },
  light: {
    backgroundColor: palette.white,
    color: palette.purpleZodiac,
  },
});

export default styles;
