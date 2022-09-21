import { palette } from '@app/theme';
import { DepositCoinData } from './types';
import { height } from './styles';

export const COINS_OPTIONS_DATA = {
  btc: {
    id: 'btc',
    value: 'BTC',
  },
  usdc: {
    id: 'usdc',
    value: 'USDC',
  },
};

export const COINS_OPTIONS: DepositCoinData[] = [
  COINS_OPTIONS_DATA.btc,
  COINS_OPTIONS_DATA.usdc,
];

export const BITCOIN_CHAR = '₿';
export const DOLLAR_CHAR = '$';
export const ETHEREUM_CHAR = 'Ξ';

export const TABS_CONTAINER_DARK_COLOR = palette.royalBlue[950];
export const KEYBOARD_AVOIDING_VIEW_OFFSET = height - 700;
