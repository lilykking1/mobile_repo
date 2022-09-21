import { BITCOIN_CHAR, DOLLAR_CHAR, COINS_OPTIONS_DATA } from './constants';
import { BTC_AMOUNT } from './mock';

export const getLabelConversionAmount = (
  selectedTab: string,
  totalAmount: string
): string => {
  if (selectedTab === COINS_OPTIONS_DATA.btc.id) {
    return `${BITCOIN_CHAR}${BTC_AMOUNT}`;
  }
  return `${DOLLAR_CHAR}${totalAmount}`;
};
