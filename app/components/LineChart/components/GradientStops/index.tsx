import React, { FC, useCallback, useMemo } from 'react';
import { Path, Defs, Stop, LinearGradient, Rect } from 'react-native-svg';
import { map } from 'lodash';
import { GradientStop } from '@app/components/LineChart/types';
import { PaletteColor } from '@app/theme';
import {
  getGradientHeight,
  getGradientRectHeight,
  getGradientRectY,
  getGradientStops,
} from './utils';
import {
  fillPathWithLinearGradient,
  gradientTransform,
  lineGradientId,
} from './constants';

interface GradientStopsProps {
  chartHeight: number;
  gradient?: PaletteColor;
  isDarkTheme?: boolean;
  isSolidBackground?: boolean;
  lastPointX: number;
  lastPointY: number;
  pathDefinition: string;
  rightPadding?: number;
  totalHeight: number;
  width: number;
}

const GradientStops: FC<GradientStopsProps> = ({
  chartHeight,
  gradient,
  isDarkTheme = false,
  lastPointX,
  lastPointY,
  pathDefinition,
  rightPadding = 16,
  totalHeight,
  width,
  isSolidBackground = false,
}) => {
  const renderGradientStops = useCallback(
    ({ stopOpacity, offset, stopColor }: GradientStop) => (
      <Stop
        key={`${stopOpacity}-${offset}-${stopColor}`}
        stopOpacity={stopOpacity}
        offset={offset}
        stopColor={stopColor as string}
      />
    ),
    []
  );

  const gradientStops = useMemo(
    () =>
      getGradientStops(
        isDarkTheme,
        chartHeight,
        totalHeight,
        gradient,
        isSolidBackground
      ),
    [isDarkTheme, chartHeight, gradient, totalHeight, isSolidBackground]
  );

  const grandientHeight = useMemo(() => getGradientHeight(chartHeight), [
    chartHeight,
  ]);

  const grandientRectHeight = useMemo(
    () => getGradientRectHeight(chartHeight, lastPointY),
    [chartHeight, lastPointY]
  );

  const grandientRectY = useMemo(() => getGradientRectY(lastPointY), [
    lastPointY,
  ]);

  return (
    <>
      <Rect
        x={lastPointX}
        y={grandientRectY}
        width={rightPadding}
        height={grandientRectHeight}
        fill={fillPathWithLinearGradient}
      />
      <Defs>
        <LinearGradient
          id={lineGradientId}
          gradientTransform={gradientTransform}
        >
          {map(gradientStops, renderGradientStops)}
        </LinearGradient>
      </Defs>
      <Path
        d={`${pathDefinition}L ${width} ${grandientHeight} L 0 ${grandientHeight}`}
        fill={fillPathWithLinearGradient}
      />
    </>
  );
};

export default GradientStops;
