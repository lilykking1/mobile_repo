import { palette } from '@app/theme';

export enum MODAL_VARIANTS {
  WHITE = 'white',
  BLACK = 'black',
}

export const lightThemeModal = palette.white;
export const darkThemeModal = palette.royalBlue[1000];

export const modalStyleTheme = {
  light: lightThemeModal,
  dark: darkThemeModal,
};

export const modalTransparency = {
  light: MODAL_VARIANTS.WHITE,
  dark: MODAL_VARIANTS.BLACK,
};
