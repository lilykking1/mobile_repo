import { isEmpty } from 'lodash';
import { StyleSheet } from 'react-native';

import { TypographyVariant } from '@app/components/Typography/types';
import { Theme } from '@app/state/stores/settings/types';

import {
  DARK_DEFAULT_TEXT,
  DARK_DISABLED_TEXT,
  LIGHT_DEFAULT_TEXT,
  LIGHT_DISABLED_TEXT,
  THEME_VARIANT,
} from './constants';
import { darkTextStyles, lightTextStyles } from './styles';

export const getSuffixVariant = (
  isEditing: boolean,
  theme: string
): TypographyVariant =>
  isEditing ? THEME_VARIANT[theme].suffixEditing : THEME_VARIANT[theme].suffix;

export const getInputTextStyles = (
  disabled: boolean,
  value: string,
  theme: Theme
): StyleSheet.NamedStyles<any> | null => {
  const isFilled = !isEmpty(value);

  const isDarkTheme = theme === 'dark';
  const isDarkFilled = isDarkTheme && isFilled;
  const isDarkDisabled = isDarkTheme && disabled;

  // dark
  if (isDarkDisabled) {
    return darkTextStyles.disabled;
  }
  if (isDarkFilled) {
    return darkTextStyles.filled;
  }

  // light
  if (disabled) {
    return lightTextStyles.disabled;
  }
  if (isFilled) {
    return lightTextStyles.filled;
  }

  return null;
};

export const getPlaceholderColor = (
  theme: Theme,
  disabled: boolean,
  active: boolean
): string => {
  const isDarkTheme = theme === 'dark';
  const isDarkDisabled = isDarkTheme && disabled;
  const isDarkActive = isDarkTheme && active;

  // dark
  if (isDarkDisabled || isDarkActive) {
    return DARK_DISABLED_TEXT;
  }
  if (isDarkTheme) {
    return DARK_DEFAULT_TEXT;
  }

  // light
  if (disabled || active) {
    return LIGHT_DISABLED_TEXT;
  }
  return LIGHT_DEFAULT_TEXT;
};
