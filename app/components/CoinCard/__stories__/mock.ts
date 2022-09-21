import { random } from 'lodash';

import { COINS } from '@app/models';

export const coins = Object.keys(COINS);
export const data = coins.map((coin, idx) => ({
  coin: COINS[coin],
  coinValue: (idx + 1) * 123.45,
  key: idx,
  percentage: random(-20.001, 20.001),
}));
