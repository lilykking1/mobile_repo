import { Theme } from '@app/state/stores/settings/types';

import {
  DARK_ACTIVE,
  DARK_DEFAULT,
  DARK_DISABLED,
  DARK_FILLED,
  LIGHT_ACTIVE,
  LIGHT_DEFAULT,
  LIGHT_DISABLED,
} from './constants';

export const getIconTint = (
  active: boolean,
  disabled: boolean,
  isFilled: boolean,
  theme: Theme
): string => {
  const isDarkTheme = theme === 'dark';
  const isDarkActive = isDarkTheme && active;
  const isDarkDisabled = isDarkTheme && disabled;
  const isDarkFilled = isDarkTheme && isFilled;

  // dark theme
  if (isDarkActive) {
    return DARK_ACTIVE;
  }
  if (isDarkDisabled) {
    return DARK_DISABLED;
  }
  if (isDarkFilled) {
    return DARK_FILLED;
  }
  if (isDarkTheme) {
    return DARK_DEFAULT;
  }

  // light theme
  if (active) {
    return LIGHT_ACTIVE;
  }
  if (disabled) {
    return LIGHT_DISABLED;
  }
  return LIGHT_DEFAULT;
};
