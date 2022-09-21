import { Theme } from '@app/state/stores/settings/types';
import { ViewStyle } from 'react-native';
import { ICON_TINT_COLOR } from './constants';
import { styles } from './styles';

export const getCheckIconTint = (theme: Theme): string =>
  ICON_TINT_COLOR[theme];

export const getContainerStyle = (
  isKeyboardOpen: boolean
): ViewStyle | ViewStyle[] =>
  isKeyboardOpen
    ? [styles.container, styles.keyboardOpenContainer]
    : styles.container;
