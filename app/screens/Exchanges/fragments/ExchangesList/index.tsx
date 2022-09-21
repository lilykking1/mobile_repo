import React, { FC, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { EXCHANGES_QUICK_CONNECT } from '@app/models';
import ExchangesListItem from './components/ExchangesListItem';

import styles from './styles';

interface ExchangesListProps {
  exchanges: string[];
}

const ExchangesList: FC<ExchangesListProps> = ({ exchanges }) => {
  const keyExtractor = useCallback(({ item }, i) => `${item}-${i}`, []);
  const renderExchangeListItem = useCallback(({ item }) => {
    const hasQuickConnect = EXCHANGES_QUICK_CONNECT.includes(item);

    return <ExchangesListItem item={item} quickConnect={hasQuickConnect} />;
  }, []);

  return (
    <View style={styles.flatListContainer}>
      <FlatList
        data={exchanges}
        keyExtractor={keyExtractor}
        renderItem={renderExchangeListItem}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
};

export default ExchangesList;
