import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Copy: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 1.25C6.0335 1.25 5.25 2.0335 5.25 3V4.25H3C2.0335 4.25 1.25 5.0335 1.25 6V15C1.25 15.9665 2.0335 16.75 3 16.75H12C12.9665 16.75 13.75 15.9665 13.75 15V12.75H15C15.9665 12.75 16.75 11.9665 16.75 11V3C16.75 2.0335 15.9665 1.25 15 1.25H7ZM13.75 11.25H15C15.1381 11.25 15.25 11.1381 15.25 11V3C15.25 2.86193 15.1381 2.75 15 2.75H7C6.86193 2.75 6.75 2.86193 6.75 3V4.25H12C12.9665 4.25 13.75 5.0335 13.75 6V11.25ZM2.75 6C2.75 5.86193 2.86193 5.75 3 5.75H12C12.1381 5.75 12.25 5.86193 12.25 6V15C12.25 15.1381 12.1381 15.25 12 15.25H3C2.86193 15.25 2.75 15.1381 2.75 15V6Z"
      fill={tint}
    />
  </Svg>
);

export default Copy;
