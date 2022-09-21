import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Widthdraw: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 19 18" fill="none">
    <Path
      d="M8.96967 0.46967C9.26256 0.176777 9.73744 0.176777 10.0303 0.46967L18.0303 8.46967C18.3232 8.76256 18.3232 9.23744 18.0303 9.53033C17.7374 9.82322 17.2626 9.82322 16.9697 9.53033L10.25 2.81066V17C10.25 17.4142 9.91421 17.75 9.5 17.75C9.08579 17.75 8.75 17.4142 8.75 17V2.81066L2.03033 9.53033C1.73744 9.82322 1.26256 9.82322 0.96967 9.53033C0.676777 9.23744 0.676777 8.76256 0.96967 8.46967L8.96967 0.46967Z"
      fill={tint}
    />
  </Svg>
);

export default Widthdraw;
