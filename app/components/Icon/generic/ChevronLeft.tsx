import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const ChevronLeft: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
    <Path
      d="M11.2,15c-0.2,0-0.4-0.1-0.5-0.2L5.5,9.5c-0.3-0.3-0.3-0.8,0-1.1l5.2-5.2c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1 L7.1,9l4.7,4.7c0.3,0.3,0.3,0.8,0,1.1C11.6,14.9,11.4,15,11.2,15z"
      fill={tint}
    />
  </Svg>
);

export default ChevronLeft;
