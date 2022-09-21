import React, { FC, useMemo } from 'react';
import { View } from 'react-native';

import { CoinIcon } from '@app/components';
import { getElementsPosition } from '@app/utils/roundElementPosition';

interface FilledCoinProps {
  coin: string;
  size?: number;
  index: number;
  arrayLength: number;
}
const FilledCoin: FC<FilledCoinProps> = ({
  coin,
  size,
  index,
  arrayLength,
}) => {
  const itemStyle = useMemo(
    () => getElementsPosition(index, size, arrayLength),
    [index, size, arrayLength]
  );
  return (
    <View style={itemStyle}>
      <CoinIcon size={size} coin={coin} />
    </View>
  );
};

export default FilledCoin;
