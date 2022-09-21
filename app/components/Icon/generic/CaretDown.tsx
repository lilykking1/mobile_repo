import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const CaretDown: FC<IconProps> = ({
  width = 10,
  height = 6,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 10 6" fill="none">
    <Path d="M5 6L9.15692 0H0.843079L5 6Z" fill={tint} />
  </Svg>
);

export default CaretDown;
