import { GetCoinsInfoDetailsQuery } from '@app/graphql/types/queries';
import { OptionIds } from '@app/modals/SortBy/types';
import { CoinInfo } from '@app/models';
import { getDecimalPlacesFromNumber } from '@app/utils/numbers';

export const filterCoinsByCoinAndName = (
  coins: GetCoinsInfoDetailsQuery['coinsInfo']['coins'],
  searchText: string
): GetCoinsInfoDetailsQuery['coinsInfo']['coins'] => {
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name?.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      coin.coin?.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
  return filteredCoins;
};

export const getCoinProp = (
  coin: CoinInfo,
  propName: string,
  isStatProp: boolean
): string | number => {
  let prop = isStatProp ? coin.stats[propName] : coin[propName];
  if (typeof prop === 'string') {
    prop = prop.toLowerCase();
  }

  return prop;
};

export const sortCoinsByProp = (
  a: CoinInfo,
  b: CoinInfo,
  propName: string,
  order: 'asc' | 'desc',
  isStatProp?: boolean
): number => {
  const isAscOrder = order === 'asc';

  const coinAPropValue = getCoinProp(a, propName, isStatProp);
  const coinBPropValue = getCoinProp(b, propName, isStatProp);

  if (coinAPropValue < coinBPropValue) {
    return isAscOrder ? -1 : 1;
  }

  if (coinAPropValue > coinBPropValue) {
    return isAscOrder ? 1 : -1;
  }

  return 0;
};

export const sortCoinsBySelectedOption = (
  a: CoinInfo,
  b: CoinInfo,
  selectedOption: OptionIds
): number => {
  switch (selectedOption) {
    case OptionIds.SORT_BY_NAME_DESC:
      return sortCoinsByProp(a, b, 'name', 'desc', false);
    case OptionIds.SORT_BY_PRICE_ASC:
      return sortCoinsByProp(a, b, 'price', 'asc', false);
    case OptionIds.SORT_BY_PRICE_DESC:
      return sortCoinsByProp(a, b, 'price', 'desc', false);
    case OptionIds.SORT_BY_VOLUME_ASC:
      return sortCoinsByProp(a, b, 'volume24h', 'asc', true);
    case OptionIds.SORT_BY_VOLUME_DESC:
      return sortCoinsByProp(a, b, 'volume24h', 'desc', true);
    case OptionIds.SORT_BY_MARKET_CAP_ASC:
      return sortCoinsByProp(a, b, 'marketcap', 'asc', true);
    case OptionIds.SORT_BY_MARKET_CAP_DESC:
      return sortCoinsByProp(a, b, 'marketcap', 'desc', true);
    default:
      return sortCoinsByProp(a, b, 'name', 'asc', false);
  }
};

export const getCurrencyPrecision = (price: number): number => {
  if (price > 1) {
    return 2;
  }

  const decimals = getDecimalPlacesFromNumber(price);
  if (decimals > 7) {
    return 7;
  }

  if (decimals < 2) {
    return 2;
  }

  return decimals;
};
