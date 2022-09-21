import React, { FC, memo, useCallback, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { toUpper } from 'lodash';

import { Card, CoinIcon, Quantity, Typography } from '@app/components';
import { Routes } from '@app/navigation/types';
import { translate } from '@app/i18n';
import { CoinInfo } from '@app/models';
import { formatCoinCurrency } from '@app/utils/numbers';
import { useBraze } from '@app/hooks';
import {
  BrazeMarketWatchEvents,
  BrazeMarketWatchProps,
} from '@app/utils/braze/events/marketwatch';

import { MarketWatchCoinType } from '@app/screens/MarketWatch/fragments/MarketWatchCoinCard/types';
import { getViewChoice } from '@app/screens/MarketWatch/fragments/MarketWatchCoinCard/utils';
import {
  AmplitudeMarketWatchEvents,
  logAmplitudeEvent,
} from '@app/utils/amplitude';
import { AmplitudeMarketWatchProps } from '@app/utils/amplitude/constants/marketWatch/properties';
import styles from './styles';
import { getCurrencyPrecision } from '../../utils';

interface CoinRowProps {
  item: CoinInfo;
  usAllowed: boolean;
}

const CoinRow: FC<CoinRowProps> = ({ item, usAllowed }) => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const { coin, name, price, stats } = item;
  const { volume24h, change24h, marketcap } = stats;
  const { logBrazeCustomEvent } = useBraze();

  const handleMarketWatchDetailPress = useCallback(() => {
    const eventProperties = {};
    eventProperties[`${AmplitudeMarketWatchProps.COIN_TYPE}`] =
      MarketWatchCoinType.ALL;
    eventProperties[`${AmplitudeMarketWatchProps.VIEW_CHOICE}`] = getViewChoice(
      usAllowed
    );
    eventProperties[`${AmplitudeMarketWatchProps.COIN_NAME}`] = name;

    logAmplitudeEvent(AmplitudeMarketWatchEvents.CLICK_COIN, eventProperties);

    const data = {};
    data[`${BrazeMarketWatchProps.COIN_NAME}`] = coin;
    logBrazeCustomEvent(BrazeMarketWatchEvents.CLICK_COIN, data);

    navigation.navigate('MarketWatchDetail', {
      name,
      symbol: coin,
    });
  }, [usAllowed, name, coin, logBrazeCustomEvent, navigation]);

  const customPrecision = useMemo(() => getCurrencyPrecision(price), [price]);

  return (
    <TouchableOpacity onPress={handleMarketWatchDetailPress}>
      <Card style={styles.container}>
        <View>
          <CoinIcon style={styles.coinIcon} coin={coin} size={30} />
        </View>
        <View style={styles.data}>
          <View style={styles.column}>
            <View style={styles.symbolChangeRow}>
              <Typography
                variant="grey.600"
                style={styles.header}
                size="body2"
                strong
              >
                {toUpper(coin)}
              </Typography>
              <Quantity
                style={styles.change}
                accrual
                value={change24h}
                suffix="%"
                strong
                size="body2"
              />
            </View>
            <Quantity
              prefix="$"
              value={price}
              precision={customPrecision}
              strong
            />
          </View>
          <View style={styles.column}>
            <Typography
              variant="grey.600"
              style={styles.header}
              size="body2"
              strong
            >
              {translate('marketWatch.cap')}
            </Typography>
            <Quantity
              prefix="$"
              value={marketcap && formatCoinCurrency(marketcap)}
              strong
              precision={1}
            />
          </View>
          <View style={styles.column}>
            <Typography
              variant="grey.600"
              style={styles.header}
              size="body2"
              strong
            >
              {translate('marketWatch.vol')}
            </Typography>
            <Quantity
              prefix="$"
              value={(volume24h && formatCoinCurrency(volume24h)) || '-'}
              strong
              precision={1}
            />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default memo<typeof CoinRow>(CoinRow);
