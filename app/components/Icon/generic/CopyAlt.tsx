import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const CopyAlt: FC<IconProps> = ({
  width = 24,
  height = 24,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.4 6.2l-2.5-2.5c-.4-.4-.9-.6-1.4-.6H9c-1.1 0-2 .9-2 2v10.7c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V7.6c0-.6-.2-1.1-.6-1.4z"
      stroke={tint}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 8.75a.75.75 0 000-1.5v1.5zm0-1.5h-4v1.5h4v-1.5zm-4 0c-.13 0-.18-.04-.195-.055-.015-.016-.055-.065-.055-.195h-1.5c0 .47.16.92.495 1.255.334.335.785.495 1.255.495v-1.5zM15.75 7V3h-1.5v4h1.5z"
      fill={tint}
    />
    <Path
      d="M17 17.7V19c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h1"
      stroke={tint}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
);

export default CopyAlt;
