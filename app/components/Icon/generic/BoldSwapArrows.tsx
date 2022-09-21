import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const BoldSwapArrows: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.royalBlue[900],
}) => (
  <Svg width={width} height={height} viewBox="0 0 12 16" fill="none">
    <Path
      d="M4.59.41c.32.33.32.85 0 1.18L3 3.17H9A2.83 2.83 0 0 1 11.83 6v.67a.83.83 0 0 1-1.66 0V6c0-.64-.53-1.17-1.17-1.17H3.01L4.6 6.41A.83.83 0 1 1 3.4 7.6l-3-3a.83.83 0 0 1 0-1.18l3-3a.83.83 0 0 1 1.18 0ZM7.41 15.59a.83.83 0 0 1 0-1.18L9 12.83H3A2.83 2.83 0 0 1 .17 10v-.67a.83.83 0 1 1 1.66 0V10c0 .64.53 1.17 1.17 1.17h5.99L7.4 9.59A.83.83 0 1 1 8.6 8.4l3 3c.32.33.32.85 0 1.18l-3 3a.83.83 0 0 1-1.18 0Z"
      fill={tint}
    />
  </Svg>
);

export default BoldSwapArrows;
