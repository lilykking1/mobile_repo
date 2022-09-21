export const BITCOIN_VALUE = 0.000049;
// TODO: use the backend value to convert the value
export const convertFiatAmountToBitcoin = (fiatAmount: number): number =>
  fiatAmount * BITCOIN_VALUE;
