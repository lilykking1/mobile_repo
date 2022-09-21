import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '../types';

const StackedWallet: FC<IconProps> = ({ tint, width = 30, height = 30 }) => {
  const color1 = tint || '#4A4AE2';
  const color2 = tint || '#7CB7F3';

  return (
    <Svg width={width} height={height} viewBox="0 0 24 22" fill="none">
      <Path
        d="M20.445 1.214c0-.624-.507-1.13-1.132-1.13H1.215C.59.083.084.59.084 1.213V13.28a1.131 1.131 0 0 0 2.262 0V2.346h15.836V4.23a1.131 1.131 0 1 0 2.263 0V1.214Z"
        fill={color1}
      />
      <Path
        d="M18.514 8.333a1.131 1.131 0 0 1 1.6 0l2.639 2.639a1.131 1.131 0 0 1-1.6 1.6l-.708-.709v8.204a1.131 1.131 0 0 1-2.263 0v-8.204l-.708.709a1.13 1.13 0 1 1-1.6-1.6l2.64-2.64Zm-6.364 5.701a1.131 1.131 0 1 1 2.262 0v6.033a1.131 1.131 0 1 1-2.263 0v-6.033Zm-4.902 1.131c-.625 0-1.131.507-1.131 1.131v3.77a1.131 1.131 0 1 0 2.262 0v-3.77c0-.624-.506-1.13-1.131-1.13Zm-6.033 1.508c-.625 0-1.131.507-1.131 1.132v2.262a1.131 1.131 0 1 0 2.262 0v-2.262c0-.625-.506-1.132-1.13-1.132Z"
        fill={color2}
      />
    </Svg>
  );
};

export default StackedWallet;
