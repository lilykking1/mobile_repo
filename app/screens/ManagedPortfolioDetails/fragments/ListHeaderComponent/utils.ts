import { PaletteColor } from '@app/theme';
import { Theme } from '@app/state/stores/settings/types';
import { GRADIENT_COLOR } from './constants';

export const getGradientColor = (theme: Theme): PaletteColor =>
  GRADIENT_COLOR[theme || 'light'];
