import React, { FC } from 'react';
import { View } from 'react-native';
import { CoinIcon, Typography } from '@app/components';
import { TransactionAddressButton } from '@app/components/TransactionsCard/components';
import { translate } from '@app/i18n';

import { TRANSACTIONS_TYPES } from '@app/models/Transactions';
import styles from './styles';

interface TransactionItemLeftProps {
  index: number;
  isAddressCopied: boolean;
  handleCopyAddress: (from: string, index: number) => void;
  coin: string;
  address?: string;
  type?: TRANSACTIONS_TYPES;
  transactionTypeText?: string;
  coinTitle: string;
  withdrawalExchange: string;
  swapDestination: string;
}

const TransactionItemLeft: FC<TransactionItemLeftProps> = ({
  coinTitle,
  address,
  coin,
  type,
  transactionTypeText,
  index,
  isAddressCopied,
  handleCopyAddress,
  withdrawalExchange,
  swapDestination,
}) => {
  const fromAddress = address && type !== TRANSACTIONS_TYPES.withdrawal && (
    <View style={styles.addressContainer}>
      <Typography style={styles.fromText} variant="grey.600" size="body2">
        {`${translate('screens.managedPortfolio.transactions.from')}:`}
      </Typography>
      <TransactionAddressButton
        index={index}
        address={address}
        isAddressCopied={isAddressCopied}
        handleCopyAddress={handleCopyAddress}
      />
    </View>
  );

  const withdrawalText = withdrawalExchange && (
    <Typography style={styles.fromText} variant="grey.600" size="body2">
      {`${translate(
        'screens.managedPortfolio.transactions.to'
      )}: ${withdrawalExchange}`}
    </Typography>
  );
  const swapText = swapDestination && (
    <Typography style={styles.fromText} variant="grey.600" size="body2">
      {swapDestination}
    </Typography>
  );

  const typeText = transactionTypeText && (
    <Typography variant="grey.600" size="body2">
      {transactionTypeText}
    </Typography>
  );

  return (
    <View style={styles.leftTxContainer}>
      <View style={styles.coinIconContainer}>
        <CoinIcon coin={coin} size={30} />
      </View>
      <View>
        <Typography size="body1" strong>
          {coinTitle}
        </Typography>
        {fromAddress}
        {withdrawalText}
        {swapText}
        {typeText}
      </View>
    </View>
  );
};

export default TransactionItemLeft;
