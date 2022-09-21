import React, { FC } from 'react';
import { ViewProps, ViewStyle } from 'react-native';
import { observer } from 'mobx-react';
import { PAYMENT_METHOD, TRANSACTIONS_TYPES } from '@app/models/Transactions';
import { Transaction } from '@app/screens/TransactionStatus/types';

import { SingleTransaction, MultipleTransaction } from './components';

interface GemCardProps extends ViewProps {
  paymentMethod: PAYMENT_METHOD;
  isTitleDark?: boolean;
  showCongratulationsCard?: boolean;
  transactionType: TRANSACTIONS_TYPES;
  estimatedDepositDate: string;
  style?: ViewStyle;
  transactions: Transaction[];
}

const GemCard: FC<GemCardProps> = ({
  paymentMethod,
  isTitleDark,
  showCongratulationsCard,
  transactionType,
  estimatedDepositDate,
  transactions,
}) => {
  const isMultipleTransaction: boolean = transactions.length > 1;
  const singleTransaction = transactions[0];

  return (
    <>
      {!isMultipleTransaction ? (
        <SingleTransaction
          isTitleDark={isTitleDark}
          paymentMethod={paymentMethod}
          transactionType={transactionType}
          coin={singleTransaction.transactionCoin}
          showCongratulationsCard={showCongratulationsCard}
          units={singleTransaction.units}
          transaction={singleTransaction}
          estimatedDepositDate={estimatedDepositDate}
        />
      ) : (
        <MultipleTransaction
          isTitleDark={isTitleDark}
          paymentMethod={paymentMethod}
          transactionType={transactionType}
          showCongratulationsCard={showCongratulationsCard}
          transactions={transactions}
          estimatedDepositDate={estimatedDepositDate}
        />
      )}
    </>
  );
};

export default observer(GemCard);
