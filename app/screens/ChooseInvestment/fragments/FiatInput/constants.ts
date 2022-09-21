import { palette } from '@app/theme';

export const REGEX_FIAT_AMOUNT_VALIDATION = /^\d+$/g;

export const BITCOIN_CHAR = '₿';

// TODO: use the backend value to convert the value
export const BITCOIN_VALUE = 0.000043;

// dark text
const DARK_TEXT_COLOR = palette.white;

// light text
const LIGHT_TEXT_COLOR = palette.royalBlue[900];

export const lightColors = {
  text: LIGHT_TEXT_COLOR,
};

export const darkColors = {
  text: DARK_TEXT_COLOR,
};
