import { isEmpty } from 'lodash';

import { Theme } from '@app/state/stores/settings/types';
import { palette, PaletteColor } from '@app/theme';
import { StyleSheet } from 'react-native';
import { disabledStyle, errorStyle, stateStyle } from './styles';
import { DisabledStyle, ErrorStyle, StateStyle } from './types';

export const getStateStyle = (
  checked: boolean,
  theme: Theme
): StyleSheet.NamedStyles<StateStyle> => {
  const isDarkTheme = theme === 'dark';
  if (isDarkTheme) {
    return checked ? stateStyle.checkedDark : stateStyle.uncheckedDark;
  }
  return checked ? stateStyle.checkedLight : stateStyle.uncheckedLight;
};

export const getDisabledStyle = (
  checked: boolean,
  disabled: boolean,
  theme: Theme
): StyleSheet.NamedStyles<DisabledStyle> => {
  const isDarkTheme = theme === 'dark';
  if (!disabled) {
    return null;
  }
  if (isDarkTheme) {
    return checked ? disabledStyle.checkedDark : disabledStyle.uncheckedDark;
  }
  return checked ? disabledStyle.checkedLight : disabledStyle.uncheckedLight;
};

export const getErrorStyle = (
  checked?: boolean,
  touched?: boolean,
  error?: string
): StyleSheet.NamedStyles<ErrorStyle> => {
  const hasError = touched && !isEmpty(error);
  if (!hasError) {
    return null;
  }
  return checked ? errorStyle.checked : errorStyle.unchecked;
};

export const getIconTint = (disabled: boolean, theme: Theme): PaletteColor => {
  if (!disabled) {
    return palette.white;
  }
  const isDarkTheme = theme === 'dark';
  return isDarkTheme ? palette.grey[700] : palette.white;
};
