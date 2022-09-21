import { palette } from '@app/theme';

// light background
const LIGHT_DEFAULT_BACKGROUND = palette.grey[300];
const LIGHT_ACTIVE_BACKGROUND = palette.transparent;

// light border
const LIGHT_DEFAULT_BORDER = palette.transparent;
const LIGHT_ACTIVE_BORDER = palette.royalBlue[400];

// dark background
const DARK_DEFAULT_BACKGROUND = palette.royalBlue[950];
const DARK_ACTIVE_BACKGROUND = palette.transparent;

// dark border
const DARK_DEFAULT_BORDER = palette.transparent;
const DARK_ACTIVE_BORDER = palette.royalBlue[400];

// dark text
const DARK_DEFAULT_TEXT_COLOR = palette.grey[600];
const DARK_ACTIVE_TEXT_COLOR = palette.white;

// light text
const LIGHT_DEFAULT_TEXT_COLOR = palette.grey[600];
const LIGHT_ACTIVE_TEXT_COLOR = palette.black;

export const lightActiveColors = {
  background: LIGHT_ACTIVE_BACKGROUND,
  border: LIGHT_ACTIVE_BORDER,
  text: LIGHT_ACTIVE_TEXT_COLOR,
};

export const lightDefaultColors = {
  background: LIGHT_DEFAULT_BACKGROUND,
  border: LIGHT_DEFAULT_BORDER,
  text: LIGHT_DEFAULT_TEXT_COLOR,
};

export const darkActiveColors = {
  background: DARK_ACTIVE_BACKGROUND,
  border: DARK_ACTIVE_BORDER,
  text: DARK_ACTIVE_TEXT_COLOR,
};

export const darkDefaultColors = {
  background: DARK_DEFAULT_BACKGROUND,
  border: DARK_DEFAULT_BORDER,
  text: DARK_DEFAULT_TEXT_COLOR,
};
