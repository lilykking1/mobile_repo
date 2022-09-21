import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '../types';

const Phemex: FC<IconProps> = ({ tint, width = 32, height = 32 }) => {
  const color1 = tint || '#13DAFD';
  const color2 = tint || '#003398';

  return (
    <Svg width={width} height={height} viewBox="0 0 19.8 32" fill="none">
      <Path
        d="M7.53 32A7.53 7.53 0 010 24.47V12.24a7.53 7.53 0 017.53 7.52V32z"
        fill={color1}
      />
      <Path
        d="M19.77 19.77a7.53 7.53 0 01-7.53-7.53V0a7.53 7.53 0 017.52 7.53v12.23z"
        fill={color2}
      />
    </Svg>
  );
};

export default Phemex;
