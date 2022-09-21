import { isEmpty } from 'lodash';

import { TypographyVariant } from '@app/components/Typography/types';
import { Theme } from '@app/state/stores/settings/types';

import { levelStyles } from './styles';
import {
  LIGHT_ACTIVE,
  LIGHT_DEFAULT,
  LIGHT_DISABLED,
  LIGHT_ERROR,
  DARK_ACTIVE,
  DARK_DEFAULT,
  DARK_DISABLED,
  DARK_ERROR,
} from './constants';

export const getLevel = (
  active?: boolean,
  touched?: boolean,
  helperText?: string
): Record<string, string | number> => {
  if (active) {
    return levelStyles.active;
  }

  if (touched && !isEmpty(helperText)) {
    return levelStyles.error;
  }

  return levelStyles.normal;
};

export const getWidth = (
  hasAllWidth: boolean
): Record<string, string | number> => hasAllWidth && { width: '100%' };

export const getLabelVariant = (
  active: boolean,
  error: boolean,
  touched: boolean,
  disabled: boolean,
  theme: Theme,
  value: string
): TypographyVariant => {
  const displayError = !active && error && touched;

  const isDarkTheme = theme === 'dark';
  const isDarkActive = isDarkTheme && active;
  const isDarkDisabled = isDarkTheme && disabled;
  const isDarkError = isDarkTheme && displayError;
  const isDarkFilled = isDarkTheme && !isEmpty(value);

  if (isDarkDisabled) {
    return DARK_DISABLED;
  }
  if (isDarkActive || isDarkError || isDarkFilled) {
    return DARK_ACTIVE;
  }
  if (isDarkTheme) {
    return DARK_DEFAULT;
  }

  // light theme
  if (disabled) {
    return LIGHT_DISABLED;
  }
  return LIGHT_DEFAULT;
};

export const getHelperVariant = (
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
