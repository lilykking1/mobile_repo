import { toUpper, isString } from 'lodash';

/**
 * checks if a coin symbol doesn't start with letter and adds leading udnerscore(_)
 * @param {string} coinSymbol coin symbol to check
 * @returns string | undefined
 */
export const coinSymbolFormatCheck = (
  coinSymbol: string
): string | undefined => {
  // assume it's invalid if it's not a string
  if (!isString(coinSymbol)) {
    return undefined;
  }

  // format if doesn't start with letter
  let newCoinString = toUpper(coinSymbol);
  const isValidName = newCoinString.charAt(0).match(/[a-z]/i);
  if (!isValidName) {
    newCoinString = `_${newCoinString}`;
  }
  return newCoinString;
};
