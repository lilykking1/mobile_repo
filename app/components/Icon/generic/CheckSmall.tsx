import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const CheckSmall: FC<IconProps> = ({
  width = 12,
  height = 9,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 12 9" fill="none">
    <Path
      d="M1 3.33333L4.88889 8L11 1"
      stroke={tint}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CheckSmall;
