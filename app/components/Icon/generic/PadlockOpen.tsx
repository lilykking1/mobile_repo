import React, { FC } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const PadlockOpen: FC<IconProps> = ({
  width = 13,
  height = 19,
  tint = palette.grey[600],
}) => (
  <Svg width={width} height={height} viewBox="0 0 13 19" fill="none">
    <Path
      d="M10.5 10V5a4 4 0 00-4-4v0a4 4 0 00-4 4v2"
      stroke={tint}
      strokeWidth={2}
    />
    <Rect y={10} width={13} height={9} rx={1.5} fill={tint} />
  </Svg>
);

export default PadlockOpen;
