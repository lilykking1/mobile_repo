import { palette } from '@app/theme';
import { TextColors } from './types';

export const textColors: TextColors = {
  light: {
    title: palette.royalBlue[800],
    subtitle: palette.royalBlue[800],
  },
  dark: {
    title: palette.white,
    subtitle: palette.grey[600],
  },
};
