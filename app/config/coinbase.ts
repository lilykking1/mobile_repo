import { CoinbaseConfiguration } from '@app/screens/Coinbase/types';
import { COINBASE_AUTH_URL, COINBASE_CLIENT_ID } from '@env';

const coinbaseConfig: CoinbaseConfiguration = {
  responseType: 'code',
  clientId: COINBASE_CLIENT_ID,
};

const defaultCoinbaseConfig = `response_type=${coinbaseConfig.responseType}&client_id=${coinbaseConfig.clientId}`;

export const coinbaseUrl = `${COINBASE_AUTH_URL}?${defaultCoinbaseConfig}`;
