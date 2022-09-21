/* eslint-disable */
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Email: any;
  JSON: any;
  Upload: any;
  Void: any;
};

export type GetCoinsInfoDetailsQuery = {
  __typename?: 'Query';
  coinsInfo: {
    __typename?: 'CoinsInfoResponse';
    count: number;
    coins: Array<{
      __typename?: 'CoinInfo';
      name?: string | null | undefined;
      coin?: string | null | undefined;
      price?: number | null | undefined;
      slug?: string | null | undefined;
      details?: string | null | undefined;
      stats?:
        | {
            __typename?: 'CoinInfoStats';
            change24h?: number | null | undefined;
            volume24h?: number | null | undefined;
            marketcap?: number | null | undefined;
            liquidSupply?: number | null | undefined;
            liquidMarketcap?: number | null | undefined;
            circulationSupply?: number | null | undefined;
          }
        | null
        | undefined;
      priceStats?:
        | {
            __typename?: 'CoinInfoPriceStats';
            low1h?: number | null | undefined;
            low24h?: number | null | undefined;
            high1h?: number | null | undefined;
            high24h?: number | null | undefined;
            athUsd?: number | null | undefined;
            athDate?: number | null | undefined;
            cycleLowUsd?: number | null | undefined;
            cycleLowDate?: number | null | undefined;
          }
        | null
        | undefined;
      links?:
        | {
            __typename?: 'CoinInfoLinks';
            whitepaper?: string | null | undefined;
            github?: string | null | undefined;
            twitter?: string | null | undefined;
            telegram?: string | null | undefined;
            reddit?: string | null | undefined;
          }
        | null
        | undefined;
    }>;
  };
};

export enum CoinInfoSorting {
  AvailableForBuying = 'availableForBuying',
  Change24hAsc = 'change24h_asc',
  Change24hDesc = 'change24h_desc',
  CoinAsc = 'coin_asc',
  CoinDesc = 'coin_desc',
  MarketcapAsc = 'marketcap_asc',
  MarketcapDesc = 'marketcap_desc',
  PriceAsc = 'price_asc',
  PriceDesc = 'price_desc',
  Volume24hAsc = 'volume24h_asc',
  Volume24hDesc = 'volume24h_desc',
}

export type GetCoinsInfoQueryVariables = Exact<{
  coinFilter?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  usAllowed?: Maybe<Scalars['Boolean']>;
  sortBy?: Maybe<CoinInfoSorting>;
}>;
