import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '@app/components/Icon/types';
import { palette } from '@app/theme';

const Link: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.grey[600],
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 18">
    <Path
      d="M9 9.5l8-8v6.222V1.5h-6.222"
      stroke={tint.toString()}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.333 1.5H2.778C1.8 1.5 1 2.3 1 3.278v12.444c0 .978.8 1.778 1.778 1.778h12.444c.978 0 1.778-.8 1.778-1.778v-3.555"
      stroke={tint.toString()}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Link;
