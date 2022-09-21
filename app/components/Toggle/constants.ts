import { palette } from '@app/theme';
import color from 'color';

export const DEFAULT_TOGGLED = false;
export const WIDTH = 64;
export const HEIGHT = 22;
export const PADDING = 3;
export const toggleStatus = {
  on: 'on',
  off: 'off',
};

// Background switch color
export const lightThemeDefault = {
  on: palette.royalBlue[400],
  off: palette.grey[600],
};
export const darkThemeDefault = {
  on: palette.royalBlue[400],
  off: palette.grey[600],
};
export const lightThemeDisabled = {
  on: color(palette.royalBlue[400]).alpha(0.3).toString(),
  off: palette.grey[500],
};
export const darkThemeDisabled = {
  on: color(palette.royalBlue[400]).alpha(0.3).toString(),
  off: palette.royalBlue[900],
};

// Wheel switch color
export const lightWheelDefault = {
  on: palette.white,
  off: palette.white,
};
export const darkWheelDefault = {
  on: palette.white,
  off: palette.white,
};
export const lightWheelDisabled = {
  on: color(palette.white).alpha(0.7).toString(),
  off: palette.grey['300'],
};
export const darkWheelDisabled = {
  on: color(palette.white).alpha(0.5).toString(),
  off: color(palette.grey['300']).alpha(0.3).toString(),
};

export const backgroundColorThemes = {
  light: {
    default: lightThemeDefault,
    disabled: lightThemeDisabled,
  },
  dark: {
    default: darkThemeDefault,
    disabled: darkThemeDisabled,
  },
};

export const wheelColorThemes = {
  light: {
    default: lightWheelDefault,
    disabled: lightWheelDisabled,
  },
  dark: {
    default: darkWheelDefault,
    disabled: darkWheelDisabled,
  },
};

export const toggleSizes = {
  small: {
    height: 24,
    width: 40,
    borderRadius: 12,
  },
  medium: {
    height: 30,
    width: 50,
    borderRadius: 15,
  },
};

export const toggleWheelSizes = {
  small: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  medium: {
    height: 25,
    width: 25,
    borderRadius: 12.5,
  },
};
