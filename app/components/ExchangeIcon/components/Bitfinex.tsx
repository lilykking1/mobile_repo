import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '../types';

const Bitfinex: FC<IconProps> = ({ tint, width = 32, height = 32 }) => {
  const color1 = tint || '#97C554';
  const color2 = tint || '#709B30';

  return (
    <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
      <Path
        d="M1.06 24.07c1.3 1.37 8.38 7.92 19.51.32 8.05-6.27 7.85-19.86 7.08-23.97-.27.6-9.61 21.07-26.59 23.65zM27.65.42c-.1-.04-10.46-1.45-20.7 5.14C.6 9.66-.24 15.65.06 19.66 14.93 17.97 27.3.88 27.65.41z"
        fill={color1}
      />
      <Path
        d="M27.65.42c-.1-.04-10.46-1.45-20.7 5.14C.6 9.66-.24 15.65.06 19.66 14.93 17.97 27.3.88 27.65.41z"
        fill={color2}
      />
    </Svg>
  );
};

export default Bitfinex;
