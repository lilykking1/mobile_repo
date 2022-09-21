import React, { FC } from 'react';
import Svg, { Path, Defs, G } from 'react-native-svg';
import { IconProps } from '@app/components/Icon/types';

const ThreeLineSlider: FC<IconProps> = ({
  width = 95,
  height = 60,
  tint = '#403E9F',
}) => (
  <Svg width={width} height={height} fill="none">
    <G filter="url(#a)">
      <Path
        d="M20 30c0-8.837 7.163-16 16-16h23c8.837 0 16 7.163 16 16s-7.163 16-16 16H36c-8.837 0-16-7.163-16-16Z"
        fill="#fff"
      />
    </G>
    <Path fill={tint} d="M46.5 24h2v12h-2zM52.5 24h2v12h-2zM40.5 24h2v12h-2z" />
    <Defs />
  </Svg>
);

export default ThreeLineSlider;
