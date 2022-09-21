import React, { FC } from 'react';

import { List, AssetsItem } from '@app/components';
import { Asset } from '@app/models';

import { CardType } from '../../types';
import { getEmptyAssetView } from '../../utils';

interface AssetsListProps {
  assets: Asset[];
  headerComponent: React.ReactElement;
  isValuesSecret: boolean;
  selectedCardType: CardType;
}

const AssetsList: FC<AssetsListProps> = ({
  assets,
  isValuesSecret,
  headerComponent,
  selectedCardType,
}) => {
  const keyExtractor = (item: Asset, index: number) =>
    `${item?.symbol}-${item?.coinAmount}-${index}`;

  const renderItem = ({ item }) => (
    <AssetsItem
      coin={item.symbol}
      fiatAmount={item.fiatAmount}
      coinAmount={item.coinAmount}
      isSecret={isValuesSecret}
    />
  );

  const emptyListView = getEmptyAssetView(selectedCardType);

  return (
    <List
      items={assets}
      renderItem={renderItem}
      headerComponent={headerComponent}
      emptyListView={emptyListView}
      keyExtractor={keyExtractor}
    />
  );
};

export default AssetsList;
