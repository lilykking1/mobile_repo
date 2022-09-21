import React, { FC } from 'react';
import Svg, { Rect } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Wallet: FC<IconProps> = ({
  width = 24,
  height = 24,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Rect
      x="2"
      y="4.5"
      width="20"
      height="15"
      rx="3.5"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <Rect x="16.5" y="10.5" width="3" height="3" rx="1.5" fill={tint} />
  </Svg>
);

export default Wallet;
