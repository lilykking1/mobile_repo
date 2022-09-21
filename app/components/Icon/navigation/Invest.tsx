import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Stack: FC<IconProps> = ({
  width = 24,
  height = 24,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M2,17.1c0-0.5,0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8v1.6c0,0.5-0.4,0.8-0.8,0.8S2,19.3,2,18.8V17.1z"
      fill={tint}
    />
    <Path
      d="M7.4,13c0-0.5,0.4-0.8,0.8-0.8C8.7,12.2,9,12.6,9,13v5.7c0,0.5-0.4,0.8-0.8,0.8c-0.5,0-0.8-0.4-0.8-0.8V13z"
      fill={tint}
    />
    <Path
      d="M13.6,9.6c-0.5,0-0.8,0.4-0.8,0.8v8.4c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8v-8.4 C14.4,9.9,14.1,9.6,13.6,9.6z"
      fill={tint}
    />
    <Path
      d="M21.5,6.2l-1.9-1.9c-0.3-0.3-0.8-0.3-1.2,0l-1.9,1.9c-0.3,0.3-0.3,0.8,0,1.2c0.3,0.3,0.8,0.3,1.2,0l0.5-0.5v12 c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8v-12l0.5,0.5c0.3,0.3,0.8,0.3,1.2,0C21.9,7,21.9,6.5,21.5,6.2z"
      fill={tint}
    />
  </Svg>
);

export default Stack;
