import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Attention: FC<IconProps> = ({
  width = 24,
  height = 24,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 13.2004V9.40039"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M12 16.2004C11.9 16.2004 11.8 16.3004 11.8 16.4004C11.8 16.5004 11.9 16.6004 12 16.6004C12.1 16.6004 12.2 16.5004 12.2 16.4004C12.2 16.3004 12.1 16.2004 12 16.2004"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.0005 4.2L21.7005 17.6C22.6005 19.2 21.5005 21.1 19.7005 21.1H4.40055C2.60055 21.1 1.50055 19.2 2.40055 17.6L10.1005 4.2C10.9005 2.6 13.1005 2.6 14.0005 4.2Z"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default Attention;
