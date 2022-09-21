/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { palette } from '@app/theme';

import { Theme } from '@app/state/stores/settings/types';
import { ToggleVariant } from './types';
import {
  containerColor,
  pillColor,
  textOffColor,
  textOnColor,
} from './constants';

export const getContainerStyles = (
  disabled: boolean,
  theme: Theme = 'light'
) => {
  if (disabled) {
    return { backgroundColor: containerColor.disabled };
  }
  return { backgroundColor: containerColor[theme] };
};

export const getPillStyles = (
  variant: ToggleVariant,
  disabled: boolean,
  theme: Theme = 'light'
) => {
  if (disabled) {
    return { backgroundColor: pillColor.disabled };
  }
  if (variant === 'default') {
    return { backgroundColor: pillColor[theme] };
  }
  return { backgroundColor: palette[variant] };
};

export const getTextColorOff = (disabled: boolean, theme: Theme = 'light') => {
  if (disabled) {
    return textOffColor.disabled;
  }
  return textOffColor[theme];
};

export const getTextColorOn = (
  disabled: boolean,
  theme: Theme = 'light'
): string => {
  if (disabled) {
    return textOnColor.disabled;
  }
  return textOnColor[theme];
};
