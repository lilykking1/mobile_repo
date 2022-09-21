import { TypographyVariant } from '@app/components/Typography/types';
import { Theme } from '@app/state/stores/settings/types';

import {
  LIGHT_DEFAULT,
  LIGHT_ACTIVE,
  LIGHT_DISABLED,
  LIGHT_ERROR,
  DARK_ACTIVE,
  DARK_DEFAULT,
  DARK_DISABLED,
  DARK_ERROR,
} from './constants';

export const getTextVariant = (
  active: boolean,
  error: boolean,
  touched: boolean,
  disabled: boolean,
  theme: Theme
): TypographyVariant => {
  const displayError = !active && error && touched;

  const isDarkTheme = theme === 'dark';
  const isDarkActive = isDarkTheme && active;
  const isDarkDisabled = isDarkTheme && disabled;
  const isDarkError = isDarkTheme && displayError;

  // dark
  if (isDarkActive) {
    return DARK_ACTIVE;
  }
  if (isDarkDisabled) {
    return DARK_DISABLED;
  }
  if (isDarkError) {
    return DARK_ERROR;
  }
  if (isDarkTheme) {
    return DARK_DEFAULT;
  }

  // light
  if (active) {
    return LIGHT_ACTIVE;
  }
  if (disabled) {
    return LIGHT_DISABLED;
  }
  if (error) {
    return LIGHT_ERROR;
  }
  return LIGHT_DEFAULT;
};
