import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Question: FC<IconProps> = ({
  width = 22,
  height = 22,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
    <Path
      d="M10 19V19C5 19 1 15 1 10V10C1 5 5 1 10 1V1C15 1 19 5 19 10V10C19 15 15 19 10 19Z"
      stroke={tint as string}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M10 11.3004V11.1004C10 10.3004 10.5 9.80039 11 9.50039C11.5 9.20039 12 8.70039 12 7.90039C12 6.80039 11.1 5.90039 10 5.90039C8.9 5.90039 8 6.80039 8 7.90039"
      stroke={tint as string}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M10 13.9992C9.9 13.9992 9.8 14.0992 9.8 14.1992C9.8 14.2992 9.9 14.3992 10 14.3992C10.1 14.3992 10.2 14.2992 10.2 14.1992C10.2 14.0992 10.1 13.9992 10 13.9992"
      stroke={tint as string}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default Question;
