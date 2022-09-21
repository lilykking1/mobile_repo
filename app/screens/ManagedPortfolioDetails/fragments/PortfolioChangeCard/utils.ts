import type { ViewStyle } from 'react-native';
import { Theme } from '@app/state/stores/settings/types';
import { underlineColorThemes } from './constants';

export const getUnderLineColor = (theme: Theme = 'light'): ViewStyle => ({
  borderBottomColor: underlineColorThemes[theme],
});
