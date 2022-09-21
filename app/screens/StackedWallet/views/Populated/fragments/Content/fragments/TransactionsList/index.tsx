import React, { FC, useCallback } from 'react';
import { TransactionsData } from '@app/models/Transactions';
import { List, TransactionsCard } from '@app/components';
import { keyExtractor } from './utils';

interface TransactionsListProps {
  transactions: TransactionsData[];
}

const TransactionsList: FC<TransactionsListProps> = ({ transactions }) => {
  const renderItem = useCallback(
    ({ item }) => <TransactionsCard data={item} year={item.year} />,
    []
  );
  return (
    <List
      items={transactions}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default TransactionsList;
