import { DefaultTheme } from '@react-navigation/native';

import { palette } from '@app/theme';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: palette.white,
    primary: palette.purplePersian,
  },
};

export default theme;
