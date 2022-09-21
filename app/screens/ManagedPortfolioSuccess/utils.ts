import { Theme } from '@app/state/stores/settings/types';
import { ViewStyle } from 'react-native';
import { BORDER_COLOR } from './constants';
import styles from './styles';

export const getButtonsContainerStyleByTheme = (theme: Theme): ViewStyle[] => [
  styles.reassessmentButtonsContainer,
  {
    borderTopColor: BORDER_COLOR[theme],
  },
];
