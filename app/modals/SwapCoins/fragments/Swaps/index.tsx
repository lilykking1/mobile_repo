import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { getElementsPosition } from '@app/utils/roundElementPosition';
import styles from './styles';
import { DOT_SIZE, SWAP_OVERLAP_SIZE_RATIO } from './constants';
import { getColorConfigurations } from './utils';

interface SwapsProps {
  index?: number;
  arrayLength?: number;
  color: string;
}

const Swaps: FC<SwapsProps> = ({ index = 0, arrayLength = 1, color }) => {
  const itemStyle = useMemo(
    () => [
      styles.container,
      getElementsPosition(
        index,
        DOT_SIZE,
        arrayLength,
        SWAP_OVERLAP_SIZE_RATIO
      ),
      getColorConfigurations(color),
    ],
    [index, arrayLength, color]
  );
  return <View style={itemStyle} />;
};

export default Swaps;
