import React, { FC, useContext, useMemo } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { observer } from 'mobx-react';
import { RootContext } from '@app/state';
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
  getCardInfoLabels,
  getIsSuccessStatus,
  getTransactionTitle,
  getTooltipTextFromStatus,
  getTooltipVariantFromStatus,
  isBankPayment,
  isDarkMode,
  getTitleVariant,
} from '../../utils';
import { BottomAction, CongratulationsCard, RefreshButton } from '../index';

interface SingleTransactionProps extends ViewProps {
  paymentMethod: PAYMENT_METHOD;
  isTitleDark?: boolean;
  showCongratulationsCard?: boolean;
  transactionType: TRANSACTIONS_TYPES;
  coin: string;
  units: number | string;
  estimatedDepositDate: string;
  style?: ViewStyle;
  transaction: Transaction;
}

const SingleTransaction: FC<SingleTransactionProps> = ({
  paymentMethod,
  isTitleDark,
  showCongratulationsCard,
  transactionType,
  coin,
  units,
  estimatedDepositDate,
  style,
  transaction,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const gemCardContainerStyle = useMemo(
    (): ViewStyle[] => [styles.container, style],
    [style]
  );

  const GemCoinIcon = useMemo(() => {
    if (isBankPayment(paymentMethod)) {
      return <CoinIcon coin="usd" size={30} />;
    }
    return <CoinIcon coin={coin} size={30} />;
  }, [coin, paymentMethod]);

  const valuePrefix = useMemo(() => (isBankPayment(paymentMethod) ? '$' : ''), [
    paymentMethod,
  ]);

  const valueSuffix = useMemo(
    () => (isBankPayment(paymentMethod) ? '' : ` ${coin?.toUpperCase()}`),
    [coin, paymentMethod]
  );

  const isSuccessStatus = getIsSuccessStatus(transaction.status);
  const infoLabels = getCardInfoLabels(
    transaction.status,
    estimatedDepositDate
  );
  const titleStyle = getTitleVariant(isTitleDark);

  return (
    <View style={styles.fullContainer}>
      {isSuccessStatus && showCongratulationsCard && <CongratulationsCard />}
      <Background style={gemCardContainerStyle} secondary>
        <View style={styles.infoContainer}>
          <Typography
            altLight={titleStyle}
            altDark="secondary.400"
            size="buttons"
            strong
          >
            {getTransactionTitle(
              transactionType,
              paymentMethod,
              transaction.status
            )}
          </Typography>
          <Tooltip
            text={getTooltipTextFromStatus(transaction.status)}
            variant={getTooltipVariantFromStatus(transaction.status)}
          />
        </View>
        <View style={styles.valueContainer}>
          <View style={styles.valueContent}>
            {GemCoinIcon}
            <Quantity
              value={units}
              size="h5"
              strong
              prefix={valuePrefix}
              suffix={valueSuffix}
              style={styles.valueText}
            />
          </View>
          <RefreshButton
            isDarkMode={isDarkMode(theme)}
            status={transaction.status}
          />
        </View>

        <View style={styles.infoContainer}>
          <Typography variant="grey.600" size="body2" strong>
            {infoLabels.firstLabel}
          </Typography>
          <Typography size="body2" strong>
            {infoLabels.secondLabel}
          </Typography>
        </View>

        <BottomAction
          status={transaction.status}
          paymentMethod={paymentMethod}
          theme={theme}
        />
      </Background>
    </View>
  );
};

export default observer(SingleTransaction);
