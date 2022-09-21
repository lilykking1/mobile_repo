import React, { FC } from 'react';
import { View } from 'react-native';
import { Typography, CoinIcon } from '@app/components';
import { upperCase } from 'lodash';

import styles from './styles';

interface AssetsLeftItemProps {
  coin: string;
  coinName: string;
  isLending: boolean;
  hasLendingView?: boolean;
}

const AssetsLeftItem: FC<AssetsLeftItemProps> = ({
  coin,
  coinName,
  isLending,
  hasLendingView = false,
}) => (
  <View style={styles.leftContainer}>
    {hasLendingView ? (
      <View style={styles.coinContainer}>
        <CoinIcon coin={coin} size={42} isOutlined={isLending} />
      </View>
    ) : (
      <CoinIcon coin={coin} size={42} isOutlined={isLending} />
    )}
    <View style={styles.coinTextContainer}>
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
