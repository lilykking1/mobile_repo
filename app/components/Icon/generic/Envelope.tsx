import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Envelope: FC<IconProps> = ({
  width = 20,
  height = 16,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 16" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 15L3 15C1.9 15 1 14.1 1 13L1 3C1 1.9 1.9 1 3 1L17 1C18.1 1 19 1.9 19 3V13C19 14.1 18.1 15 17 15Z"
      stroke={tint}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 5L10 8L5 5"
      stroke={tint}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Envelope;
