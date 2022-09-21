import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { CoinIcon, Typography } from '@app/components';
import { getCoinProperties } from '@app/models';

import styles from './styles';

interface IndividualCoinItemLeftProps {
  coin: string;
}

const IndividualCoinItemLeft: FC<IndividualCoinItemLeftProps> = ({ coin }) => {
  const coinProperties = useMemo(() => getCoinProperties(coin), [coin]);

  return (
    <View style={styles.leftItemContainer}>
      <View style={styles.coinIconContainer}>
        <CoinIcon coin={coin} size={30} />
      </View>
      <View>
        <Typography style={styles.coinLabel} size="buttons" strong>
          {coin.toUpperCase()}
        </Typography>
        <Typography size="small" altLight="grey.600" altDark="grey.600" strong>
          {coinProperties.name}
        </Typography>
      </View>
    </View>
  );
};

export default IndividualCoinItemLeft;
