import {
  RISKALYZE_ENDPOINT,
  RISKALYZE_CLIENT_ID,
  RISKALYZE_HOST,
  RISKALYZE_API_KEY,
} from '@env';

export const ENDPOINT = RISKALYZE_ENDPOINT;

const CREDENTIALS = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  client_id: RISKALYZE_CLIENT_ID,
  type: 'next_gen',
  ai: 719886545,
};

const HEADERS = {
  'Content-Type': 'application/json',
  Host: RISKALYZE_HOST,
  Authorization: RISKALYZE_API_KEY,
  'Content-Length': 74,
};

export const HEADER_OPTIONS: Record<string, unknown> = {
  method: 'POST',
  headers: HEADERS,
  body: JSON.stringify(CREDENTIALS),
};
