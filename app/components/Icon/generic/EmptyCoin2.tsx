import React, { FC } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

import { IconProps } from '@app/components/Icon/types';

const EmptyCoin2: FC<IconProps> = ({ width = 32, height = 32 }) => (
  <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
    <Circle cx="16" cy="16" r="15.5" fill="#F5F6FA" stroke="#CED2E5" />
    <Path
      d="M11.7071 16L16 11.7071L20.2929 16L16 20.2929L11.7071 16Z"
      stroke="#878EB0"
    />
  </Svg>
);

export default EmptyCoin2;
