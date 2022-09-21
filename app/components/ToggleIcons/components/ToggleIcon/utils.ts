/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { palette } from '@app/theme';

import { Theme } from '@app/state/stores/settings/types';
import { ToggleIconsVariant } from './types';
import { containerStyles, maskStyles, pillStyles } from './styles';

export const getColorFromVariant = (variant: string) => {
  switch (variant) {
    case 'default':
      return palette.primary;
    default:
      return palette[variant];
  }
};

export const getContainerStyles = (
  disabled: boolean,
  rounded: boolean,
  theme: Theme
) => {
  const isDarkTheme = theme === 'dark';
  let currentStyle;

  if (disabled) {
    currentStyle = containerStyles.disabled;
  } else if (isDarkTheme) {
    currentStyle = containerStyles.enabledDark;
  } else {
    currentStyle = containerStyles.enabledLight;
  }

  return [currentStyle, rounded && containerStyles.rounded];
};
export const getPillStyles = (
  variant: ToggleIconsVariant,
  disabled: boolean
) => [
  disabled
    ? pillStyles.disabled
    : { backgroundColor: getColorFromVariant(variant) },
];

export const getMaskStyles = (rounded: boolean) =>
  rounded && maskStyles.rounded;

export const getIconTintOff = (
  disabled: boolean
  // Even though both colors are grey[600], keep this
  // conditional in case the colors ever change.
) => (disabled ? palette.grey[600] : palette.grey[600]);

export const getIconTintOn = (disabled: boolean) =>
  disabled ? palette.grey[500] : palette.white;
