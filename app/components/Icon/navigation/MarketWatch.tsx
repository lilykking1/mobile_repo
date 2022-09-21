import React, { FC } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const MarketWatch: FC<IconProps> = ({
  width = 24,
  height = 26,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 25 24">
    <Path
      d="M17.053 13.83a6 6 0 1 0-7.39-6.498"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="square"
    />
    <Circle
      cx="8.625"
      cy="16"
      r="6"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </Svg>
);

export default MarketWatch;
