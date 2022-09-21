import { paletteExchangesLight, paletteExchangesDark } from '@app/theme';

export enum EXCHANGES {
  AAX = 'aax',
  Binance = 'binance',
  BinanceFutures = 'binance-futures',
  // BinanceFuturesTestnet = 'binance-futures-testnet',
  Bitfinex = 'bitfinex',
  BitMEX = 'bitmex',
  // BitMEXTestnet = 'bitmex-testnet',
  ByBit = 'bybit',
  // ByBitTestnet = 'bybit-testnet',
  Coinbase = 'coinbase',
  FTX = 'ftx',
  FTXUS = 'ftx-us',
  KuCoin = 'kucoin',
  KuCoinFutures = 'kucoin-futures',
  // KuCoinTestnet = 'kucoin-testnet',
  Phemex = 'phemex',
  // PhemexTestnet = 'phemex-testnet',
}

/* 
  Exotic and Standard exchanges are labels to define what exchanges 
  should has certain integrations. See https://stackedinvest.atlassian.net/browse/APP-115
  for more info
*/
export const EXOTIC_EXCHANGES = [
  EXCHANGES.AAX,
  EXCHANGES.BinanceFutures,
  EXCHANGES.Bitfinex,
  EXCHANGES.BitMEX,
  EXCHANGES.ByBit,
  EXCHANGES.KuCoinFutures,
  EXCHANGES.Phemex,
];

export const STANDARD_EXCHANGES = [
  EXCHANGES.Binance,
  EXCHANGES.Coinbase,
  EXCHANGES.FTX,
  EXCHANGES.FTXUS,
  EXCHANGES.KuCoin,
];

export const EXCHANGE_TITLES = {
  [EXCHANGES.AAX]: 'AAX',
  [EXCHANGES.Binance]: 'Binance',
  [EXCHANGES.BinanceFutures]: 'Binance Futures',
  // [EXCHANGES.BinanceFuturesTestnet]: 'Binance Futures Testnet',
  [EXCHANGES.Bitfinex]: 'Bitfinex',
  [EXCHANGES.BitMEX]: 'BitMEX',
  // [EXCHANGES.BitMEXTestnet]: 'BitMEX Testnet',
  [EXCHANGES.ByBit]: 'ByBit',
  // [EXCHANGES.ByBitTestnet]: 'ByBit Testnet',
  [EXCHANGES.Coinbase]: 'Coinbase',
  [EXCHANGES.FTX]: 'FTX',
  [EXCHANGES.FTXUS]: 'FTX US',
  [EXCHANGES.KuCoin]: 'KuCoin',
  [EXCHANGES.KuCoinFutures]: 'KuCoin Futures',
  // [EXCHANGES.KuCoinTestnet]: 'KuCoin Testnet',
  [EXCHANGES.Phemex]: 'Phemex',
  // [EXCHANGES.PhemexTestnet]: 'Phemex Testnet',
};

export const EXCHANGE_COLORS = {
  [EXCHANGES.AAX]: {
    light: paletteExchangesLight.aax,
    dark: paletteExchangesDark.aax,
  },
  [EXCHANGES.Binance]: {
    light: paletteExchangesLight.binance,
    dark: paletteExchangesDark.binance,
  },
  [EXCHANGES.BinanceFutures]: {
    light: paletteExchangesLight.binanceFutures,
    dark: paletteExchangesDark.binanceFutures,
  },
  [EXCHANGES.Bitfinex]: {
    light: paletteExchangesLight.bitfinex,
    dark: paletteExchangesDark.bitfinex,
  },
  [EXCHANGES.BitMEX]: {
    light: paletteExchangesLight.bitMEX,
    dark: paletteExchangesDark.bitMEX,
  },
  [EXCHANGES.ByBit]: {
    light: paletteExchangesLight.byBit,
    dark: paletteExchangesDark.byBit,
  },
  [EXCHANGES.Coinbase]: {
    light: paletteExchangesLight.coinbase,
    dark: paletteExchangesDark.coinbase,
  },
  [EXCHANGES.FTX]: {
    light: paletteExchangesLight.ftx,
    dark: paletteExchangesDark.ftx,
  },
  [EXCHANGES.FTXUS]: {
    light: paletteExchangesLight.ftxUS,
    dark: paletteExchangesDark.ftxUS,
  },
  [EXCHANGES.KuCoin]: {
    light: paletteExchangesLight.kuCoin,
    dark: paletteExchangesDark.kuCoin,
  },
  [EXCHANGES.Phemex]: {
    light: paletteExchangesLight.phemex,
    dark: paletteExchangesDark.phemex,
  },
};

export const EXCHANGES_QUICK_CONNECT = [EXCHANGE_TITLES[EXCHANGES.Coinbase]];

interface ExchangeData {
  apiKey: string;
  secretKey: string;
  accountName: string;
  agreement: boolean;
  usage: number;
  balance: number;
  createdAt: Date;
  sso: boolean;
}

export interface Exchange {
  id: EXCHANGES;
  connected: boolean;
  data?: Partial<ExchangeData>;
}
