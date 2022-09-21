import React, { FC, useCallback, useState } from 'react';
import { Card, Typography, List } from '@app/components';
import Clipboard from '@react-native-clipboard/clipboard';
import type {
  TransactionData,
  TransactionsData,
} from '@app/models/Transactions';
import { TransactionItem } from './components';
import { THREE_SECONDS_IN_MS } from './constants';

import styles from './styles';

interface TransactionsProps {
  data: TransactionsData;
  year: number;
}

const TransactionsCard: FC<TransactionsProps> = ({ data, year }) => {
  const { transactions } = data;
  const transactionsLength = transactions.length;

  const [isCopied, setCopied] = useState(
    new Array(transactionsLength).fill(false)
  );

  const setCopiedElement = (index, value) => {
    setCopied((prevState) => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
  };

  const handleCopyAddress = useCallback((address, index) => {
    Clipboard.setString(address);
    setCopiedElement(index, true);
    setTimeout(() => setCopiedElement(index, false), THREE_SECONDS_IN_MS);
  }, []);

  const renderItem = ({
    index,
    item,
  }: {
    index: number;
    item: TransactionData;
  }) => (
    <TransactionItem
      paymentMethod={item.paymentMethod}
      coin={item.coin}
      coinAmount={item.coinAmount}
      type={item.type}
      date={item.date}
      fiatAmount={item.fiatAmount}
      address={item.address}
      withdrawalExchange={item.withdrawalExchange}
      swapDestination={item.swapDestination}
      swapFrom={item.swapFrom}
      swapTo={item.swapTo}
      swapFromAmount={item.swapFromAmount}
      swapToAmount={item.swapToAmount}
      transactionsLength={transactionsLength}
      index={index}
      isAddressCopied={isCopied[index]}
      handleCopyAddress={handleCopyAddress}
    />
  );

  return (
    <Card style={styles.cardContainer}>
      <Typography variant="grey.600" size="body2" style={styles.yearText}>
        {year}
      </Typography>
      <List items={transactions} renderItem={renderItem} />
    </Card>
  );
};

export default TransactionsCard;
