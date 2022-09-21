import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { palette } from '@app/theme';
import { IconProps } from '@app/components/Icon/types';

const Dollar: FC<IconProps> = ({
  width = 8,
  height = 12,
  tint = palette.black,
}) => (
  <Svg width={width} height={height} viewBox="0 0 8 12" fill="none">
    <Path
      d="M3.5661 10.1651C3.05035 10.1107 2.5893 9.96679 2.18295 9.73346C1.77661 9.50013 1.45231 9.20068 1.21006 8.83513C0.975629 8.46957 0.838877 8.06513 0.799805 7.62179L0.893578 7.49346L2.52288 7.24846C2.55414 7.60624 2.66354 7.90568 2.85109 8.14679C3.03863 8.38013 3.27697 8.54346 3.5661 8.63679V6.25679L3.402 6.22179C2.74559 6.08179 2.21812 5.81735 1.81958 5.42846C1.42886 5.03957 1.2335 4.55346 1.2335 3.97013C1.2335 3.36346 1.44449 2.86957 1.86647 2.48846C2.29626 2.10735 2.86281 1.88568 3.5661 1.82346V0.750127H4.58589V1.84679C5.28918 1.92457 5.84791 2.15402 6.26208 2.53513C6.67624 2.91624 6.93411 3.4179 7.0357 4.04013L6.93021 4.16846L5.41812 4.33179C5.40249 4.05179 5.32044 3.81846 5.17197 3.63179C5.02349 3.43735 4.82813 3.29735 4.58589 3.21179V5.02013C5.48454 5.19902 6.14486 5.47902 6.56684 5.86013C6.98882 6.24124 7.1998 6.78568 7.1998 7.49346C7.1998 8.23235 6.95365 8.83902 6.46134 9.31346C5.97685 9.78791 5.3517 10.0718 4.58589 10.1651V11.2501H3.5661V10.1651ZM3.5661 3.14179C3.31604 3.19624 3.12459 3.28957 2.99175 3.42179C2.86672 3.54624 2.8042 3.69791 2.8042 3.87679C2.8042 4.06346 2.86281 4.22679 2.98002 4.36679C3.09724 4.49902 3.2926 4.61957 3.5661 4.72846V3.14179ZM4.58589 8.66013C4.85157 8.59791 5.05866 8.47735 5.20713 8.29846C5.36342 8.11957 5.44156 7.89402 5.44156 7.62179C5.44156 7.34179 5.37514 7.12013 5.2423 6.95679C5.11726 6.78568 4.89846 6.64568 4.58589 6.53679V8.66013Z"
      fill={tint}
    />
  </Svg>
);

export default Dollar;
