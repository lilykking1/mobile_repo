import { TextStyle } from 'react-native';
import { Theme } from '@app/state/stores/settings/types';
import { INPUT_COLOR_VARIANT, INPUT_PLACEHOLDER_VARIANT } from './constants';

export const getInputColorVariant = (theme: Theme = 'light'): TextStyle => ({
  color: INPUT_COLOR_VARIANT[theme],
});

export const getPlaceholderColor = (theme: Theme = 'light'): string =>
  INPUT_PLACEHOLDER_VARIANT[theme];
