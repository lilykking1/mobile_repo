import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const ArrowDown: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.primary,
}) => (
  <Svg width={width} height={height} viewBox="0 0 19 18" fill="none">
    <Path
      d="M8.97 17.53c.3.3.77.3 1.06 0l8-8a.75.75 0 0 0-1.06-1.06l-6.72 6.72V1a.75.75 0 0 0-1.5 0v14.19L2.03 8.47A.75.75 0 0 0 .97 9.53l8 8Z"
      fill={tint}
    />
  </Svg>
);

export default ArrowDown;
