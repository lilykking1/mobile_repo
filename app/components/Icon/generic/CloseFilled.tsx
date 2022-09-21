import React, { FC } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const CloseFilled: FC<IconProps> = ({
  width = 24,
  height = 24,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Rect x="1" y="1" width="22" height="22" rx="6" fill={tint} />
    <Path
      d="M7.00003 7.00069L16.9993 17M7 17L16.9986 7"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </Svg>
);

export default CloseFilled;
