import { EXCHANGES, WALLETS, Exchange } from '@app/models';

export const getExchangesList = (
  exchanges: Partial<Record<EXCHANGES, Exchange>>
): string[] => {
  const exchangesAndWallets = Object.keys(WALLETS).concat(
    Object.keys(EXCHANGES)
  );
  const list = exchangesAndWallets.filter((key) => {
    const id = EXCHANGES[key];
    const exchange = exchanges[id];

    if (typeof exchange !== 'object') {
      return true;
    }

    return !exchange.connected;
  });

  // We check if the exchanges list contains Coinbase, if it contains
  // move the Exchange to the second position of the array
  if (list && list.includes('Coinbase')) {
    const fromIndex = list.indexOf('Coinbase');
    const toIndex = 1;
    const coinbaseElement = list.splice(fromIndex, 1)[0];

    list.splice(toIndex, 0, coinbaseElement);
  }

  return list;
};
