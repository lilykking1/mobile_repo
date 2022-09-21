import React from 'react';
import { EXCHANGES, EXCHANGE_TITLES } from '@app/models';
import { ExchangeIcon } from '@app/components';

export const data = [
  {
    icon: <ExchangeIcon exchange={EXCHANGES.KuCoin} />,
    label: EXCHANGE_TITLES.kucoin,
    value: 'ku',
  },
  {
    icon: <ExchangeIcon exchange={EXCHANGES.Binance} />,
    label: EXCHANGE_TITLES.binance,
    value: 'bi',
  },
  {
    icon: <ExchangeIcon exchange={EXCHANGES.Coinbase} />,
    label: EXCHANGE_TITLES.coinbase,
    value: 'coi',
  },
];
