import React, { FC } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

interface AlertProps {
  alerts?: boolean;
}

const Bell: FC<IconProps & AlertProps> = ({
  width = 16, // 23
  height = 18, // 21
  tint = palette.black,
  alerts,
}) => {
  const alertWidth = alerts ? 23 : width;
  const alertHeight = alerts ? 21 : height;

  return (
    <Svg
      width={alertWidth}
      height={alertHeight}
      viewBox={`0 0 ${alertWidth} ${alertHeight}`}
      fill="none"
    >
      <Path
        d="M8 18C9.26142 18 10.2846 16.9928 10.2846 15.75H5.71536C5.71536 16.9928 6.73858 18 8 18ZM15.6925 12.7368C15.0025 12.0069 13.7114 10.909 13.7114 7.3125C13.7114 4.58086 11.7657 2.39414 9.14214 1.85766V1.125C9.14214 0.503789 8.63071 0 8 0C7.36929 0 6.85786 0.503789 6.85786 1.125V1.85766C4.2343 2.39414 2.28859 4.58086 2.28859 7.3125C2.28859 10.909 0.997522 12.0069 0.307524 12.7368C0.0932387 12.9635 -0.00176102 13.2346 2.46924e-05 13.5C0.00395325 14.0766 0.463595 14.625 1.14645 14.625H14.8535C15.5364 14.625 15.9964 14.0766 16 13.5C16.0018 13.2346 15.9068 12.9632 15.6925 12.7368Z"
        fill={tint}
      />
      {alerts && <Circle cx="17" cy="15" r="6" fill="#E84731" />}
    </Svg>
  );
};

export default Bell;
