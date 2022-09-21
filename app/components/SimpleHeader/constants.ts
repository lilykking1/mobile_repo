import { palette } from '@app/theme';
import Color from 'color';

export const ICON_THEME_VARIANTS = {
  light: palette.royalBlue[900],
  dark: palette.white,
};

export const BORDER_COLOR = {
  light: Color(palette.grey[500]).alpha(0.6).toString(),
  dark: Color(palette.grey[700]).alpha(0.7).toString(),
};

export const DEFAULT_TRESHOLD = 50;
