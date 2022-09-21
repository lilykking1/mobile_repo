import Color from 'color';

const SHADOW_COLOR = '#101076';
export const RATIO_LINE_HEIGHT_LARGE = 0.14;
export const RATIO_LINE_HEIGHT_NORMAL = 0.07;
export const RATIO_LINE_HEIGHT_SMALL = 0.055;
export const RATIO_HEIGHT_LARGE = RATIO_LINE_HEIGHT_LARGE - 0.018;
export const RATIO_HEIGHT_NORMAL = RATIO_LINE_HEIGHT_NORMAL - 0.015;
export const RATIO_HEIGHT_SMALL = RATIO_LINE_HEIGHT_SMALL - 0.012;

export const SHADOW_COLOR_WITH_ALPHA = Color(SHADOW_COLOR)
  .alpha(0.04)
  .toString();
export const SHADOW_DISTANCE = 9;
export const SHADOW_OFFSET_X = 0;
export const SHADOW_OFFSET_Y = 3;
export const LABEL_MARGIN_TOP = {
  light: 0,
  dark: 6,
};
