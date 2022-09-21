import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const EyeClosed: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
    <Path
      d="M9,14.8c-0.4,0-0.8-0.3-0.8-0.8v-3c-0.6,0-1.2-0.2-1.8-0.3l-1.3,2.2c-0.2,0.4-0.7,0.5-1,0.3 c-0.4-0.2-0.5-0.7-0.3-1l1.2-2C4.4,9.9,3.8,9.5,3.2,9L3.1,8.9L2,10c-0.3,0.3-0.8,0.3-1.1,0S0.7,9.3,1,9l1-1L1.6,7.6 C1.3,7.4,1.2,6.9,1.5,6.6c0.3-0.3,0.7-0.4,1.1-0.1l1.6,1.4c2.8,2.3,6.8,2.3,9.6,0l1.7-1.4c0.3-0.3,0.8-0.2,1.1,0.1 c0.3,0.3,0.2,0.8-0.1,1.1L16,8l1,1c0.3,0.3,0.3,0.8,0,1.1s-0.8,0.3-1.1,0l-1.1-1.1L14.8,9c-0.5,0.4-0.9,0.7-1.4,1l1.3,2.2 c0.2,0.4,0.1,0.8-0.3,1c-0.4,0.2-0.8,0.1-1-0.3L12,10.6c-0.7,0.3-1.5,0.4-2.2,0.5v3C9.8,14.4,9.4,14.8,9,14.8z"
      fill={tint}
    />
  </Svg>
);

export default EyeClosed;
