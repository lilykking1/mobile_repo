import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';

const styles = StyleSheet.create({
  base: {
    backgroundColor: palette.white,
    borderRadius: 10,
  },
  content: {
    borderColor: palette.black,
    borderWidth: 1,
    paddingHorizontal: 3,
  },
  labelTypography: {
    textAlign: 'center',
  },
  typographyFixedHeight: {
    textAlign: 'center',
  },
});

export default styles;
