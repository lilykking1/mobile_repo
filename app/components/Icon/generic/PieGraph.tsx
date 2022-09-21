import React, { FC } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const PieGraph: FC<IconProps> = ({
  width = 20,
  height = 20,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    <Path
      d="M10.0002 1V9.8L3.7002 16.4"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Circle
      cx="10"
      cy="10"
      r="9"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default PieGraph;
