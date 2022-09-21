import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Paste: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
    <Path
      d="M12.8,1.9h-0.1l0,0c-0.3-1-1.3-1.8-2.4-1.8H7.7c-1.1,0-2.1,0.8-2.4,1.8l0,0H5.2c-2.1,0-3.8,1.7-3.8,3.8v8.5 c0,2.1,1.7,3.8,3.8,3.8h7.6c2.1,0,3.8-1.7,3.8-3.8V5.6C16.5,3.6,14.9,1.9,12.8,1.9z M7.7,1.6h2.6c0.6,0,1,0.4,1,1s-0.4,1-1,1H7.7 c-0.6,0-1-0.4-1-1S7.1,1.6,7.7,1.6z M15,14c0,1.2-0.9,2.3-2.1,2.3H5.3c-1.2,0-2.2-1-2.2-2.3V5.6c0-1.2,1-2.2,2.2-2.2h0.1l0,0 c0.2,1,1.2,1.7,2.3,1.7h2.6c1.1,0,2.1-0.7,2.4-1.7l0,0h0.1c1.2,0,2.2,1,2.2,2.2V14L15,14z"
      fill={tint}
    />
  </Svg>
);

export default Paste;
