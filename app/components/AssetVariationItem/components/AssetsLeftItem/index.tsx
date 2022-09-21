import React, { FC } from 'react';
import { View } from 'react-native';
import { Typography, CoinIcon } from '@app/components';
import { upperCase } from 'lodash';

import styles from './styles';

interface AssetsLeftItemProps {
  coin: string;
  coinName: string;
}

const AssetsLeftItem: FC<AssetsLeftItemProps> = ({ coin, coinName }) => (
  <View style={styles.container}>
    <CoinIcon coin={coin} size={42} />

    <View style={styles.coinInfoContainer}>
      <Typography size="body1" strong>
        {upperCase(coin)}
      </Typography>
      <Typography size="body2" variant="grey.600">
        {coinName}
      </Typography>
    </View>
  </View>
);

export default AssetsLeftItem;
