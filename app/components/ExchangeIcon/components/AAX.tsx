import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '../types';

const AAX: FC<IconProps> = ({ tint, width = 32, height = 32 }) => {
  const color1 = tint || '#222222';
  const color2 = tint || '#007DFF';

  return (
    <Svg width={width} height={height} viewBox="0 0 41 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.11 0h2.68v11.53H9.74V2.4l-7.18 9.13H0L9.11 0zM38.7 11.53L29.71 0h2.31L41 11.53h-2.3zM23.2 0h2.68v11.53h-2.05V2.4l-7.17 9.13h-2.57L23.2 0z"
        fill={color1}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.03 11.53L41 0h-2.3l-8.98 11.53h2.31z"
        fill={color2}
      />
    </Svg>
  );
};

export default AAX;
