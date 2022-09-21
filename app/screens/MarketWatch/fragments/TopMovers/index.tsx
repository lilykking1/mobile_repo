import React, { FC, useCallback } from 'react';
import { FlatList, View } from 'react-native';

import { Typography } from '@app/components';
import { translate } from '@app/i18n';
import { CoinInfo } from '@app/models/Coin';
import MarketWatchCoinCard from '../MarketWatchCoinCard';

import styles from './styles';
import { MarketWatchCoinType } from '../MarketWatchCoinCard/types';

interface TopMoversProps {
  coins: CoinInfo[];
  usAllowed: boolean;
}

const TopMovers: FC<TopMoversProps> = ({ coins = [], usAllowed }) => {
  const renderItem = useCallback(
    ({ item }) => (
      <MarketWatchCoinCard
        coinType={MarketWatchCoinType.TOP_MOVERS}
        usAllowed={usAllowed}
        item={item}
      />
    ),
    [usAllowed]
  );
  const keyExtractor = useCallback((item, i) => `${item.symbol}-${i}`, []);
  const ItemSeparatorComponent = useCallback(
    () => <View style={styles.separator} />,
    []
  );

  return (
    <View>
      <Typography strong style={styles.title} size="h6">
        {translate('marketWatch.topMovers')}
      </Typography>
      <FlatList
        horizontal
        key="market-watch-top-movers"
        data={coins}
        initialNumToRender={8}
        ItemSeparatorComponent={ItemSeparatorComponent}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TopMovers;
