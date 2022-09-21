import React, { FC } from 'react';
import { View } from 'react-native';
import {
  IndividualCoinLeftItem,
  IndividualCoinMiddleItem,
  IndividualCoinRightItem,
} from '@app/components/IndividualCoinsCard/components';
import { CoinStackDetails } from '@app/models/Portfolio';
import { calculatePercentage } from '@app/utils/numbers';

import styles from './styles';

interface IndividualCoinItemProps {
  asset: CoinStackDetails;
  totalAmount: number | string;
  index: number;
}

const IndividualCoinItem: FC<IndividualCoinItemProps> = ({
  asset,
  totalAmount,
  index,
}) => {
  const percentage = calculatePercentage(totalAmount, asset.fiatAmount);

  const isLending = !!asset.lending;
  const lendingPercentage = isLending
    ? calculatePercentage(asset.coinAmount, asset.lending.amount)
    : '';

  return (
    <View style={styles.itemContainer} key={`${asset.coin}-${index}`}>
      <IndividualCoinLeftItem coin={asset.coin} />
      <IndividualCoinMiddleItem
        isLending={isLending}
        lendingPercentage={lendingPercentage}
      />
      <IndividualCoinRightItem
        percentage={percentage}
        fiatAmount={asset.fiatAmount}
      />
    </View>
  );
};

export default IndividualCoinItem;
