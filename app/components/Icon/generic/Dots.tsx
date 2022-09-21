import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '@app/components/Icon/types';
import { palette } from '@app/theme';

const Dots: FC<IconProps> = ({
  width = 20,
  height = 4,
  tint = palette.royalBlue[900],
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 4" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 4a2 2 0 110-4 2 2 0 010 4zm-8 0a2 2 0 110-4 2 2 0 010 4zM0 2a2 2 0 104 0 2 2 0 00-4 0z"
      fill={tint}
    />
  </Svg>
);

export default Dots;
