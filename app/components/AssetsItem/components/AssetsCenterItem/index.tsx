import React, { FC } from 'react';
import { View } from 'react-native';
import { Typography } from '@app/components';
import { upperCase } from 'lodash';

import styles from './styles';

interface AssetsCenterItemProps {
  lendingText: string;
  lendingAmount: string;
  lendingCoin: string;
}

const AssetsCenterItem: FC<AssetsCenterItemProps> = ({
  lendingText,
  lendingAmount,
  lendingCoin,
}) => (
  <View style={styles.container}>
    <View style={styles.subContainer}>
      <View style={styles.topContainer}>
        <View style={styles.circle} />
        <Typography size="body2" variant="green.500" strong>
          {lendingText}
        </Typography>
      </View>
      <Typography size="body2" variant="green.500">
        {`${lendingAmount} ${upperCase(lendingCoin)}`}
      </Typography>
    </View>
  </View>
);

export default AssetsCenterItem;
