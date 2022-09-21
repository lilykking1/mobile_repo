import { palette } from '@app/theme';
import { ThemeVariant } from './types';

export const THEME_VARIANT: ThemeVariant = {
  light: {
    textSnapped: palette.royalBlue[800],
    text: palette.grey[600],
  },
  dark: {
    textSnapped: palette.white,
    text: palette.grey[600],
  },
};
