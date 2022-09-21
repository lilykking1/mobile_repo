import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const EyeOpen: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
    <Path
      d="M16.4,7.4L14.7,6C11.5,3.5,7,3.4,3.7,5.9L1.7,7.4c-1.1,0.8-1.1,2.4-0.1,3.3L3.2,12c3.3,2.8,8.2,2.8,11.5,0 l1.7-1.4C17.5,9.8,17.5,8.2,16.4,7.4z M15.5,9.5l-1.7,1.4c-2.8,2.3-6.8,2.3-9.6,0L2.6,9.5c-0.3-0.2-0.3-0.7,0-0.9l2.1-1.5 c2.7-2,6.5-2,9.1,0.1l1.7,1.4C15.8,8.8,15.8,9.2,15.5,9.5z"
      fill={tint}
    />
    <Path
      d="M9,6C7.3,6,6,7.3,6,9c0,1.7,1.3,3,3,3c1.7,0,3-1.3,3-3C12,7.3,10.7,6,9,6z M9,11.3c-0.4,0-0.8-0.2-0.8-0.4 c0-0.2,0.3-0.4,0.8-0.4s0.8,0.2,0.8,0.4C9.8,11.1,9.4,11.3,9,11.3z M9,8.3c-0.8,0-1.5-0.3-1.5-0.8S8.2,6.8,9,6.8 c0.8,0,1.5,0.3,1.5,0.8S9.8,8.3,9,8.3z"
      fill={tint}
    />
  </Svg>
);

export default EyeOpen;
