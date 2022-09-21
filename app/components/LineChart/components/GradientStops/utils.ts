import { PaletteColor } from '@app/theme';
import { GradientStop } from '@app/components/LineChart/types';

import {
  GRADIENT_FIRST_OFFSET,
  GRADIENT_FIRST_STOP_OPACITY,
  GRADIENT_SECOND_DIVISOR,
  GRADIENT_SECOND_STOP_OPACITY,
  GRADIENT_THIRD_STOP_OPACITY,
  SOLID_STOP_OPACITY,
  GRADIENT_THIRD_DIVISOR,
} from '../../constants';

export const getGradientStops = (
  isDarkTheme: boolean,
  chartHeight: number,
  totalHeight: number,
  gradient: PaletteColor,
  isSolidBackground: boolean
): GradientStop[] => {
  const height = isDarkTheme ? totalHeight : chartHeight;

  const secondOffSet = `${height / GRADIENT_SECOND_DIVISOR}%`;
  const thirdOffSet = `${height / GRADIENT_THIRD_DIVISOR}%`;

  const first = {
    stopColor: gradient,
    stopOpacity: !isSolidBackground
      ? GRADIENT_FIRST_STOP_OPACITY
      : SOLID_STOP_OPACITY,
    offset: GRADIENT_FIRST_OFFSET,
  };
  const second = {
    stopColor: gradient,
    stopOpacity: !isSolidBackground
      ? GRADIENT_SECOND_STOP_OPACITY
      : SOLID_STOP_OPACITY,
    offset: secondOffSet,
  };
  const third = {
    stopColor: gradient,
    stopOpacity: !isSolidBackground
      ? GRADIENT_THIRD_STOP_OPACITY
      : SOLID_STOP_OPACITY,
    offset: thirdOffSet,
  };

  return [first, second, third];
};

export const getGradientHeight = (chartHeight: number): number => chartHeight;

export const getGradientRectHeight = (
  chartHeight: number,
  lastPointY: number
): number => chartHeight - lastPointY;

export const getGradientRectY = (lastPointY: number): number => lastPointY;
