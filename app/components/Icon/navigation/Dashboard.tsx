import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Dashboard: FC<IconProps> = ({
  width = 24,
  height = 24,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3.25 19.5H21.75"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <Path
      d="M22 14C22 8.75329 17.7467 4.5 12.5 4.5C7.25329 4.5 3 8.75329 3 14"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <Path
      d="M13.6601 14.9577C13.1276 15.5923 12.1814 15.6751 11.5468 15.1426C10.9122 14.6101 10.8294 13.6639 11.3619 13.0293C12.9689 11.1142 16.3061 8.69284 16.6891 9.01423C17.0721 9.33562 15.267 13.0426 13.6601 14.9577Z"
      fill={tint}
    />
  </Svg>
);

export default Dashboard;
