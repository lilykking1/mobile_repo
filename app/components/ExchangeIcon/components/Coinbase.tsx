import React, { FC } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

import { IconProps } from '../types';

const Coinbase: FC<IconProps> = ({ tint, width = 32, height = 32 }) => {
  const color = tint || '#1652F0';

  return (
    <Svg width={width} height={height} viewBox="0 0 48 48" fill="none">
      <Circle cx="24" cy="24" r="24" fill={color} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.34 23.6c.14-2.48 1.25-4.07 2.67-4.86 2.44-1.8 5.64-.5 7.37.72l3.02-3.04c-3.83-4.7-9.71-3.73-12.81-1.98-3.13 1.75-5 5.06-5.19 9.06v.22c.19 4 2.06 7.3 5.19 9.06 3.1 1.74 8.98 2.7 12.81-1.99l-3.02-3.04c-1.73 1.23-4.93 2.53-7.37.72-1.42-.79-2.53-2.38-2.67-4.86z"
        fill="#FFFFFF"
      />
    </Svg>
  );
};

export default Coinbase;
