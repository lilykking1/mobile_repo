import React, { FC } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Padlock: FC<IconProps> = ({
  width = 13,
  height = 16,
  tint = palette.royalBlue[400],
}) => (
  <Svg width={width} height={height} viewBox="0 0 13 16" fill="none">
    <Path
      d="M10.5 7V5a4 4 0 00-4-4v0a4 4 0 00-4 4v2"
      stroke={tint}
      strokeWidth={2}
    />
    <Rect y={7} width={13} height={9} rx={1.5} fill={tint} />
  </Svg>
);

export default Padlock;
