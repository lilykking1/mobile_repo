import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Check: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
    <Path
      d="M13.5,2.4c0.3,0.2,0.4,0.7,0.2,1l-6.6,9.7l-5-4c-0.2-0.2-0.3-0.7,0-1c0.2-0.3,0.7-0.4,1-0.1l3.7,2.9l5.7-8.3 C12.7,2.2,13.2,2.1,13.5,2.4z"
      fill={tint}
    />
  </Svg>
);

export default Check;
