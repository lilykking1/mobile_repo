import Color from 'color';

export const paletteColors = {
  transparent: 'transparent',
  green: {
    200: '#5DAF61',
    400: '#77C47A',
    500: '#5EAF61',
    600: '#428C45',
  },
  grey: {
    200: '#F1F3F5',
    300: '#F5F6FA',
    400: '#E9ECF8',
    500: '#CED2E5',
    600: '#878EB0',
    650: '#6C7082',
    700: '#4A4E64',
  },
  red: {
    200: '#FCEFEE',
    400: '#F1746A',
    500: '#E05A4F',
    600: '#B73B30',
  },
  royalBlue: {
    200: '#DBDBF9',
    400: '#6060FF',
    500: '#4A4AE2',
    600: '#2E2EC5',
    700: '#1877F2',
    800: '#403E9F',
    900: '#2F3158',
    950: '#28294A',
    1000: '#1C1D33',
  },
  yellow: {
    200: '#EC902426',
    400: '#FFB55E',
    500: '#FBA643',
    600: '#EC9024',
  },
  white: '#FFFFFF',
};

export const paletteExchangesLight = {
  aax: '#E9F2FB',
  binance: '#FBF5E6',
  binanceFutures: '#FBF1E6',
  bitfinex: '#EEFADE',
  bitMEX: '#FAEDEF',
  byBit: '#FAF7E1',
  coinbase: '#E6ECFA',
  ftx: '#E6F8FA',
  ftxUS: '#E6FAFA',
  kuCoin: '#E3FAF2',
  phemex: '#EDF2FA',
};
const EXCHANGE_COLOR_DARK_ALPHA = 0.15;
export const paletteExchangesDark = {
  aax: Color('#6CAFFB').alpha(EXCHANGE_COLOR_DARK_ALPHA).toString(),
  binance: Color('#FBD269').alpha(EXCHANGE_COLOR_DARK_ALPHA).toString(),
  binanceFutures: Color('#FBB969').alpha(EXCHANGE_COLOR_DARK_ALPHA).toString(),
  bitfinex: Color('#BAFA61').alpha(EXCHANGE_COLOR_DARK_ALPHA).toString(),
  bitMEX: Color('#FA576F').alpha(EXCHANGE_COLOR_DARK_ALPHA).toString(),
  byBit: Color('#FAEB64').alpha(EXCHANGE_COLOR_DARK_ALPHA).toString(),
  coinbase: Color('#6992FA').alpha(EXCHANGE_COLOR_DARK_ALPHA).toString(),
  ftx: Color('#69EEFA').alpha(EXCHANGE_COLOR_DARK_ALPHA).toString(),
  ftxUS: Color('#69FAFA').alpha(EXCHANGE_COLOR_DARK_ALPHA).toString(),
  kuCoin: Color('#66FAC9').alpha(EXCHANGE_COLOR_DARK_ALPHA).toString(),
  phemex: Color('#70A4FA').alpha(EXCHANGE_COLOR_DARK_ALPHA).toString(),
};

export const paletteDefaults = {
  black: '#000000',
  danger: paletteColors.red[500],
  primary: paletteColors.royalBlue[500],
  secondary: paletteColors.grey[600],
  success: paletteColors.green[500],
  warning: paletteColors.yellow[500],
  white: '#FFFFFF',
};

// ================= //
//
//    ▼ LEGACY ▼
//
// ================= //

export const paletteLegacy = {
  // White tones
  white: '#FFFFFF',
  whiteZircon: '#F5F6FA',
  whiteWhisper: '#F4F3F8',

  // Grey tones
  greyPorcelain: '#F0F2F6',
  greyTitan: '#E9ECF8',
  greyWaterloo: '#D9DBE7',
  greyGhost: '#CED2E5',
  greySmoke: '#8C8EAA',
  greyAmethyst: '#878EB0',
  silverMischka: '#D9D6E1',

  // Purple tones
  purpleLavender: '#E6E6FB',
  purplePerfume: '#C6C4FA',
  purpleRoyal: '#8282FF',
  purplePersian: '#4A4AE2',
  purpleCobalt: '#403E9F',
  purpleMartinique: '#3C3463',
  purpleZodiac: '#2F3158',

  // Blue tones
  blueMalibu: '#7CB7F3',

  // Red tones
  redShilo: '#F6C0C1',
  redValencia: '#E05A4F',

  // Green tones
  greenTurquoise: '#65CCBF',
  greenLeaf: '#C4E7CA',
  greenMantis: '#5EAF61',
  greeenShark: '#272C29',

  // Yellow tones
  yellowTexas: '#FBA643',
  yellowSun: '#FFF3E6',

  // Black tones
  // black: '#000000',
};

// - - - - - - - - - - - - - //
//  Keep the legacy palette
//  until all legacy work is
//  is phased out.
// - - - - - - - - - - - - - //
export const palette = {
  ...paletteLegacy,
  ...paletteColors,
  ...paletteDefaults,
};

export type Palette = typeof palette;
export type PaletteKey = keyof Palette;
export type PaletteColor = Palette[PaletteKey];
