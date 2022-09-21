import { FC } from 'react';

import { EXCHANGES, WALLETS } from '@app/models';

import {
  AAX,
  Binance,
  Bitfinex,
  BitMEX,
  ByBit,
  Coinbase,
  FTX,
  FTXUS,
  KuCoin,
  Phemex,
  StackedWallet,
  Unlisted,
} from './components';
import { IconProps } from './types';

export const getExchangeIcon = (
  exchange: EXCHANGES | WALLETS
): FC<IconProps> => {
  switch (exchange) {
    case EXCHANGES.AAX:
      return AAX;

    case EXCHANGES.Binance:
    case EXCHANGES.BinanceFutures:
      return Binance;

    case EXCHANGES.Bitfinex:
      return Bitfinex;

    case EXCHANGES.BitMEX:
      return BitMEX;

    case EXCHANGES.ByBit:
      return ByBit;

    case EXCHANGES.Coinbase:
      return Coinbase;

    case EXCHANGES.FTX:
      return FTX;

    case EXCHANGES.FTXUS:
      return FTXUS;

    case EXCHANGES.KuCoin:
    case EXCHANGES.KuCoinFutures:
      return KuCoin;

    case EXCHANGES.Phemex:
      return Phemex;

    case WALLETS.StackedWallet:
      return StackedWallet;

    default:
      return Unlisted;
  }
};
