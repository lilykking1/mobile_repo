import React, { FC, memo, useCallback } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { CoinCard } from '@app/components';
import { Routes } from '@app/navigation/types';
import { CoinInfo } from '@app/models';
import { useBraze } from '@app/hooks';
import {
  BrazeMarketWatchEvents,
  BrazeMarketWatchProps,
} from '@app/utils/braze/events/marketwatch';
import {
  AmplitudeMarketWatchEvents,
  logAmplitudeEvent,
} from '@app/utils/amplitude';
import { AmplitudeMarketWatchProps } from '@app/utils/amplitude/constants/marketWatch/properties';
import { getViewChoice } from './utils';
import { MarketWatchCoinType } from './types';

interface CoinRowProps {
  item: CoinInfo;
  usAllowed: boolean;
  coinType: MarketWatchCoinType;
}

const MarketWatchCoinCard: FC<CoinRowProps> = ({
  item,
  usAllowed,
  coinType,
}) => {
  const navigation = useNavigation<NavigationProp<Routes>>();
  const { logBrazeCustomEvent } = useBraze();
  const { coin, name, price, stats } = item;
  const { change24h } = stats;

  const handlePress = useCallback(() => {
    const eventProperties = {};
    eventProperties[`${AmplitudeMarketWatchProps.COIN_TYPE}`] = coinType;
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
  }, [coinType, usAllowed, name, coin, logBrazeCustomEvent, navigation]);

  return (
    <CoinCard
      onPress={handlePress}
      coin={coin}
      percentage={change24h}
      value={price}
    />
  );
};

export default memo<typeof MarketWatchCoinCard>(MarketWatchCoinCard);
