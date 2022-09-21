import { ViewStyle } from 'react-native';
import { Theme } from '@app/state/stores/settings/types';
import {
  modalStyleTheme,
  MODAL_VARIANTS,
  modalTransparency,
} from './constants';

export const getModalStyle = (theme: Theme): ViewStyle => ({
  backgroundColor: modalStyleTheme[theme],
});

export const getBlurConfig = (theme: Theme): MODAL_VARIANTS =>
  modalTransparency[theme];
