import { Theme } from '@app/state/stores/settings/types';
import { palette } from '@app/theme';
import { StyleProp, ViewStyle } from 'react-native';

export function getCardColor(theme: Theme = 'light'): StyleProp<ViewStyle> {
  const isDarkTheme = theme === 'dark';
  const color = isDarkTheme ? palette.royalBlue[1000] : palette.grey[300];

  return {
    backgroundColor: color,
    borderColor: color,
  };
}
