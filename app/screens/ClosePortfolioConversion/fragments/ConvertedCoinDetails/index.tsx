import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { ViewProps, View } from 'react-native';
import { isEmpty, noop } from 'lodash';
import { Card, CoinStack, Quantity, Typography } from '@app/components';
import { convertFiatAmountToBitcoin } from '@app/utils/coins';

import styles from './styles';
import {
  AMOUNT_DECIMAL_PLACES,
  DOLLAR_CHAR,
  MAX_DISPLAYED_COINS,
  ONE_SECOND_IN_MS,
  USD_SUFFIX,
} from './constants';
import { getCoinAmount, getDefaultLabel } from './utils';
import { COINS_OPTIONS_DATA } from '../../constants';

interface ConvertedCoinDetailsProps extends ViewProps {
  title: string;
  fiatAmount: string;
  conversionCoin: string;
  countdown: number;
  onCountdownFinish?: () => void;
  coins: string[];
}

const ConvertedCoinDetails: FC<ConvertedCoinDetailsProps> = ({
  title,
  fiatAmount,
  conversionCoin,
  coins,
  style,
  countdown,
  onCountdownFinish = noop,
}) => {
  const [timer, setTimer] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const timerInterval = useRef<ReturnType<typeof setInterval>>();

  const custom = useMemo(() => [styles.button, style], [style]);

  const currentLabel = useMemo(() => getDefaultLabel(timer), [timer]);

  const coinStack = useMemo(
    () =>
      isEmpty(coins) ? (
        <CoinStack.Empty size={24} />
      ) : (
        <CoinStack.Filled coins={coins} max={MAX_DISPLAYED_COINS} size={24} />
      ),
    [coins]
  );

  const coinAmount = useMemo(() => {
    if (conversionCoin.toLowerCase() === COINS_OPTIONS_DATA.usdc.id) {
      return fiatAmount;
    }
    return convertFiatAmountToBitcoin(Number(fiatAmount)).toFixed(
      AMOUNT_DECIMAL_PLACES
    );
  }, [conversionCoin, fiatAmount]);

  useEffect(() => {
    if (countdown) {
      setTimer(countdown);
      setIsCounting(true);
    }
  }, [countdown]);

  useEffect(() => {
    if (isCounting) {
      timerInterval.current = setInterval(() => {
        setTimer((lastTimerCount) => lastTimerCount - 1);
      }, ONE_SECOND_IN_MS);
    }
    return () => clearInterval(timerInterval.current);
  }, [isCounting]);

  useEffect(() => {
    if (timer === 0 && isCounting) {
      clearInterval(timerInterval.current);
      setIsCounting(false);
      if (onCountdownFinish) {
        onCountdownFinish();
      }
    }
  }, [timer, isCounting, onCountdownFinish]);

  const RightContainer = useMemo(
    () => (
      <View style={styles.rightContainer}>
        <Typography strong size="body1" style={styles.coinAmount}>
          {getCoinAmount(coinAmount, conversionCoin)}
        </Typography>
        <Quantity
          size="body2"
          variant="grey.600"
          value={fiatAmount}
          prefix={DOLLAR_CHAR}
          suffix={USD_SUFFIX}
          precision={2}
          style={styles.fiatAmount}
        />
        {timer > 0 && (
          <Typography size="body2" variant="grey.600" style={styles.fiatAmount}>
            {currentLabel}
          </Typography>
        )}
      </View>
    ),
    [fiatAmount, conversionCoin, currentLabel, timer, coinAmount]
  );

  return (
    <View style={custom}>
      <Card style={styles.card}>
        <View style={styles.leftContainer}>
          <Typography strong size="body1" style={styles.cardTitle}>
            {title}
          </Typography>
          {coinStack}
        </View>

        {RightContainer}
      </Card>
    </View>
  );
};

export default ConvertedCoinDetails;
