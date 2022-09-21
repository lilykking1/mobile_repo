import React, { FC } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

import { IconProps } from '@app/components/Icon/types';

const EmptyCoin1: FC<IconProps> = ({ width = 32, height = 32 }) => (
  <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
    <Circle cx="16" cy="16" r="15.5" fill="#F5F6FA" stroke="#CED2E5" />
    <Path
      d="M11.8325 14.6459L16 11.618L20.1675 14.6459L18.5757 19.5451H13.4243L11.8325 14.6459Z"
      stroke="#878EB0"
    />
  </Svg>
);

export default EmptyCoin1;
