import React, { FC, useMemo } from 'react';
import { Path } from 'react-native-svg';

import { CurveShape } from '../../types';

import GradientStops from '../GradientStops';
import XGrid from '../XGrid';
import XLabels from '../XLabels';
import { lineScaleX, lineScaleY, lineD, getGradientColor } from './utils';

interface PropsProps {
  curveShape?: CurveShape;
  data: any[];
  gradient?: string;
  height: number;
  stroke: string;
  strokeWidth?: number;
  padding?: number;
  width: number;
  xGrid?: boolean;
  xGridInterval?: number;
  firstLabel?: string;
  lastLabel?: string;
  noMiddleLabels?: boolean;
  xKey: string;
  xLabels?: boolean;
  labelSpacing?: number;
  xLabelTransform?: (label: any) => string;
  yKey: string;
}

const Line: FC<PropsProps> = ({
  curveShape = 'monotone',
  data,
  gradient,
  height,
  stroke,
  strokeWidth = 1,
  padding = 30,
  width,
  xGrid = true,
  xGridInterval,
  firstLabel,
  lastLabel,
  noMiddleLabels,
  xKey,
  xLabels = true,
  labelSpacing,
  xLabelTransform,
  yKey,
}) => {
  const scaleX = useMemo(() => lineScaleX(data, width, xKey), [
    data,
    width,
    xKey,
  ]);
  const scaleY = useMemo(() => lineScaleY(data, height, padding, yKey), [
    data,
    height,
    padding,
    yKey,
  ]);
  const d = useMemo(() => lineD(data, xKey, yKey, scaleX, scaleY, curveShape), [
    data,
    xKey,
    yKey,
    scaleX,
    scaleY,
    curveShape,
  ]);

  const gradientStops = useMemo(
    () => [
      {
        stopColor: getGradientColor(gradient),
        stopOpacity: 0.1,
        offset: '0%',
      },
      {
        stopColor: getGradientColor(gradient),
        stopOpacity: 0.1,
        offset: '60%',
      },
      {
        stopColor: getGradientColor(gradient),
        stopOpacity: 0.0,
        offset: '90%',
      },
    ],
    [gradient]
  );

  return (
    <>
      {gradient && (
        <GradientStops
          d={d}
          height={height}
          width={width}
          gradientStops={gradientStops}
        />
      )}
      <Path fill="transparent" stroke={stroke} {...{ d, strokeWidth }} />
      {xLabels && (
        <XLabels
          width={width}
          scaleY={scaleY}
          scaleX={scaleX}
          firstLabel={firstLabel}
          lastLabel={lastLabel}
          noMiddleLabels={noMiddleLabels}
          data={data}
          valueKey={xKey}
          padding={padding}
          labelSpacing={labelSpacing}
          xLabelTransform={xLabelTransform}
        />
      )}
      {xGrid && (
        <XGrid
          scaleY={scaleY}
          scaleX={scaleX}
          xGridInterval={xGridInterval}
          data={data}
          valueKey={xKey}
          padding={padding}
        />
      )}
    </>
  );
};

export default Line;
