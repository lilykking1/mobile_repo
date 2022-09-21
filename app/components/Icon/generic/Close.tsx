import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Close: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
    <Path
      d="M1.69233 2.7525C1.39943 2.4596 1.39943 1.98473 1.69233 1.69184C1.98522 1.39894 2.46009 1.39894 2.75299 1.69184L8.00043 6.93929L13.2479 1.69184C13.5408 1.39894 14.0156 1.39894 14.3085 1.69184C14.6014 1.98473 14.6014 2.4596 14.3085 2.7525L9.0611 7.99995L14.3085 13.2474C14.6014 13.5403 14.6014 14.0152 14.3085 14.3081C14.0156 14.6009 13.5408 14.6009 13.2479 14.3081L8.00043 9.06061L2.75299 14.3081C2.46009 14.6009 1.98522 14.6009 1.69233 14.3081C1.39943 14.0152 1.39943 13.5403 1.69233 13.2474L6.93977 7.99995L1.69233 2.7525Z"
      fill={tint}
    />
  </Svg>
);

export default Close;
