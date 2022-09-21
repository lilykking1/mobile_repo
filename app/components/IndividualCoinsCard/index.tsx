import React, { FC } from 'react';
import { Card, List } from '@app/components';
import type { CoinStackDetails } from '@app/models/Portfolio';
import { IndividualCoinItem, IndividualCoinsCardHeader } from './components';

import styles from './styles';

interface IndividualCoinsCardProps {
  assets: CoinStackDetails[];
  totalAmount: string;
}

const IndividualCoinsCard: FC<IndividualCoinsCardProps> = ({
  assets,
  totalAmount,
}) => {
  const renderItem = ({
    index,
    item,
  }: {
    index: number;
    item: CoinStackDetails;
  }) => (
    <IndividualCoinItem asset={item} totalAmount={totalAmount} index={index} />
  );

  const headerComponent = <IndividualCoinsCardHeader />;

  return (
    <Card style={styles.cardContainer}>
      <List
        headerComponentCustomStyle={styles.headerContainer}
        headerComponent={headerComponent}
        items={assets}
        renderItem={renderItem}
      />
    </Card>
  );
};

export default IndividualCoinsCard;
