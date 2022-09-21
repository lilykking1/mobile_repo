import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '../types';

const FTX: FC<IconProps> = ({ tint, width = 32, height = 32 }) => {
  const color1 = tint || '#5FCADE';
  const color2 = tint || '#02A6C2';
  const color3 = tint || '#ABEBF4';

  return (
    <Svg width={width} height={height} viewBox="0 0 32 28" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.54 10.32H8.84v7.36h16.7v-7.36zm-18.17 0H0v7.36h7.37v-7.36z"
        fill={color1}
      />
      <Path d="M8.84 0h23.09v7.37H8.84z" fill={color2} />
      <Path d="M8.84 20.63h7.37V28H8.84z" fill={color3} />
    </Svg>
  );
};

export default FTX;
