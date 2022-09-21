export const DOLLAR_CHAR = '$';
export const PERCENTAGE_CHAR = '%';

export const aboveChars = {
  default: {
    prefix: DOLLAR_CHAR,
    suffix: undefined,
  },
  reverse: {
    prefix: undefined,
    suffix: PERCENTAGE_CHAR,
  },
};

export const bellowChars = {
  default: {
    prefix: undefined,
    suffix: PERCENTAGE_CHAR,
  },
  reverse: {
    prefix: DOLLAR_CHAR,
    suffix: undefined,
  },
};
