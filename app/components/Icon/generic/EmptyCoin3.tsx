import React, { FC } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

import { IconProps } from '@app/components/Icon/types';

const EmptyCoin3: FC<IconProps> = ({ width = 32, height = 32 }) => (
  <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
    <Circle cx="16" cy="16" r="15.5" fill="#F5F6FA" stroke="#CED2E5" />
    <Path
      d="M12.1699 13.7887L16 11.5774L19.8301 13.7887V18.2113L16 20.4226L12.1699 18.2113V13.7887Z"
      stroke="#878EB0"
    />
  </Svg>
);

export default EmptyCoin3;
