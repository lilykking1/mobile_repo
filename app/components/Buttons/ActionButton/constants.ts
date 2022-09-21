import { palette } from '@app/theme';
import { ColorsVariant } from './types';

export const THREE_AND_HALF_SECONDS_IN_MS = 3500;

const BACKGROUND_LIGHT = palette.white;
const BACKGROUND_DARK = palette.royalBlue[950];

export const DISABLED_STYLES: ColorsVariant = {
  light: {
    typography: 'grey.500',
    icon: palette.grey[500],
    backgroundColor: BACKGROUND_LIGHT,
    pressedColor: BACKGROUND_LIGHT,
  },
  dark: {
    typography: 'grey.700',
    icon: palette.grey[700],
    backgroundColor: BACKGROUND_DARK,
    pressedColor: BACKGROUND_DARK,
  },
};

export const ACTIVE_STYLES: ColorsVariant = {
  light: {
    typography: undefined,
    icon: palette.royalBlue[900],
    backgroundColor: BACKGROUND_LIGHT,
    pressedColor: palette.grey[400],
  },
  dark: {
    typography: undefined,
    icon: palette.white,
    backgroundColor: BACKGROUND_DARK,
    pressedColor: palette.royalBlue[900],
  },
};
