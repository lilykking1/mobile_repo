import { palette } from '@app/theme';
import { ThemeVariant } from './types';

export const THEME_VARIANT: ThemeVariant = {
  light: {
    suffix: 'secondary.900',
    suffixEditing: 'main.200',
  },
  dark: {
    suffix: 'grey.300',
    suffixEditing: 'grey.700',
  },
};

// light theme input text
export const LIGHT_DEFAULT_TEXT = palette.secondary;
export const LIGHT_DISABLED_TEXT = palette.grey[500];
export const LIGHT_FILLED_TEXT = palette.royalBlue[900];

// dark theme input text
export const DARK_DEFAULT_TEXT = palette.grey[500];
export const DARK_DISABLED_TEXT = palette.grey[700];
export const DARK_FILLED_TEXT = palette.grey[300];
