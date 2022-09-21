import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Actions: FC<IconProps> = ({
  width = 24,
  height = 24,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 4" fill="none">
    <Path
      d="M18 4C16.8954 4 16 3.10457 16 2C16 0.89543 16.8954 -1.35705e-07 18 -8.74228e-08C19.1046 -3.91405e-08 20 0.895431 20 2C20 3.10457 19.1046 4 18 4ZM10 4C8.89543 4 8 3.10457 8 2C8 0.89543 8.89543 -4.85396e-07 10 -4.37114e-07C11.1046 -3.88832e-07 12 0.895431 12 2C12 3.10457 11.1046 4 10 4ZM-8.74228e-08 2C-1.35705e-07 3.10457 0.895431 4 2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 -7.38523e-07 2 -7.86805e-07C0.895432 -8.35087e-07 -3.91406e-08 0.89543 -8.74228e-08 2Z"
      fill={tint}
    />
  </Svg>
);

export default Actions;
