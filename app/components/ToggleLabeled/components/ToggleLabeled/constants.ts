import { palette } from '@app/theme';
import { Dimensions } from './types';

export const CONTAINER_HEIGHT = 28;
export const CONTAINER_PADDING = 4;
export const CONTAINER_OUTER_HEIGHT = CONTAINER_HEIGHT + CONTAINER_PADDING * 2;
export const CONTAINER_BORDER_WIDTH = 1;
export const TEXT_MARGIN = 4;

export const INITIAL_DIMENSIONS: Dimensions = { left: 0, right: 0 };

export const enabledPillLightThemeColor = palette.primary;
export const enabledPillDarkThemeColor = palette.royalBlue[400];
export const disabledPillColor = palette.grey[400];
export const pillColor = {
  light: enabledPillLightThemeColor,
  dark: enabledPillDarkThemeColor,
  disabled: disabledPillColor,
};

export const enabledContainerLightThemeColor = palette.grey[300];
export const enabledContainerDarkThemeColor = palette.royalBlue[1000];
export const disabledContainerColor = palette.grey[500];
export const containerColor = {
  light: enabledContainerLightThemeColor,
  dark: enabledContainerDarkThemeColor,
  disabled: disabledContainerColor,
};

export const enabledTextOnLightThemeColor = palette.white;
export const enabledTextOnDarkThemeColor = palette.white;
export const disabledTextOnColor = palette.grey[500];
export const textOnColor = {
  light: enabledTextOnLightThemeColor,
  dark: enabledTextOnDarkThemeColor,
  disabled: disabledTextOnColor,
};

// Even though both colors are grey[600], keep this
// conditional in case the colors ever change.
export const enabledTextOfLightThemeColor = palette.grey[600];
export const enabledTextOfDarkThemeColor = palette.grey[600];
export const disableTextColor = palette.grey[600];
export const textOffColor = {
  light: enabledTextOfLightThemeColor,
  dark: enabledTextOfDarkThemeColor,
  disabled: disableTextColor,
};
