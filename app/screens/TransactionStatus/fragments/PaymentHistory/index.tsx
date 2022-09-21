import React, { FC, useCallback } from 'react';
import { translate } from '@app/i18n';
import { TransactionsCard, Typography } from '@app/components';
import { View } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';
import type { TransactionsData } from '@app/models/Transactions';

import styles from './styles';

interface TransactionsProps {
  data: TransactionsData[];
}

const Transactions: FC<TransactionsProps> = ({ data }) => {
  const keyExtractor = useCallback(({ year }) => `${year}`, []);
  const renderItem = useCallback(
    ({ item }) => (
      <TransactionsCard key={item.year} data={item} year={item.year} />
    ),
    []
  );

  return (
    <View style={styles.transactions}>
      <Typography strong size="h6" style={styles.title}>
        {translate('screens.transactionStatus.paymentHistory')}
      </Typography>
      <FlatList
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Transactions;
