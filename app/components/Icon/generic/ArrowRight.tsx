import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const ArrowRight: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 23 12" fill="none">
    <Path
      d="M22.5,6.5c0.3-0.3,0.3-0.8,0-1.1l-4.8-4.8c-0.3-0.3-0.8-0.3-1.1,0c-0.3,0.3-0.3,0.8,0,1.1L20.9,6l-4.2,4.2 c-0.3,0.3-0.3,0.8,0,1.1c0.3,0.3,0.8,0.3,1.1,0L22.5,6.5z M0,6.8h22V5.3H0V6.8z"
      fill={tint}
    />
  </Svg>
);

export default ArrowRight;
