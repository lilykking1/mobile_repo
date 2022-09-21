import { Theme } from '@app/state/stores/settings/types';
import { ViewStyle } from 'react-native';
import { LIST_BACKGROUND_COLOR } from './constants';

export const getListBackground = (theme: Theme = 'light'): ViewStyle => {
  const backgroundColor = LIST_BACKGROUND_COLOR[theme];
  return { backgroundColor };
};
