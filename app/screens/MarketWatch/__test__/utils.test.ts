import { OptionIds } from '@app/modals/SortBy/types';
import {
  filterCoinsByCoinAndName,
  getCurrencyPrecision,
  sortCoinsBySelectedOption,
} from '../utils';
import {
  sortedCoinsByMarketCapAsc,
  sortedCoinsByMarketCapDesc,
  sortedCoinsByNameAsc,
  sortedCoinsByNameDesc,
  sortedCoinsByPriceAsc,
  sortedCoinsByPriceDesc,
  sortedCoinsByVolumeAsc,
  sortedCoinsByVolumeDesc,
} from './constants';
import { coins } from './mock';

describe('Market Watch utility functions', () => {
  describe('Filter coins by coin and name', () => {
    it('should return an empty array when no results match with the input', () => {
      const input = 'ZXCVBNASDFG';
      const result = filterCoinsByCoinAndName(coins, input);
      expect(result).toEqual([]);
    });

    it('should return coins that match the name (Or if its a substring)', () => {
      let input = 'bi';
      let result = filterCoinsByCoinAndName(coins, input);
      expect(result).toEqual([
        {
          coin: 'BUSD',
          name: 'Binance USD',
          price: 1,
          stats: {
            change24h: 0.016994383309116814,
            marketcap: 17690918356.235317,
            volume24h: 240563890.59581703,
          },
        },
        {
          coin: 'BCH',
          name: 'Bitcoin Cash',
          price: 283.5,
          stats: {
            change24h: 0.9807362009099364,
            marketcap: 5395391237.285004,
            volume24h: 69146226.42759547,
          },
        },
      ]);

      input = 'ftx';
      result = filterCoinsByCoinAndName(coins, input);
      expect(result).toEqual([
        {
          coin: 'FTT',
          name: 'FTX Token',
          price: 39.371,
          stats: {
            change24h: 2.341860997040122,
            marketcap: 5375739748.061735,
            volume24h: 5298906.700667674,
          },
        },
      ]);
    });

    it('should return coins that match the coin text (Or if its a substring)', () => {
      let input = 'bus';
      let result = filterCoinsByCoinAndName(coins, input);
      expect(result).toEqual([
        {
          coin: 'BUSD',
          name: 'Binance USD',
          price: 1,
          stats: {
            change24h: 0.016994383309116814,
            marketcap: 17690918356.235317,
            volume24h: 240563890.59581703,
          },
        },
      ]);

      input = 'avax';
      result = filterCoinsByCoinAndName(coins, input);
      expect(result).toEqual([
        {
          coin: 'AVAX',
          name: 'Avalanche',
          price: 59.8545,
          stats: {
            change24h: 4.984522557319269,
            marketcap: 16147312202.666742,
            volume24h: 288261351.74015063,
          },
        },
      ]);

      input = 'DO';
      result = filterCoinsByCoinAndName(coins, input);
      expect(result).toEqual([
        {
          coin: 'DOGE',
          name: 'Dogecoin',
          price: 0.1305,
          stats: {
            change24h: 0.21731140548372258,
            marketcap: 17294579261.346603,
            volume24h: 217037935.55438936,
          },
        },
        {
          coin: 'DOT',
          name: 'Polkadot',
          price: 14.82,
          stats: {
            change24h: -1.0495712956131502,
            marketcap: 14595057375.016594,
            volume24h: 148586802.58896947,
          },
        },
      ]);
    });
  });

  describe('Sort coins', () => {
    it('should return a coin array sorted by name asc', () => {
      const result = coins.sort((a, b) =>
        sortCoinsBySelectedOption(a, b, OptionIds.SORT_BY_NAME_ASC)
      );
      expect(result).toEqual(sortedCoinsByNameAsc);
    });

    it('should return a coin array sorted by name desc', () => {
      const result = coins.sort((a, b) =>
        sortCoinsBySelectedOption(a, b, OptionIds.SORT_BY_NAME_DESC)
      );
      expect(result).toEqual(sortedCoinsByNameDesc);
    });

    it('should return a coin array sorted by market cap asc', () => {
      const result = coins.sort((a, b) =>
        sortCoinsBySelectedOption(a, b, OptionIds.SORT_BY_MARKET_CAP_ASC)
      );
      expect(result).toEqual(sortedCoinsByMarketCapAsc);
    });

    it('should return a coin array sorted by market cap desc', () => {
      const result = coins.sort((a, b) =>
        sortCoinsBySelectedOption(a, b, OptionIds.SORT_BY_MARKET_CAP_DESC)
      );
      expect(result).toEqual(sortedCoinsByMarketCapDesc);
    });

    it('should return a coin array sorted by price asc', () => {
      const result = coins.sort((a, b) =>
        sortCoinsBySelectedOption(a, b, OptionIds.SORT_BY_PRICE_ASC)
      );

      expect(result).toEqual(sortedCoinsByPriceAsc);
    });

    it('should return a coin array sorted by price desc', () => {
      const result = coins.sort((a, b) =>
        sortCoinsBySelectedOption(a, b, OptionIds.SORT_BY_PRICE_DESC)
      );
      expect(result).toEqual(sortedCoinsByPriceDesc);
    });

    it('should return a coin array sorted by 24h volume asc', () => {
      const result = coins.sort((a, b) =>
        sortCoinsBySelectedOption(a, b, OptionIds.SORT_BY_VOLUME_ASC)
      );
      expect(result).toEqual(sortedCoinsByVolumeAsc);
    });

    it('should return a coin array sorted by 24h volume desc', () => {
      const result = coins.sort((a, b) =>
        sortCoinsBySelectedOption(a, b, OptionIds.SORT_BY_VOLUME_DESC)
      );
      expect(result).toEqual(sortedCoinsByVolumeDesc);
    });
  });

  describe('Get currency precision for coin values', () => {
    it('should return 2 since the  decimals count is 0 and the value is greater than 1', () => {
      const value = 123;
      const result = getCurrencyPrecision(value);
      const expected = 2;
      expect(result).toEqual(expected);
    });

    it('should return 7 since the  decimals count is greater than 7 and the value is smaller than 1', () => {
      const value = 0.123456789;
      const result = getCurrencyPrecision(value);
      const expected = 7;
      expect(result).toEqual(expected);
    });

    it('should return 4 since the  decimals count is 4 and the value is smaller than 1', () => {
      const value = 0.1234;
      const result = getCurrencyPrecision(value);
      const expected = 4;
      expect(result).toEqual(expected);
    });

    it('should return 2 since the  decimals count is smaller than 2 and the value is greater than 1', () => {
      const value = 10.1;
      const result = getCurrencyPrecision(value);
      const expected = 2;
      expect(result).toEqual(expected);
    });

    it('should return 2 since the  decimals count is greater than 2 and the value is greater than 1', () => {
      const value = 10.1234;
      const result = getCurrencyPrecision(value);
      const expected = 2;
      expect(result).toEqual(expected);
    });
  });
});
