import { Theme } from '@app/state/stores/settings/types';
import { StatusBarStyle } from 'react-native';
import { StatusBarVariants } from './constants';

export const getThemeStatusBar = (theme: Theme = 'light'): StatusBarStyle =>
  StatusBarVariants[theme];
