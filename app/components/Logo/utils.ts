import { palette, PaletteColor } from '@app/theme';

import { LogoVariant } from './types';

export const DEFAULT_WIDTH = 167;
export const DEFAULT_HEIGHT = 50;
const ASPECT_RATIO = DEFAULT_WIDTH / DEFAULT_HEIGHT;

export const calculateDimensions = (
  width?: number,
  height?: number,
  compact?: boolean
) => {
  const aspectRatio = compact ? 1 : ASPECT_RATIO;

  let calculatedWidth = DEFAULT_WIDTH;
  let calculatedHeight = DEFAULT_HEIGHT;

  if (width && !height) {
    calculatedWidth = width;
    calculatedHeight = width / aspectRatio;
  }

  if (!width && height) {
    calculatedWidth = height * aspectRatio;
    calculatedHeight = height;
  }

  if (width && height) {
    calculatedWidth = width;
    calculatedHeight = height;
  }

  const viewBoxWidth = compact ? DEFAULT_HEIGHT : DEFAULT_WIDTH;
  const viewBoxHeight = DEFAULT_HEIGHT;

  return {
    width: calculatedWidth,
    height: calculatedHeight,
    viewBox: [0, 0, viewBoxWidth, viewBoxHeight].join(' '),
  };
};

export const getAccentColor = (variant?: LogoVariant): PaletteColor => {
  switch (variant) {
    case 'dark':
      return palette.white;
    case 'light':
    default:
      return palette.royalBlue[900];
  }
};

export const getMonochromaticColor = (
  tint: PaletteColor,
  monochromatic?: boolean
): [PaletteColor, PaletteColor] => {
  if (monochromatic) {
    return [tint, tint];
  }

  return [palette.royalBlue[500], palette.blueMalibu];
};
