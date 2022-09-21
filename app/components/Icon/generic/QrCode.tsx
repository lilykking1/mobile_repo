import React, { FC } from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const QrCode: FC<IconProps> = ({
  width = 22,
  height = 22,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
    <Rect
      x="5.00006"
      y="5.00012"
      width="4"
      height="4"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Rect
      x="5.00006"
      y="13.0001"
      width="4"
      height="4"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Rect
      x="17.0375"
      y="9.06311"
      width="4"
      height="4"
      transform="rotate(-180 17.0375 9.06311)"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M20.5001 7.00012V3.50012C20.5001 2.40012 19.6001 1.50012 18.5001 1.50012L15.0001 1.50012"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M7.00006 1.5L3.50006 1.5C2.40006 1.5 1.50006 2.4 1.50006 3.5L1.50006 7"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M1.50012 15.1002L1.50012 18.6002C1.50012 19.7002 2.40012 20.6002 3.50012 20.6002H7.00012"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M15.0001 20.5001H18.5001C19.6001 20.5001 20.5001 19.6001 20.5001 18.5001V15.0001"
      stroke={tint}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.0002 13.75C17.4144 13.75 17.7502 13.4142 17.7502 13C17.7502 12.5858 17.4144 12.25 17.0002 12.25C16.586 12.25 16.2502 12.5858 16.2502 13C16.2502 13.4142 16.586 13.75 17.0002 13.75ZM13.7501 13.0001C13.7501 13.4143 13.4143 13.7501 13.0001 13.7501C12.5859 13.7501 12.2501 13.4143 12.2501 13.0001C12.2501 12.5859 12.5859 12.2501 13.0001 12.2501C13.4143 12.2501 13.7501 12.5859 13.7501 13.0001ZM15.7501 15C15.7501 15.4142 15.4143 15.75 15.0001 15.75C14.5859 15.75 14.2501 15.4142 14.2501 15C14.2501 14.5858 14.5859 14.25 15.0001 14.25C15.4143 14.25 15.7501 14.5858 15.7501 15ZM13.0001 17.75C13.4143 17.75 13.7501 17.4142 13.7501 17C13.7501 16.5858 13.4143 16.25 13.0001 16.25C12.5859 16.25 12.2501 16.5858 12.2501 17C12.2501 17.4142 12.5859 17.75 13.0001 17.75ZM17.7502 17C17.7502 17.4142 17.4144 17.75 17.0002 17.75C16.586 17.75 16.2502 17.4142 16.2502 17C16.2502 16.5858 16.586 16.25 17.0002 16.25C17.4144 16.25 17.7502 16.5858 17.7502 17Z"
      fill={tint}
    />
  </Svg>
);

export default QrCode;
