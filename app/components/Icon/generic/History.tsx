import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const History: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
    <Path
      d="M14 1.5C14 1.22386 14.2239 1 14.5 1H15.5H16.5C16.7761 1 17 1.22386 17 1.5V8.5C17 8.77614 16.7761 9 16.5 9H16V16.5C16 16.7761 15.7761 17 15.5 17C15.2239 17 15 16.7761 15 16.5V9H14.5C14.2239 9 14 8.77614 14 8.5V1.5ZM0.5 4C0.223858 4 0 4.22386 0 4.5V11.5C0 11.7761 0.223858 12 0.5 12H1V16.5C1 16.7761 1.22386 17 1.5 17C1.77614 17 2 16.7761 2 16.5V12H2.5C2.77614 12 3 11.7761 3 11.5V4.5C3 4.22386 2.77614 4 2.5 4H2V1.5C2 1.22386 1.77614 1 1.5 1C1.22386 1 1 1.22386 1 1.5V4H0.5ZM7.5 8C7.22386 8 7 8.22386 7 8.5V16.5C7 16.7761 7.22386 17 7.5 17H8.5H9.5C9.77614 17 10 16.7761 10 16.5V8.5C10 8.22386 9.77614 8 9.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1C8.22386 1 8 1.22386 8 1.5V8H7.5Z"
      fill={tint}
    />
  </Svg>
);

export default History;
