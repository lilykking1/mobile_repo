import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const CaretUp: FC<IconProps> = ({
  width = 10,
  height = 6,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 10 6" fill="none">
    <Path d="M4.8 0L8.95692 6H0.643078L4.8 0Z" fill={tint} />
  </Svg>
);

export default CaretUp;
