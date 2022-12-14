import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Calendar: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 0C4.77614 0 5 0.223858 5 0.5V2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5V0.5C4 0.223858 4.22386 0 4.5 0ZM13.5 0C13.7761 0 14 0.223858 14 0.5V2.5C14 2.77614 13.7761 3 13.5 3C13.2239 3 13 2.77614 13 2.5V0.5C13 0.223858 13.2239 0 13.5 0ZM1 4C1 2.89543 1.89543 2 3 2V3C3 3.55228 3.44772 4 4 4H5C5.55228 4 6 3.55228 6 3V2H12V3C12 3.55228 12.4477 4 13 4H14C14.5523 4 15 3.55228 15 3V2C16.1046 2 17 2.89543 17 4V15C17 16.1046 16.1046 17 15 17H3C1.89543 17 1 16.1046 1 15V4ZM2 9C2 8.44772 2.44772 8 3 8H15C15.5523 8 16 8.44772 16 9V15C16 15.5523 15.5523 16 15 16H3C2.44772 16 2 15.5523 2 15V9Z"
      fill={tint}
    />
  </Svg>
);

export default Calendar;
