import { PaletteColor } from '@app/theme';
import { Theme } from '@app/state/stores/settings/types';
import { ICON_THEME_VARIANTS } from './constants';

export const getIconTint = (theme: Theme): PaletteColor =>
  ICON_THEME_VARIANTS[theme];
