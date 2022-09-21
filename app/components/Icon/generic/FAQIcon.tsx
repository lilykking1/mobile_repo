import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '@app/components/Icon/types';

const FAQIcon: FC<IconProps> = ({ width = 20, height = 20 }) => (
  <Svg width={width} height={height} fill="none">
    <Path
      clipRule="evenodd"
      d="M10 19v0c-5 0-9-4-9-9v0c0-5 4-9 9-9v0c5 0 9 4 9 9v0c0 5-4 9-9 9Z"
      stroke="#878EB0"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 11.3v-.2c0-.8.5-1.3 1-1.6.5-.3 1-.8 1-1.6 0-1.1-.9-2-2-2s-2 .9-2 2M10 14c-.1 0-.2.1-.2.2s.1.2.2.2.2-.1.2-.2-.1-.2-.2-.2"
      stroke="#878EB0"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default FAQIcon;
