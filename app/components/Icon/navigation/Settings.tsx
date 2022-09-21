import React, { FC } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Settings: FC<IconProps> = ({
  width = 24,
  height = 24,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
    <Circle
      cx="12.5"
      cy="12"
      r="2.5"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M10.21 3.991c1.081-1.648 3.498-1.648 4.58 0v0a2.739 2.739 0 0 0 2.544 1.225v0c1.963-.182 3.47 1.708 2.855 3.581v0a2.739 2.739 0 0 0 .628 2.752v0c1.367 1.422.83 3.778-1.019 4.466v0a2.739 2.739 0 0 0-1.76 2.207v0c-.259 1.955-2.437 3.003-4.127 1.987v0a2.738 2.738 0 0 0-2.822 0v0c-1.69 1.016-3.868-.032-4.127-1.987v0a2.739 2.739 0 0 0-1.76-2.207v0c-1.848-.688-2.386-3.044-1.02-4.466v0c.703-.73.945-1.789.629-2.752v0c-.615-1.873.892-3.763 2.855-3.58v0a2.739 2.739 0 0 0 2.544-1.225v0Z"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default Settings;
