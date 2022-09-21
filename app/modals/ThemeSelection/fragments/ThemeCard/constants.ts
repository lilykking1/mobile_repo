import { palette } from '@app/theme';
import Color from 'color';

export const BORDER_COLOR = 'transparent';
export const SHADOW_COLOR = Color(palette.black).alpha(0.25).toString();
export const SHADOW_DISTANCE = 4;
export const SHADOW_OFFSET: [x: string | number, y: string | number] = [0, 4];

export const TOTAL_AMOUNT = (101_034.97).toString();
export const ACCRUAL_VALUE = 1339;
export const PERCENTAGE_CHANGE = (6.31).toString();
export const COINS = [
  'usdt',
  'btc',
  'eth',
  'xrp',
  'bch',
  'sol',
  'uni',
  'usdt',
  'atom',
];
export const CHART_HEIGHT = 85;
export const CHART_WIDTH = 325;
export const CHART_DATA = [
  { time: 1, value: 5 },
  { time: 2, value: 4 },
  { time: 3, value: 5 },
  { time: 4, value: 4 },
  { time: 5, value: 6 },
  { time: 6, value: 7 },
  { time: 7, value: 10 },
  { time: 8, value: 8 },
  { time: 9, value: 9 },
  { time: 10, value: 7 },
  { time: 11, value: 7 },
  { time: 12, value: 8 },
  { time: 13, value: 7 },
  { time: 14, value: 9 },
  { time: 15, value: 7 },
  { time: 16, value: 6 },
  { time: 17, value: 5 },
  { time: 18, value: 7 },
  { time: 19, value: 9 },
];
