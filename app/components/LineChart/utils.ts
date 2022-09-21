import {
  curveMonotoneX,
  curveLinear,
  CurveFactoryLineOnly,
  CurveFactory,
} from 'd3-shape';
import { scaleTime, scaleLinear, ScaleTime, ScaleLinear } from 'd3-scale';
import * as shape from 'd3-shape';

import {
  Coordinates,
  CurveShape,
  CustomPanGestureState,
  PanGestureState,
} from '@app/components/LineChart/types';
import { palette } from '@app/theme';
import { FORMAT_CURRENCY_REGEX, PAN_GESTURE_STATE } from './constants';

export const getDomain = (domain: number[]): number[] => [
  Math.min(...domain),
  Math.max(...domain),
];

export const lineScaleX = (
  data: unknown[],
  width: number,
  xKey: string
): ScaleTime<number, number, never> => {
  const xDomain = data.map((dataItem) => dataItem[xKey]);
  const domain = getDomain(xDomain);

  return scaleTime().domain(domain).range([0, width]);
};

export const lineScaleY = (
  data: unknown[],
  height: number,
  padding: number,
  yKey: string
): ScaleLinear<number, number, never> => {
  const yDomain = data.map((dataItem) => dataItem[yKey]);
  const domain = getDomain(yDomain);

  return scaleLinear()
    .domain(domain)
    .range([height - padding - 5, padding]);
};

export const getCurveShape = (
  curveShape: CurveShape
): CurveFactory | CurveFactoryLineOnly => {
  switch (curveShape) {
    case 'monotone':
      return curveMonotoneX;
    default:
      return curveLinear;
  }
};

export const lineD = (
  data: any[],
  xKey: string,
  yKey: string,
  scaleX: ScaleTime<number, number, never>,
  scaleY: ScaleLinear<number, number, never>,
  curveShape: CurveShape
): string =>
  shape
    .line()
    .x((point) => scaleX(point[xKey]))
    .y((point) => scaleY(point[yKey]))
    .curve(getCurveShape(curveShape))(data) as string;

export const getGradientColor = (gradient: string): string =>
  gradient || palette.primary;

export const getLastPointCoordinates = (
  x: any,
  y: any,
  scaleX: ScaleTime<number, number, never>,
  scaleY: ScaleLinear<number, number, never>
): Coordinates => {
  const xCoordinate = scaleX(x);
  const yCoordinate = scaleY(y);
  return { x: xCoordinate, y: yCoordinate };
};

export const handlePanGestureHandlerStateChange = (
  state: PanGestureState,
  currentX: number,
  maxWidth: number
): CustomPanGestureState => {
  const xValue = currentX <= maxWidth ? currentX : maxWidth;
  if (state === PAN_GESTURE_STATE.BEGAN || state === PAN_GESTURE_STATE.ACTIVE) {
    return { opacity: 1, xValue };
  }
  return { opacity: 0, xValue };
};

export const tooltipDefaultTitleFormat = (title: number): string =>
  `$${title.toFixed(2).replace(FORMAT_CURRENCY_REGEX, ',')}`;

export const tooltipDefaultDescriptionFormat = (description: Date): string =>
  description.toLocaleString();
