import { palette } from '@app/theme';

export const MAX_MODAL_HEIGHT = 0.85;

export enum BlurType {
  light = 'light',
  dark = 'ultraThinMaterialDark',
}

export enum MODAL_VARIANTS {
  WHITE = 'white',
  BLACK = 'black',
}

export const DRAWER_THEME = {
  dark: palette.royalBlue[1000],
  light: palette.white,
};

export const DRAWER_THEME_INDICATOR = {
  dark: palette.grey[700],
  light: palette.grey[400],
};

export const modalTransparency = {
  light: MODAL_VARIANTS.WHITE,
  dark: MODAL_VARIANTS.BLACK,
};

export const MODAL_BLUR_TYPE = {
  light: BlurType.light,
  dark: BlurType.dark,
};
