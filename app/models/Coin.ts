import { coinIconSvgs } from '@app/assets/crypto-icons';
import { coinProperties } from '@app/assets/crypto-icons/properties';
import { coinSymbolFormatCheck } from '@app/utils/coinIcons';

import { DEFAULT_COIN_PROPERTIES } from './constants';
import { CoinProperties } from './types';

export type COINS_SVG = keyof typeof coinIconSvgs;

/**
 * Get the coins properties if they exist, if they dont will return empty strings and staked invest primary color
 * @param {string} coinSymbol coin symbol to get properties for
 * @returns --> { name: string, symbol: string, color: string(hex) }
 */
export const getCoinProperties = (coinSymbol: string): CoinProperties => {
  // pass the symbol through the format checker
  const properties = coinProperties.get(coinSymbolFormatCheck(coinSymbol));
  if (!properties) {
    return DEFAULT_COIN_PROPERTIES;
  }
  return properties;
};

// TODO: remove all COINS implementations, use getCoinProperties
export enum COINS {
  BTC = 'btc',
  FIL = 'fil',
  ETH = 'eth',
  SOL = 'sol',
  USDT = 'usdt',
  XRP = 'xrp',
  UNI = 'uni',
  ATOM = 'atom',
}

// TODO: remove all COINS_TITLES implementations, use getCoinProperties
export const COIN_TITLES = {
  [COINS.BTC]: 'Bitcoin',
  [COINS.FIL]: 'Filecoin',
  [COINS.ETH]: 'Ethereum',
  [COINS.SOL]: 'Solanan',
  [COINS.USDT]: 'Tether',
  [COINS.XRP]: 'XRP',
  [COINS.UNI]: 'Uniswap',
  [COINS.ATOM]: 'Cosmos',
};

export const COIN_COLORS = {
  [COINS.BTC]: '#e7973d',
  [COINS.FIL]: '#6cbfc8',
  [COINS.ETH]: '#697fe2',
  [COINS.SOL]: '#94f5a9',
  [COINS.USDT]: '#539e7d',
};

export interface CoinInfo {
  name?: string;
  coin?: string;
  price?: number;
  stats?: Stats;
}

interface Stats {
  marketcap?: number;
  volume24h?: number;
  change24h?: number;
}
