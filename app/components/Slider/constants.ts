import { palette } from '@app/theme';
import { ThemeVariant } from './types';

export const THEME_VARIANT: ThemeVariant = {
  light: {
    percentFooterBackground: palette.grey[300],
    maximumTrackTintColor: palette.grey[500],
    thumbDetail: palette.grey[500],
    thumbDetailSnapped: palette.royalBlue[800],
    inputLabel: palette.royalBlue[900],
    trackBackground: palette.white,
  },
  dark: {
    percentFooterBackground: palette.royalBlue[1000],
    maximumTrackTintColor: palette.royalBlue[900],
    thumbDetail: palette.royalBlue[400],
    thumbDetailSnapped: palette.royalBlue[800],
    inputLabel: palette.grey[300],
    trackBackground: palette.royalBlue[950],
  },
};
