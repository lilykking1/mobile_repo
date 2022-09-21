import { ViewStyle } from 'react-native';
import { Theme } from '@app/state/stores/settings/types';
import { separatorStyleTheme } from './constants';

export const getSeparatorStyle = (theme: Theme): ViewStyle => ({
  backgroundColor: separatorStyleTheme[theme],
});
