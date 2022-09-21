import Color from 'color';

const color = '#101076';
export const SHADOW_ALPHA = 0.04;
export const BACKGROUND_ALPHA = 0.1;

export const SHADOW_COLOR_WITH_ALPHA = Color(color)
  .alpha(SHADOW_ALPHA)
  .toString();
export const SHADOW_DISTANCE = 9;
export const SHADOW_OFFSET_X = 0;
export const SHADOW_OFFSET_Y = 3;
export const DOLLAR_CHAR = '$';
