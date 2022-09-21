import { DepositCoinData } from './types';

// Added it here because in the mock.ts file it was getting undefined in the COINS_OPTIONS_DATA object
export const MOCKED_WALLET_ADDRESS =
  '18jeAW4QCa7qkMUcTpA2vLeFw3McTpA2vLeFw3M1wW';

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

export const BITCOIN_CHAR = '₿';
export const DOLLAR_CHAR = '$';
export const ETHEREUM_CHAR = 'Ξ';

export const EIGHT_SECONDS_IN_MS = 8000;
