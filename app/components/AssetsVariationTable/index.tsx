import React, { FC, useCallback } from 'react';

import { AssetVariation } from '@app/models';

import AssetVariationItem from '../AssetVariationItem';
import List from '../List';

import { Empty, Headers } from './components';
import { RenderItemType } from './types';
import styles from './styles';

interface AssetsVariationTableProps {
  assetsList: AssetVariation[];
}

const AssetsVariationTable: FC<AssetsVariationTableProps> = ({
  assetsList,
}) => {
  const renderItem = useCallback(
    ({ item }: RenderItemType) => (
      <AssetVariationItem
        coin={item.coin}
        currentValue={item.currentCoinAmount}
        currentPercentage={item.currentPercentage}
        endPercentage={item.endPercentage}
        endValue={item.endCoinAmount}
      />
    ),
    []
  );

  return (
    <List
      items={assetsList}
      renderItem={renderItem}
      headerComponent={<Headers />}
      headerComponentCustomStyle={styles.header}
      emptyListView={<Empty />}
    />
  );
};

export default AssetsVariationTable;
