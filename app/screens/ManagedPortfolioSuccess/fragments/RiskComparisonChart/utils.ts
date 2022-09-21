import { scaleLinear } from 'd3-scale';
import { curveBasis, line } from 'd3-shape';
import { CHART_HORIZONTAL_MARGIN, CHART_RANGE } from './constants';
import { DataPoint } from './types';

export const getDomain = (domain: number[]): number[] => [
  Math.min(...domain),
  Math.max(...domain),
];

export const makeGraph = (data: DataPoint[], width: number) => {
  const max = Math.max(...data.map((val) => val.value));
  const min = Math.min(...data.map((val) => val.value));
  const y = scaleLinear()
    .domain([0, max + CHART_HORIZONTAL_MARGIN])
    .range([200, 0]);
  const x = scaleLinear()
    .domain(CHART_RANGE)
    .range([CHART_HORIZONTAL_MARGIN, width - CHART_HORIZONTAL_MARGIN]);

  const curvedLine = line<DataPoint>()
    .x((d) => x(d.risk))
    .y((d) => y(d.value))
    .curve(curveBasis)(data);

  return {
    max,
    min,
    curve: curvedLine!,
  };
};

export const getCoordinateFromPoint = (
  point: number,
  width: number
): number => {
  const x = scaleLinear()
    .domain(CHART_RANGE)
    .range([CHART_HORIZONTAL_MARGIN, width - CHART_HORIZONTAL_MARGIN]);
  return x(point);
};

export const lineScaleY = (
  data: any[],
  height: number,
  padding: number,
  yKey: string
) =>
  scaleLinear()
    .domain(getDomain(data.map((d) => d[yKey])))
    .range([height - padding - 5, padding]);
