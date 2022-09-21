import React, { FC, useCallback, useMemo } from 'react';
import { View } from 'react-native';

import { Typography, Button, Quantity } from '@app/components';
import { translate } from '@app/i18n';
import { parseValue } from '@app/utils/numbers';

import { noop } from 'lodash';
import {
  AmplitudeMarketWatchEvents,
  logAmplitudeEvent,
} from '@app/utils/amplitude';
import styles from './styles';
import { DEFAULT_COIN_PRECISION } from './constants';

interface BuyBoxProps {
  coinName: string;
  coinAmount: number | undefined;
  fiatAmount: number | undefined;
  onBuy?: () => void;
  onManage?: () => void;
}

const BuyBox: FC<BuyBoxProps> = ({
  coinName,
  coinAmount = 0,
  fiatAmount = 0,
  onBuy = noop,
  onManage = noop,
}) => {
  const onPressHandleBuy = useCallback(() => {
    onBuy();
    logAmplitudeEvent(AmplitudeMarketWatchEvents.CLICK_COIN_DETAILS_BUY);
  }, [onBuy]);

  const onPressHandleManage = useCallback(() => {
    logAmplitudeEvent(AmplitudeMarketWatchEvents.CLICK_COIN_DETAILS_MANAGE);
    onManage();
  }, [onManage]);

  const amount = useMemo(
    () => `${parseValue(coinAmount, DEFAULT_COIN_PRECISION)} ${coinName}`,
    [coinAmount, coinName]
  );

  const manageButton = useMemo(
    () =>
      coinAmount > 0 && (
        <View style={styles.manageButton}>
          <Button
            label={translate('coinDetail.buybox.manage')}
            variant="secondary"
            size="large"
            onPress={onPressHandleManage}
          />
        </View>
      ),
    [coinAmount, onPressHandleManage]
  );

  return (
    <View>
      {coinAmount > 0 ? (
        <View style={styles.text}>
          <View style={styles.textSpacing}>
            <Typography size="body1">
              {translate('coinDetail.buybox.youHave')}
            </Typography>
          </View>
          <View style={styles.textSpacing}>
            <Typography size="body1" strong>
              {amount}
            </Typography>
          </View>
          <View style={styles.textSpacing}>
            <Quantity
              value={fiatAmount}
              prefix="$"
              size="body1"
              variant="grey.600"
              strong={false}
            />
          </View>
        </View>
      ) : (
        <View style={styles.emptySpace} />
      )}

      <View style={styles.buttons}>
        <View style={styles.buyButton}>
          <Button
            label={translate('coinDetail.buybox.buy')}
            variant="green"
            size="large"
            onPress={onPressHandleBuy}
          />
        </View>
        {manageButton}
      </View>
    </View>
  );
};

export default BuyBox;
