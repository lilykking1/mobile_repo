import { palette } from '@app/theme';

export const REGEX_AMOUNT_VALIDATION = /^[0-9]*\.?[0-9]*$/;

// dark text
const DARK_DEFAULT_TEXT_COLOR = palette.grey[600];
const DARK_ACTIVE_TEXT_COLOR = palette.white;

// light text
const LIGHT_DEFAULT_TEXT_COLOR = palette.grey[600];
const LIGHT_ACTIVE_TEXT_COLOR = palette.black;

export const lightActiveColors = {
  text: LIGHT_ACTIVE_TEXT_COLOR,
};

export const lightDefaultColors = {
  text: LIGHT_DEFAULT_TEXT_COLOR,
};

export const darkActiveColors = {
  text: DARK_ACTIVE_TEXT_COLOR,
};

export const darkDefaultColors = {
  text: DARK_DEFAULT_TEXT_COLOR,
};
