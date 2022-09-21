import { PaletteColor } from '@app/theme';
import { Theme } from '@app/state/stores/settings/types';
import { GRADIENT_COLORS, LINE_COLORS } from './constants';

export const getGradientColor = (theme: Theme = 'light'): PaletteColor =>
  GRADIENT_COLORS[theme];

export const getLineColor = (theme: Theme = 'light'): PaletteColor =>
  LINE_COLORS[theme];
