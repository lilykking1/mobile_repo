import {
  curveMonotoneX,
  curveLinear,
  CurveFactoryLineOnly,
  CurveFactory,
} from 'd3-shape';
import { scaleTime, scaleLinear } from 'd3-scale';
import * as shape from 'd3-shape';

import { CurveShape } from '@app/components/Chart/types';
import { palette } from '@app/theme';

export const getDomain = (domain: number[]) => [
  Math.min(...domain),
  Math.max(...domain),
];

// TODO: define time scale or linear
export const lineScaleX = (data: any[], width: number, xKey: string) =>
  scaleTime()
    .domain(getDomain(data.map((d) => d[xKey])))
    .range([0, width]);

// TODO: define time scale or linear
export const lineScaleY = (
  data: any[],
  height: number,
  padding: number,
  yKey: string
) =>
  scaleLinear()
    .domain(getDomain(data.map((d) => d[yKey])))
    // TODO: adjust additional padding (5) by text height
    .range([height - padding - 5, padding]);

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

/**
 * to draw chart line
 * @param {any[]} data
 * @param {string} xKey
 * @param {string} yKey
 * @param {any} scaleX
 * @param {any} scaleY
 * @param {CurveShape} curveShape
 * @returns boolean
 */
export const lineD = (
  data: any[],
  xKey: string,
  yKey: string,
  scaleX: any,
  scaleY: any,
  curveShape: CurveShape
): string =>
  shape
    .line()
    .x((p) => scaleX(p[xKey]))
    .y((p) => scaleY(p[yKey]))
    .curve(getCurveShape(curveShape))(data) as string;

export const getGradientColor = (gradient) => gradient || palette.purplePersian;
