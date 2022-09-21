import { palette } from '@app/theme';

const mainLightColor = palette.grey[300];
const mainDarkColor = palette.royalBlue[1000];

const secondaryLightColor = palette.white;
const secondaryDarkColor = palette.royalBlue[950];

export const COLORS = {
  main: {
    dark: mainDarkColor,
    light: mainLightColor,
  },
  secondary: {
    dark: secondaryDarkColor,
    light: secondaryLightColor,
  },
};
