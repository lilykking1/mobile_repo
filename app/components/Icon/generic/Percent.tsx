import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Percent: FC<IconProps> = ({
  width = 12,
  height = 12,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
    <Path
      d="M2.74194 5.54839C2.2043 5.54839 1.72581 5.43011 1.30645 5.19355C0.897849 4.95699 0.575269 4.62903 0.33871 4.20968C0.112903 3.77957 0 3.30108 0 2.77419C0 2.24731 0.112903 1.77419 0.33871 1.35484C0.575269 0.924731 0.897849 0.591398 1.30645 0.354839C1.72581 0.11828 2.2043 0 2.74194 0C3.27957 0 3.75269 0.11828 4.16129 0.354839C4.58065 0.591398 4.90323 0.924731 5.12903 1.35484C5.36559 1.77419 5.48387 2.24731 5.48387 2.77419C5.48387 3.30108 5.36559 3.77957 5.12903 4.20968C4.90323 4.62903 4.58065 4.95699 4.16129 5.19355C3.75269 5.43011 3.27957 5.54839 2.74194 5.54839ZM1.29032 10.5645L9.79032 0.290323L10.7097 1.04839L2.20968 11.3226L1.29032 10.5645ZM2.74194 4.45161C3.2043 4.45161 3.58065 4.30645 3.87097 4.01613C4.17204 3.71505 4.32258 3.30108 4.32258 2.77419C4.32258 2.24731 4.17204 1.83871 3.87097 1.54839C3.58065 1.24731 3.2043 1.09677 2.74194 1.09677C2.27957 1.09677 1.89785 1.24731 1.59677 1.54839C1.30645 1.83871 1.16129 2.24731 1.16129 2.77419C1.16129 3.30108 1.30645 3.71505 1.59677 4.01613C1.89785 4.30645 2.27957 4.45161 2.74194 4.45161ZM9.25807 11.6129C8.72043 11.6129 8.24194 11.4946 7.82258 11.2581C7.41398 11.0215 7.0914 10.6935 6.85484 10.2742C6.62903 9.84409 6.51613 9.36559 6.51613 8.83871C6.51613 8.31183 6.62903 7.83871 6.85484 7.41936C7.0914 6.98925 7.41398 6.65591 7.82258 6.41936C8.24194 6.1828 8.72043 6.06452 9.25807 6.06452C9.7957 6.06452 10.2688 6.1828 10.6774 6.41936C11.0968 6.65591 11.4194 6.98925 11.6452 7.41936C11.8817 7.83871 12 8.31183 12 8.83871C12 9.36559 11.8817 9.84409 11.6452 10.2742C11.4194 10.6935 11.0968 11.0215 10.6774 11.2581C10.2688 11.4946 9.7957 11.6129 9.25807 11.6129ZM9.25807 10.5161C9.72043 10.5161 10.0968 10.371 10.3871 10.0806C10.6882 9.77957 10.8387 9.36559 10.8387 8.83871C10.8387 8.31183 10.6882 7.90323 10.3871 7.6129C10.0968 7.31183 9.72043 7.16129 9.25807 7.16129C8.7957 7.16129 8.41398 7.31183 8.1129 7.6129C7.82258 7.90323 7.67742 8.31183 7.67742 8.83871C7.67742 9.36559 7.82258 9.77957 8.1129 10.0806C8.41398 10.371 8.7957 10.5161 9.25807 10.5161Z"
      fill={tint}
    />
  </Svg>
);

export default Percent;