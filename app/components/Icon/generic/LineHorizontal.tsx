import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const LineHorizontal: FC<IconProps> = ({
  width = 12,
  height = 18,
  tint = palette.white,
}) => (
  <Svg fill="none" width={width} height={height} viewBox="0 0 12 2">
    <Path d="M1 1h12" stroke={tint} strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

export default LineHorizontal;
