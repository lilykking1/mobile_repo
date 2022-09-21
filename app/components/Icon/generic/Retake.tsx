import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Retake: FC<IconProps> = ({
  width = 24,
  height = 24,
  tint = palette.grey[600],
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.92 1.22a.75.75 0 011.06 0l2 2a.75.75 0 010 1.06l-2 2a.75.75 0 11-1.06-1.06l1.47-1.47-1.47-1.47a.75.75 0 010-1.06zM11.78 17.22a.75.75 0 010 1.06l-1.47 1.47 1.47 1.47a.75.75 0 11-1.06 1.06l-2-2a.75.75 0 010-1.06l2-2a.75.75 0 011.06 0z"
      fill={tint}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.02 5.62a.75.75 0 011.06 0 8.685 8.685 0 012.52 6.13c0 4.815-3.936 8.75-8.75 8.75-.871 0-1.633-.11-2.482-.322a.75.75 0 01.364-1.455c.75.188 1.389.277 2.118.277 3.986 0 7.25-3.264 7.25-7.25a7.185 7.185 0 00-2.08-5.07.75.75 0 010-1.06zM11.75 4.5c-3.986 0-7.25 3.264-7.25 7.25 0 1.995.816 3.806 2.08 5.07a.75.75 0 11-1.06 1.06A8.685 8.685 0 013 11.75C3 6.936 6.936 3 11.75 3c.871 0 1.633.11 2.482.322a.75.75 0 01-.364 1.456A8.332 8.332 0 0011.75 4.5z"
      fill={tint}
    />
  </Svg>
);

export default Retake;
