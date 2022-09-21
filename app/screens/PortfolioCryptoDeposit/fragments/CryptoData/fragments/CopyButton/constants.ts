import { palette } from '@app/theme';

const LIGHT_COLOR = palette.royalBlue[800];

const DEFAULT_COLORS = {
  light: LIGHT_COLOR,
  dark: palette.grey[600],
};

const ALT_COLORS = {
  light: LIGHT_COLOR,
  dark: palette.royalBlue[400],
};
export const BUTTON_COLOR = {
  default: DEFAULT_COLORS,
  alt: ALT_COLORS,
};
