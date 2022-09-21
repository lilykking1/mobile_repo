import { DEFAULT_SWAP_TO_COIN } from '../constants';
import {
  findCoinBySymbol,
  getSwapToCoin,
  getTheHighestHoldingCoin,
  getTheSecondHighestHoldingCoin,
} from '../utils';
import { coinsFirstScenario, coinsSecondScenario } from './mock';

const BITCOIN = 'BTC';
const ETHEREUM = 'ETH';
const DOGE_COIN = 'DOGE';
const UNKNOWN_COIN = 'UNKNOWN';

describe('SimpleSwap utility functions', () => {
  describe('Find coins by symbol function', () => {
    it('Should find bitcoin', () => {
      const searchResult = findCoinBySymbol(coinsFirstScenario, BITCOIN);
      expect(searchResult?.symbol).toBe(BITCOIN);
    });
    it('Should find ethereum', () => {
      const searchResult = findCoinBySymbol(coinsFirstScenario, ETHEREUM);
      expect(searchResult?.symbol).toBe(ETHEREUM);
    });
    it('Should find doge coin', () => {
      const searchResult = findCoinBySymbol(coinsFirstScenario, DOGE_COIN);
      expect(searchResult?.symbol).toBe(DOGE_COIN);
    });
    it('Should return undefined for a unknown coin', () => {
      const searchResult = findCoinBySymbol(coinsFirstScenario, UNKNOWN_COIN);
      expect(searchResult?.symbol).toBe(undefined);
    });
  });
  describe('Get the highest holding coin', () => {
    it('Should return highest holding coin', () => {
      const highestHoldingCoin = BITCOIN;
      const result = getTheHighestHoldingCoin(coinsFirstScenario);
      expect(result?.symbol).toBe(highestHoldingCoin);
    });
  });
  describe('Get the second highest holding coin', () => {
    it('Should return the second highest holding coin', () => {
      const secondHighestHoldingCoin = DOGE_COIN;
      const result = getTheSecondHighestHoldingCoin(coinsFirstScenario);
      expect(result?.symbol).toBe(secondHighestHoldingCoin);
    });
  });
  describe('Get swap to coin', () => {
    it('Should return the second highest holding coin when the highest holding coin is bitcoin', () => {
      const secondHighestHoldingCoin = DOGE_COIN;
      const result = getSwapToCoin(coinsFirstScenario);
      expect(result?.symbol).toBe(secondHighestHoldingCoin);
    });
    it('Should return bitcoin when the highest holding coin is not bitcoin', () => {
      const result = getSwapToCoin(coinsSecondScenario);
      expect(result?.symbol).toBe(DEFAULT_SWAP_TO_COIN);
    });
    it('Should return the highest holding coin when the selected coin to swap is bitcoin. (From Market Watch manage button)', () => {
      const highestHoldingCoin = DOGE_COIN;
      const result = getSwapToCoin(coinsSecondScenario, DEFAULT_SWAP_TO_COIN);
      expect(result?.symbol).toBe(highestHoldingCoin);
    });
    it('Should return the second holding coin when the selected coin to swap is bitcoin, and the highest holding coin is also bitcoin. (From Market Watch manage button)', () => {
      const secondHighestHoldingCoin = DOGE_COIN;
      const result = getSwapToCoin(coinsFirstScenario, DEFAULT_SWAP_TO_COIN);
      expect(result?.symbol).toBe(secondHighestHoldingCoin);
    });
  });
});
