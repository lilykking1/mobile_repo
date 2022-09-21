import { palette } from '@app/theme';
import {
  BITCOIN_CHAR,
  COINS_OPTIONS_DATA,
  DOLLAR_CHAR,
  ETHEREUM_CHAR,
} from '../../contants';

export const COINS_PREFIX = {
  btc: BITCOIN_CHAR,
  usdt: DOLLAR_CHAR,
  usdc: DOLLAR_CHAR,
  eth: ETHEREUM_CHAR,
};

export const COINS_THAT_SHOW_FIAT_AMOUNT = [
  COINS_OPTIONS_DATA.usdt.id,
  COINS_OPTIONS_DATA.usdc.id,
];

export const TABS_CONTAINER_DARK_COLOR = palette.royalBlue[950];

export const BOX_BACKGROUND_COLOR = '#625FD7';
export const CONTAINER_FLEX_VALUE_WHEN_FUNDING = 1;
export const CONTAINER_FLEX_VALUE_WHEN_NOT_FUNDING = 1.5;

export const RANDOM_MOCKED_DIVISOR = 123;
