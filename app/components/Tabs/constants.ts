import { palette } from '@app/theme';
import Color from 'color';

const COLOR_OPACITY = 0.3;

export const LIGHT_CONTAINER_COLOR = Color(palette.grey[400])
  .alpha(COLOR_OPACITY)
  .toString();
export const DARK_CONTAINER_COLOR = Color(palette.grey[600])
  .alpha(COLOR_OPACITY)
  .toString();
