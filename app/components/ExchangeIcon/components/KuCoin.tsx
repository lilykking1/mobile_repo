import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '../types';

const KuCoin: FC<IconProps> = ({ tint, width = 32, height = 32 }) => {
  const color = tint || '#23AF91';

  return (
    <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
      <Path
        d="M8.07 13.99l8.28 8.28 5.23-5.23a2.36 2.36 0 013.34 3.34l-6.9 6.9c-.93.91-2.41.91-3.34 0l-9.95-9.95v5.91a2.36 2.36 0 01-4.73 0V4.72a2.36 2.36 0 014.73 0v5.92L14.68.69a2.38 2.38 0 013.34 0l6.9 6.9a2.36 2.36 0 01-3.34 3.34L16.36 5.7l-8.29 8.29zm8.29-2.37a2.37 2.37 0 100 4.74 2.37 2.37 0 000-4.74z"
        fill={color}
      />
    </Svg>
  );
};
export default KuCoin;
