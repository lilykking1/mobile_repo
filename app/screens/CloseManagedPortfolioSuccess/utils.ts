import { Theme } from '@app/state/stores/settings/types';
import { TextStyle } from 'react-native';
import { subtitleTextColors } from './constants';

export const getTextTheme = (theme: Theme = 'light'): TextStyle => ({
  color: subtitleTextColors[theme],
});
