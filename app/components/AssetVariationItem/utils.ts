const CHANGE_PRECISION_LIMIT = 3_000;

export const getPrecisionValue = (value: number): number =>
  value <= CHANGE_PRECISION_LIMIT ? 3 : 2;
