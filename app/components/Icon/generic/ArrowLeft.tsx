import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const ArrowLeft: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 23 12" fill="none">
    <Path
      d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM23 5.25H1V6.75H23V5.25Z"
      fill={tint}
    />
  </Svg>
);

export default ArrowLeft;
