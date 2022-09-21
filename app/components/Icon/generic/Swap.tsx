import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Swap: FC<IconProps> = ({
  width = 24,
  height = 24,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12.5,13.5l2.8,2.7H5.8c-1.2,0-2.2-1-2.2-2.2v-2H2v2c0,2.1,1.7,3.8,3.8,3.8h9.5l-2.8,2.7l1,1.1l4.7-4.5 l-4.7-4.5L12.5,13.5z"
      fill={tint}
    />
    <Path
      d="M18.2,6.2H8.7l2.8-2.7l-1-1.1L5.8,7l4.7,4.5l1-1.1L8.7,7.7h9.5c1.2,0,2.2,1,2.2,2.2v2H22v-2 C22,7.9,20.3,6.2,18.2,6.2z"
      fill={tint}
    />
  </Svg>
);

export default Swap;
