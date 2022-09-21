import { palette } from '@app/theme';
import { DepositCoinData } from './types';
import { MOCKED_WALLET_ADDRESS } from '../PortfolioCryptoDeposit/mock';

export const COINS_OPTIONS_DATA = {
  bitcoin: {
    id: 'btc',
    value: 'Bitcoin',
    walletAddress: MOCKED_WALLET_ADDRESS,
  },
  usdt: {
    id: 'usdt',
    value: 'USDT',
  },
  usdc: {
    id: 'usdc',
    value: 'USDC',
  },
  ethereum: {
    id: 'eth',
    value: 'Ethereum',
  },
};

export const COINS_OPTIONS: DepositCoinData[] = [
  COINS_OPTIONS_DATA.bitcoin,
  COINS_OPTIONS_DATA.usdt,
  COINS_OPTIONS_DATA.usdc,
  COINS_OPTIONS_DATA.ethereum,
];

export const TABS_CONTAINER_DARK_COLOR = palette.royalBlue[1000];

export const DOLLAR_CHAR = '$';
