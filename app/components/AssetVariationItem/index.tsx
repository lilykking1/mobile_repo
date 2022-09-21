import React, { FC } from 'react';
import { View } from 'react-native';

import { getCoinProperties } from '@app/models';

import {
  AssetsCenterItem,
  AssetsLeftItem,
  AssetsRightItem,
} from './components';
import styles from './styles';

interface AssetVariationItemProps {
  coin: string;
  currentPercentage: number;
  currentValue: number;
  endPercentage: number;
  endValue: number;
}

const AssetVariationItem: FC<AssetVariationItemProps> = ({
  coin,
  currentPercentage,
  currentValue,
  endPercentage,
  endValue,
}) => {
  const coinProperties = getCoinProperties(coin);

  return (
    <View style={styles.itemContainer}>
      <AssetsLeftItem coin={coin} coinName={coinProperties.name} />

      <AssetsCenterItem
        currentPercentage={currentPercentage}
        currentValue={currentValue}
      />

      <AssetsRightItem endPercentage={endPercentage} endValue={endValue} />
    </View>
  );
};

export default AssetVariationItem;
