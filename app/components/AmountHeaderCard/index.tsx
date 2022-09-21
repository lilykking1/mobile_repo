import React, { FC, useMemo, useContext } from 'react';
import { observer } from 'mobx-react';
import { View } from 'react-native';
import Svg from 'react-native-svg';
import {
  Background,
  Typography,
  Quantity,
  CryptoValueLabel,
  ExchangeIcon,
} from '@app/components';
import { RootContext } from '@app/state';
import { PAYMENT_METHOD, TRANSACTION_STATUS } from '@app/models/Transactions';
import { EXCHANGES } from '@app/models';
import { Grid } from '../LineChart/components';

import { getAmountHeaderTitle } from './utils';
import { GRID_LINES_HEIGHT } from './constants';
import styles from './styles';

interface AmountHeaderCardProps {
  fiatAmount: number;
  coinAmount: number;
  status: TRANSACTION_STATUS;
  paymentMethod: PAYMENT_METHOD;
}

const AmountHeaderCard: FC<AmountHeaderCardProps> = ({
  fiatAmount,
  status,
  paymentMethod,
  coinAmount,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const isDarkTheme = useMemo(() => theme === 'dark', [theme]);
  const isCryptoPayment = useMemo(
    () =>
      paymentMethod === PAYMENT_METHOD.CRYPTO ||
      paymentMethod === PAYMENT_METHOD.COINBASE,
    [paymentMethod]
  );
  const isCoinbasePayment = useMemo(
    () => paymentMethod === PAYMENT_METHOD.COINBASE,
    [paymentMethod]
  );

  const headerValues = getAmountHeaderTitle(
    paymentMethod,
    status,
    fiatAmount,
    coinAmount
  );

  const GridLinesView = (
    <View style={styles.absoluteLines}>
      <Svg style={styles.gridLines}>
        <Grid
          verticalPadding={0}
          isDarkTheme={isDarkTheme}
          height={GRID_LINES_HEIGHT}
        />
      </Svg>
    </View>
  );

  const Header = (
    <View style={styles.headerValues}>
      <View style={styles.titleContainer}>
        <Typography size="h6" strong>
          {headerValues.title}
        </Typography>
        {isCoinbasePayment && (
          <ExchangeIcon
            style={styles.coinbaseIcon}
            exchange={EXCHANGES.Coinbase}
            width={24}
            height={24}
          />
        )}
      </View>
      {isCryptoPayment ? (
        <>
          <CryptoValueLabel
            value={headerValues.amounts.firstValue.value}
            variant="large"
            coinPrefix={headerValues.amounts.firstValue.prefix}
          />
          <Quantity
            prefix={headerValues.amounts.secondValue.prefix}
            style={styles.smallAmount}
            value={headerValues.amounts.secondValue.value}
          />
        </>
      ) : (
        <>
          <Quantity
            strong
            prefix={headerValues.amounts.firstValue.prefix}
            value={headerValues.amounts.firstValue.value}
            useValueLabel
            valueLabelVariant="large"
          />
          <Quantity
            prefix={headerValues.amounts.secondValue.prefix}
            style={styles.smallAmount}
            value={headerValues.amounts.secondValue.value}
          />
        </>
      )}
      {GridLinesView}
    </View>
  );

  return (
    <Background secondary style={styles.container}>
      {Header}
    </Background>
  );
};

export default observer(AmountHeaderCard);
