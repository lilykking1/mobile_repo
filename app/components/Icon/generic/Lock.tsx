import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Lock: FC<IconProps> = ({
  width = 16,
  height = 20,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 16 20" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 19H3C1.9 19 1 18.1 1 17L1 10C1 8.9 1.9 8 3 8H13C14.1 8 15 8.9 15 10V17C15 18.1 14.1 19 13 19Z"
      stroke={tint}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 8V5V5C4 2.8 5.8 1 8 1V1C10.2 1 12 2.8 12 5V5V8"
      stroke={tint}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Lock;
