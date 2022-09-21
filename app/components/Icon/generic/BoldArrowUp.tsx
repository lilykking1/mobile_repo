import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const BoldArrowUp: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.royalBlue[900],
}) => (
  <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
    <Path
      d="M5.34.34a.94.94 0 0 1 1.32 0l5 5a.94.94 0 0 1-1.32 1.32l-3.4-3.4V11a.94.94 0 1 1-1.88 0V3.26l-3.4 3.4A.94.94 0 1 1 .34 5.34l5-5Z"
      fill={tint}
    />
  </Svg>
);

export default BoldArrowUp;
