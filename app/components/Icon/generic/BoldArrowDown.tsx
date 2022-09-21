import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const BoldArrowDown: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.royalBlue[900],
}) => (
  <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
    <Path
      d="M5.34 11.66c.36.37.96.37 1.32 0l5-5a.94.94 0 0 0-1.32-1.32l-3.4 3.4V1a.94.94 0 1 0-1.88 0v7.74l-3.4-3.4A.94.94 0 1 0 .34 6.66l5 5Z"
      fill={tint}
    />
  </Svg>
);

export default BoldArrowDown;
