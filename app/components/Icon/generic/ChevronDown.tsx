import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const ChevronDown: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.grey[600],
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 6" fill="none">
    <Path d="M15 0.999999L8 8L1 1" stroke={tint} />
  </Svg>
);

export default ChevronDown;
