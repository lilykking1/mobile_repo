import React, { FC } from 'react';
import { View } from 'react-native';
import { Quantity, Typography } from '@app/components';

import { TRANSACTIONS_TYPES } from '@app/models/Transactions';
import styles from './styles';
import {
  getAmountPrefixByTransactionType,
  getAmountVariantByTransactionType,
  isNegativeTransactionType,
} from './utils';

interface TransactionItemRightProps {
  coin: string;
  coinAmount: string;
  fiatAmount: string;
  date: string;
  swapText: string;
  type: TRANSACTIONS_TYPES;
}

const TransactionItemRight: FC<TransactionItemRightProps> = ({
  coinAmount,
  coin,
  fiatAmount,
  date,
  swapText,
  type,
}) => {
  const cryptoAmount = coinAmount && (
    <Typography variant="grey.600" size="body2">
      {`${coinAmount} ${coin}`}
    </Typography>
  );

  const swapAmount = swapText && (
    <Typography variant="grey.600" size="body2">
      {swapText}
    </Typography>
  );

  return (
    <View style={styles.rightTxContainer}>
      <Quantity
        strong
        prefix={getAmountPrefixByTransactionType(type)}
        value={fiatAmount}
        size="body1"
        variant={getAmountVariantByTransactionType(type)}
        useValueLabel={!isNegativeTransactionType(type)}
      />
      {cryptoAmount}
      {swapAmount}
      <Typography variant="grey.600" size="body2">
        {date}
      </Typography>
    </View>
  );
};

export default TransactionItemRight;
