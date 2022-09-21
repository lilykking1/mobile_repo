import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '../types';

const Binance: FC<IconProps> = ({ tint, width = 32, height = 32 }) => {
  const color = tint || '#F3BA2F';

  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.79 13.45L16 7.23l6.22 6.22 3.62-3.62L16 0 6.17 9.83l3.62 3.62zM0 16l3.62-3.61L7.23 16l-3.61 3.62L0 16zm16 8.77L9.8 18.55l-3.62 3.62L16 32l9.84-9.84-3.62-3.6-6.22 6.2zM24.77 16l3.61-3.61L32 16l-3.62 3.62L24.77 16zM16 12.33L19.67 16 16 19.67 12.33 16 16 12.33z"
        fill={color}
      />
    </Svg>
  );
};

export default Binance;
