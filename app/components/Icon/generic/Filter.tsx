import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Filter: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
    <Path
      d="M2.3753 4.30024C2.13809 4.11047 2 3.82316 2 3.51938V2.5C2 2.22386 2.22386 2 2.5 2H15.5C15.7761 2 16 2.22386 16 2.5V3.51938C16 3.82316 15.8619 4.11047 15.6247 4.30024L11 8L10.5386 16.305C10.5196 16.6464 10.1712 16.8685 9.85369 16.7415L8.27386 16.1095C8.10489 16.042 7.98599 15.8879 7.96342 15.7073L7 8L2.3753 4.30024Z"
      fill={tint}
    />
  </Svg>
);

export default Filter;
