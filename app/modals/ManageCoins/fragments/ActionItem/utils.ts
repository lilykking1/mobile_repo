import { Theme } from '@app/state/stores/settings/types';
import { PaletteColor } from '@app/theme';
import { ICON_COLOR } from './constants';

export const getIconColor = (theme: Theme): PaletteColor => ICON_COLOR[theme];
