import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Telegram: FC<IconProps> = ({
  width = 18,
  height = 18,
  tint = palette.white,
}) => (
  <Svg width={width} height={height} viewBox="0 0 14 12" fill="none">
    <Path
      d="M5.49349 7.9088L5.2619 11.2592C5.59324 11.2592 5.73674 11.1128 5.90883 10.937L7.46228 9.41L10.6812 11.8346C11.2715 12.173 11.6875 11.9948 11.8467 11.276L13.9596 1.09284L13.9602 1.09224C14.1474 0.194642 13.6446 -0.156356 13.0694 0.063843L0.649953 4.95442C-0.197651 5.29282 -0.184817 5.77881 0.505866 5.99901L3.68103 7.01481L11.0563 2.26823C11.4034 2.03183 11.719 2.16263 11.4594 2.39903L5.49349 7.9088Z"
      fill={tint}
    />
  </Svg>
);

export default Telegram;
