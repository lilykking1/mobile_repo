import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Exclamation: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.grey[600],
}) => (
  <Svg width={width} height={height} viewBox="0 0 11 11" fill="none">
    <Path
      d="M5.15 3.62h-.1.1Zm0 2.26h.1-.1ZM9.9 5.5a4.4 4.4 0 0 1-4.4 4.4v.2a4.6 4.6 0 0 0 4.6-4.6h-.2ZM5.5 1.1a4.4 4.4 0 0 1 4.4 4.4h.2A4.6 4.6 0 0 0 5.5.9v.2ZM1.1 5.5a4.4 4.4 0 0 1 4.4-4.4V.9A4.6 4.6 0 0 0 .9 5.5h.2Zm4.4 4.4a4.4 4.4 0 0 1-4.4-4.4H.9a4.6 4.6 0 0 0 4.6 4.6v-.2Zm3.9-4.4a3.9 3.9 0 0 0-3.9-3.9v.2a3.7 3.7 0 0 1 3.7 3.7h.2ZM5.5 9.4a3.9 3.9 0 0 0 3.9-3.9h-.2a3.7 3.7 0 0 1-3.7 3.7v.2ZM1.6 5.5a3.9 3.9 0 0 0 3.9 3.9v-.2a3.7 3.7 0 0 1-3.7-3.7h-.2Zm3.9-3.9a3.9 3.9 0 0 0-3.9 3.9h.2a3.7 3.7 0 0 1 3.7-3.7v-.2Zm.25 4.28c0 .14-.11.25-.25.25v.2c.25 0 .45-.2.45-.45h-.2Zm0-2.26v2.26h.2V3.62h-.2Zm-.25-.25c.14 0 .25.1.25.25h.2c0-.25-.2-.45-.45-.45v.2Zm-.25.25c0-.14.11-.25.25-.25v-.2c-.25 0-.45.2-.45.45h.2Zm0 2.26V3.62h-.2v2.26h.2Zm.25.25a.25.25 0 0 1-.25-.25h-.2c0 .25.2.45.45.45v-.2Zm0 .62a.57.57 0 0 0-.57.58h.2c0-.21.16-.38.37-.38v-.2Zm.57.58a.57.57 0 0 0-.57-.58v.2c.2 0 .37.17.37.38h.2Zm-.57.57c.32 0 .57-.26.57-.57h-.2c0 .2-.16.37-.37.37v.2Zm-.57-.57c0 .31.25.57.57.57v-.2a.37.37 0 0 1-.37-.37h-.2Z"
      stroke={tint}
      strokeWidth={0.5}
    />
  </Svg>
);

export default Exclamation;
