import React, { FC, useCallback } from 'react';
import { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import { map } from 'lodash';

import { GradientStop } from '@app/components/Chart/types';

interface GradientStopsProps {
  gradientStops?: GradientStop[];
  width: number;
  height: number;
  d: string;
}

const GradientStops: FC<GradientStopsProps> = ({
  gradientStops,
  width,
  height,
  d,
}) => {
  const mapper = useCallback(
    ({ stopOpacity, offset, stopColor }: GradientStop) => (
      <Stop
        key={`${stopOpacity}-${offset}-${stopColor}`}
        stopOpacity={stopOpacity}
        offset={offset}
        stopColor={stopColor}
      />
    ),
    []
  );

  return (
    <>
      <Defs>
        <LinearGradient id="line-gradient" gradientTransform="rotate(90)">
          {map(gradientStops, mapper)}
        </LinearGradient>
      </Defs>
      <Path
        d={`${d}L ${width} ${height} L 0 ${height}`}
        fill="url(#line-gradient)"
      />
    </>
  );
};

export default GradientStops;
