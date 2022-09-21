import Color from 'color';

const SHADOW_COLOR = '#101076';

export const SHADOW_COLOR_WITH_ALPHA = Color(SHADOW_COLOR)
  .alpha(0.15)
  .toString();

export const SHADOW_DISTANCE = 6;
export const SHADOW_OFFSET_X = 0;
export const SHADOW_OFFSET_Y = 3;
