import React, { FC, useContext, useMemo, useCallback } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { observer } from 'mobx-react';
import { RootContext } from '@app/state';
import { translate } from '@app/i18n';
import { PAYMENT_METHOD, TRANSACTIONS_TYPES } from '@app/models/Transactions';
import {
  CoinIcon,
  Typography,
  Tooltip,
  Background,
  Quantity,
} from '@app/components';
import { Transaction } from '@app/screens/TransactionStatus/types';
import styles from './styles';
import {
  getIsMultipleTransactionSucess,
  getTooltipTextFromStatus,
  getTooltipVariantFromStatus,
  isDarkMode,
  isBankPayment,
  getTitleVariant,
  getMultipleTransactionTitle,
  getNeedShowCongratulationsCard,
} from '../../utils';
import { BottomAction, CongratulationsCard, RefreshButton } from '../index';

interface MultipleTransactionsProps extends ViewProps {
  paymentMethod: PAYMENT_METHOD;
  isTitleDark?: boolean;
  showCongratulationsCard?: boolean;
  transactionType: TRANSACTIONS_TYPES;
  estimatedDepositDate: string;
  style?: ViewStyle;
  transactions: Transaction[];
}

const MultipleTransactions: FC<MultipleTransactionsProps> = ({
  paymentMethod,
  isTitleDark,
  showCongratulationsCard,
  style,
  transactions,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const gemCardContainerStyle = useMemo(
    (): ViewStyle[] => [styles.container, style],
    [style]
  );

  const gemCoinIcon = useCallback(
    (transactionCoin) => {
      if (isBankPayment(paymentMethod)) {
        return <CoinIcon coin="usd" size={30} />;
      }
      return <CoinIcon coin={transactionCoin} size={30} />;
    },
    [paymentMethod]
  );

  const valuePrefix = useMemo(() => (isBankPayment(paymentMethod) ? '$' : ''), [
    paymentMethod,
  ]);

  const valueSuffix = useCallback(
    (transactionCoin) =>
      isBankPayment(paymentMethod) ? '' : ` ${transactionCoin?.toUpperCase()}`,
    [paymentMethod]
  );

  const isAllTransactionsSucceeded = getIsMultipleTransactionSucess(
    transactions
  );

  const titleStyle = getTitleVariant(isTitleDark);

  const cardTitle = getMultipleTransactionTitle(paymentMethod, transactions);
  const needShowCongratulationsCard = getNeedShowCongratulationsCard(
    isAllTransactionsSucceeded,
    showCongratulationsCard
  );

  return (
    <View style={styles.fullContainer}>
      {needShowCongratulationsCard && <CongratulationsCard />}
      <Background style={gemCardContainerStyle} secondary>
        <View style={styles.infoContainer}>
          <Typography
            altLight={titleStyle}
            altDark="secondary.400"
            size="buttons"
            strong
          >
            {cardTitle}
          </Typography>
          <RefreshButton
            isDarkMode={isDarkMode(theme)}
            hasMultipleTransactions
            isAllTransactionsSucceeded={isAllTransactionsSucceeded}
          />
        </View>

        {transactions.map((transaction) => (
          <View
            style={styles.multipleTransactionContainer}
            key={transaction.id}
          >
            <View style={styles.valueContainer}>
              <View style={styles.quantityContainer}>
                <View style={styles.valueContent}>
                  {gemCoinIcon(transaction.transactionCoin)}
                  <Quantity
                    value={transaction.units}
                    size="h5"
                    strong
                    prefix={valuePrefix}
                    suffix={valueSuffix(transaction.transactionCoin)}
                    style={styles.valueText}
                  />
                </View>
              </View>
              <Tooltip
                style={styles.tooltipStyle}
                text={getTooltipTextFromStatus(transaction.status)}
                variant={getTooltipVariantFromStatus(transaction.status)}
              />
            </View>
            <View style={styles.infoContainer}>
              <Typography variant="grey.600" size="body2" strong>
                {translate('coinDetail.gemCard.confirmation')}
              </Typography>
              <Typography size="body2" strong>
                {`${transaction.finishedTransactions}/${transaction.totalTransactions}`}
              </Typography>
            </View>
          </View>
        ))}
        <BottomAction
          hasMultipleTransactions
          isAllTransactionsSucceeded={isAllTransactionsSucceeded}
          paymentMethod={paymentMethod}
          theme={theme}
        />
      </Background>
    </View>
  );
};

export default observer(MultipleTransactions);
