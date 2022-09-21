import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Loading: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 52 52" fill="none">
    <Path
      d="M26,52a2,2,0,0,1,0-4A22,22,0,1,0,4,26a2,2,0,0,1-4,0A26,26,0,1,1,26,52Z"
      fill={tint}
    />
  </Svg>
);

export default Loading;
