import { PaletteColor } from '@app/theme';
import { Theme } from '@app/state/stores/settings/types';
import { GRADIENT_COLOR, ICON_COLOR } from './constants';

export const getGradientColor = (theme: Theme): PaletteColor =>
  GRADIENT_COLOR[theme || 'light'];

export const getIconColor = (theme: Theme): PaletteColor =>
  ICON_COLOR[theme || 'light'];
