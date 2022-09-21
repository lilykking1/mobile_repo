import { TextStyle } from 'react-native';
import { Theme } from '@app/state/stores/settings/types';
import { INPUT_COLOR } from './constants';

export const getInputColorVariant = (theme: Theme = 'light'): TextStyle => ({
  color: INPUT_COLOR[theme],
});
