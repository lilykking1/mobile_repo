import { MarketWatchViewChoice } from './types';

export const getViewChoice = (usAllowed: boolean): MarketWatchViewChoice =>
  usAllowed ? MarketWatchViewChoice.US : MarketWatchViewChoice.ALL;
