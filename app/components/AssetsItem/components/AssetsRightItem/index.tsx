import React, { FC } from 'react';
import { View } from 'react-native';
import { Quantity } from '@app/components';

import styles from './styles';

interface AssetsRightItemProps {
  fiatAmount: string;
  coinAmount: string;
  coin: string;
  isSecret: boolean;
  suffixValue?: string;
  prefixValue?: string;
}

const AssetsRightItem: FC<AssetsRightItemProps> = ({
  fiatAmount,
  coinAmount,
  coin,
  isSecret = false,
  suffixValue,
  prefixValue,
}) => (
  <View style={styles.rightContainer}>
    <View style={styles.rightSubContainer}>
      <Quantity
        size="body1"
        value={fiatAmount}
        suffix={suffixValue}
        prefix={prefixValue}
        strong
        useValueLabel
        valueLabelVariant="normal"
        isSecret={isSecret}
      />
      <Quantity
        size="body2"
        variant="grey.600"
        value={coinAmount}
        suffix={` ${coin.toUpperCase()}`}
        strong={false}
        isSecret={isSecret}
      />
    </View>
  </View>
);

export default AssetsRightItem;
