import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { getElementsPosition } from '@app/utils/roundElementPosition';

import { getEmptyCoinIcon } from './utils';

interface EmptyCoinProps {
  size?: number;
  index: number;
  arrayLength: number;
}

const EmptyCoin: FC<EmptyCoinProps> = ({ size, index, arrayLength }) => {
  const itemStyle = useMemo(
    () => getElementsPosition(index, size, arrayLength),
    [index, size, arrayLength]
  );

  const icon = useMemo(() => getEmptyCoinIcon(size, index), [index, size]);

  return <View style={itemStyle}>{icon}</View>;
};
export default EmptyCoin;
