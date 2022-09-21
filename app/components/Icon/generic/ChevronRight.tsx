import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const ChevronRight: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.black,
  customStyle,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    style={customStyle}
  >
    <Path
      d="M6.8,15c-0.2,0-0.4-0.1-0.5-0.2c-0.3-0.3-0.3-0.8,0-1.1L10.9,9L6.2,4.3C5.9,4,5.9,3.5,6.2,3.2s0.8-0.3,1.1,0 l5.2,5.2c0.3,0.3,0.3,0.8,0,1.1l-5.2,5.2C7.1,14.9,6.9,15,6.8,15z"
      fill={tint}
    />
  </Svg>
);

export default ChevronRight;
