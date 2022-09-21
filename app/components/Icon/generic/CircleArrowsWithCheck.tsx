import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const CircleArrowsWithCheck: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.primary,
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 22" fill="none">
    <Path
      d="m12.2 8.9-3.9 3.9L6 10.4M10.1 4.5 11.6 3l-1.5-1.5M7.9 17.5 6.4 19l1.5 1.5"
      stroke={tint}
      strokeWidth={1.5}
    />
    <Path
      d="M14.7 5.4C16.1 6.8 17 8.8 17 11c0 4.4-3.6 8-8 8-.8 0-1.5-.1-2.3-.3M3.2 16.6A7.94 7.94 0 0 1 .9 11c0-4.4 3.6-8 8-8 .8 0 1.5.1 2.3.3"
      stroke={tint}
      strokeWidth={1.5}
    />
  </Svg>
);

export default CircleArrowsWithCheck;
