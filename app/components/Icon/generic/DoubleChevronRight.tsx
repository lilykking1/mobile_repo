import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const DoubleChevronRight: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 17 12">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.494 11.619l5-5a.875.875 0 000-1.238l-5-5A.875.875 0 10.256 1.62L4.638 6 .256 10.381a.875.875 0 101.238 1.238zm10 0l5-5a.875.875 0 000-1.238l-5-5a.875.875 0 10-1.238 1.238L14.638 6l-4.382 4.381a.875.875 0 101.238 1.238z"
      fill={tint as string}
    />
  </Svg>
);

export default DoubleChevronRight;
