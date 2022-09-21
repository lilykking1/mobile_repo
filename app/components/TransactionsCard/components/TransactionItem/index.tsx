import React, { FC } from 'react';
import { View } from 'react-native';
import {
  TransactionLeftItem,
  TransactionRightItem,
  TransactionSeparator,
} from '@app/components/TransactionsCard/components';
import { translate } from '@app/i18n';
import {
  PAYMENT_METHOD,
  TRANSACTIONS_TYPES,
  TRANSACTIONS_TYPES_TITLES,
} from '@app/models/Transactions';

import styles from './styles';
import { isFiatDeposit } from './utils';

interface TransactionItemProps {
  paymentMethod?: PAYMENT_METHOD;
  coin: string;
  coinAmount?: string;
  type?: TRANSACTIONS_TYPES;
  date: string;
  fiatAmount: string;
  address?: string;
  withdrawalExchange?: string;
  swapDestination?: string;
  swapFrom?: string;
  swapTo?: string;
  swapFromAmount?: string;
  swapToAmount?: string;
  transactionsLength: number;
  index: number;
  isAddressCopied: boolean;
  handleCopyAddress: (from: string, index: number) => void;
}

const TransactionItem: FC<TransactionItemProps> = ({
  paymentMethod,
  coin,
  coinAmount,
  type,
  date,
  fiatAmount,
  address,
  withdrawalExchange,
  swapDestination,
  swapFrom,
  swapTo,
  swapFromAmount,
  swapToAmount,
  transactionsLength,
  index,
  isAddressCopied,
  handleCopyAddress,
}) => {
  const isLastItem = transactionsLength === index + 1;
  const coinTitle = isFiatDeposit(type, address)
    ? `${coin} - ${paymentMethod}`
    : coin;
  const swapText =
    swapFrom && `${swapFromAmount} ${swapFrom} > ${swapToAmount} ${swapTo}`;
  const transactionTypeText = translate(
    `screens.managedPortfolio.transactions.${TRANSACTIONS_TYPES_TITLES[type]}`,
    { swapFrom, swapTo, paymentMethod }
  );

  return (
    <View key={`${date}-${fiatAmount}`}>
      <View style={styles.txContainer}>
        <TransactionLeftItem
          coinTitle={coinTitle}
          address={address}
          coin={coin}
          type={type}
          transactionTypeText={transactionTypeText}
          index={index}
          isAddressCopied={isAddressCopied}
          handleCopyAddress={handleCopyAddress}
          withdrawalExchange={withdrawalExchange}
          swapDestination={swapDestination}
        />
        <TransactionRightItem
          coin={coin}
          coinAmount={coinAmount}
          fiatAmount={fiatAmount}
          date={date}
          swapText={swapText}
          type={type}
        />
      </View>
      {!isLastItem && <TransactionSeparator />}
    </View>
  );
};

export default TransactionItem;
