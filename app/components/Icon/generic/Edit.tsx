import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '@app/components/Icon/types';
import { palette } from '@app/theme';

const Edit: FC<IconProps> = ({
  width = 24,
  height = 24,
  tint = palette.grey[600],
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.348 2.645l.857-.89a1 1 0 011.447.006l.692.732a1 1 0 01-.006 1.381l-.903.938-2.087-2.167zM11 12.604a2 2 0 01.517-1.342l7.309-8.075 2.106 2.166-7.25 7.99a2 2 0 01-1.481.657H11v-1.396z"
      fill={tint}
    />
    <Path
      d="M12 3.75a.75.75 0 000-1.5v1.5zm9.75 8.916a.75.75 0 00-1.5 0h1.5zM20 20.25H4v1.5h16v-1.5zM3.75 20V4h-1.5v16h1.5zM4 3.75h8v-1.5H4v1.5zm16.25 8.916V20h1.5v-7.334h-1.5zM4 20.25a.25.25 0 01-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75v-1.5zm16 1.5A1.75 1.75 0 0021.75 20h-1.5a.25.25 0 01-.25.25v1.5zM3.75 4A.25.25 0 014 3.75v-1.5A1.75 1.75 0 002.25 4h1.5z"
      fill={tint}
    />
  </Svg>
);

export default Edit;
