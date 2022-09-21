import {
  TypographySize,
  TypographyVariant,
} from '@app/components/Typography/types';
import { palette } from '@app/theme';

const lightThemePressed = palette.grey[400];
const darkThemePressed = palette.royalBlue[950];

const lightThemeDisabled = palette.grey[300];
const darkThemeDisabled = palette.royalBlue[950];

export const pressedBackgroundColor = {
  light: lightThemePressed,
  dark: darkThemePressed,
};

export const disabledBackgroundColor = {
  light: lightThemeDisabled,
  dark: darkThemeDisabled,
};

const disabledLabelLightVariant: TypographyVariant = 'grey.500';
const disabledLabelDarkVariant: TypographyVariant = 'grey.700';

export const disabledLabelVariants = {
  light: disabledLabelLightVariant,
  dark: disabledLabelDarkVariant,
};

const xlargeLabelSize: TypographySize = 'h6';
const largeLabelSize: TypographySize = 'h5';
const normalLabelSize: TypographySize = 'body1';
const smallLabelSize: TypographySize = 'buttons';

export const textSizes = {
  large: largeLabelSize,
  xlarge: xlargeLabelSize,
  normal: normalLabelSize,
  small: smallLabelSize,
};
