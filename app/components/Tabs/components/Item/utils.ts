import { ViewStyle } from 'react-native';

import { TypographyVariant } from '@app/components/Typography/types';
import { Theme } from '@app/state/stores/settings/types';

import styles from './styles';

export const getContainerStyles = (selected: boolean): ViewStyle =>
  selected && styles.selectedBox;

export const getLabelVariant = (
  selected: boolean,
  theme: Theme = 'light'
): TypographyVariant => {
  if (selected) {
    return 'secondary.500';
  }

  return theme === 'dark' ? 'grey.300' : 'secondary.900';
};
