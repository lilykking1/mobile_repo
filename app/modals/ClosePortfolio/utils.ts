import { Theme } from '@app/state/stores/settings/types';
import { TextStyle } from 'react-native';
import { textColors } from './constants';
import { TextColorsKeys } from './types';

export const getTextTheme = (
  theme: Theme = 'light',
  variant: TextColorsKeys
): TextStyle => ({
  color: textColors[theme][variant],
});
