import { Theme } from '@app/state/stores/settings/types';
import type { StyleSheet } from 'react-native';

import {
  lightStyles,
  darkStyles,
  darkTextStyles,
  lightTextStyles,
} from './styles';

export const getContainerStyles = (
  isInputFocused: boolean,
  theme: Theme
): StyleSheet.NamedStyles<any> | null => {
  const isDarkTheme = theme === 'dark';
  const isDarkActive = isDarkTheme && isInputFocused;

  // dark
  if (isDarkActive) {
    return darkStyles.active;
  }

  if (isDarkTheme) {
    return darkStyles.default;
  }

  // light
  if (isInputFocused) {
    return lightStyles.active;
  }

  return lightStyles.default;
};

export const getTextInputStyles = (
  isInputFocused: boolean,
  theme: Theme
): StyleSheet.NamedStyles<any> | null => {
  const isDarkTheme = theme === 'dark';
  const isDarkActive = isDarkTheme && isInputFocused;

  // dark
  if (isDarkActive) {
    return darkTextStyles.active;
  }

  if (isDarkTheme) {
    return darkTextStyles.default;
  }

  // light
  if (isInputFocused) {
    return lightTextStyles.active;
  }

  return lightTextStyles.default;
};
