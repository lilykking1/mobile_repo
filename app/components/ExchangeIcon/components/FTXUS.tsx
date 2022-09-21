import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '../types';

const FTXUS: FC<IconProps> = ({ tint, width = 32, height = 32 }) => {
  const color1 = tint || '#C71437';
  const color2 = tint || '#00B3C8';
  const color3 = tint || '#009BB5';
  const color4 = tint || '#91D1DD';

  return (
    <Svg width={width} height={height} viewBox="0 0 32 28" fill="none">
      <Path fill={color1} d="M0 10.32h7.37v7.37H0z" />
      <Path fill={color2} d="M8.84 10.32h16.7v7.37H8.84z" />
      <Path fill={color3} d="M8.84 0h23.09v7.37H8.84z" />
      <Path fill={color4} d="M8.84 20.63h7.37V28H8.84z" />
    </Svg>
  );
};

export default FTXUS;
