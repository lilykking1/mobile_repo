import React, { FC } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const LineGraph: FC<IconProps> = ({
  width = 22,
  height = 19,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 22 19" fill="none">
    <Path
      d="M19 10V18"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M13.6992 12.7V18"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M3 15V18"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M8.2998 11.6001V18.0001"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Circle
      cx="13.6994"
      cy="7.8"
      r="1.8"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Circle
      cx="19.0998"
      cy="3.3"
      r="1.8"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Circle
      cx="2.89961"
      cy="8.6999"
      r="1.8"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Circle
      cx="8.3"
      cy="4.1999"
      r="1.8"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M17.7996 4.3999L15.0996 6.6999"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M12.2998 6.8001L9.7998 5.1001"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M4.2998 7.60005L6.9998 5.30005"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default LineGraph;
