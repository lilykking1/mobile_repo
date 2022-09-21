import { gql } from '@apollo/client';

export const GET_COINS_INFO = gql`
  query CoinsInfo($limit: Int!, $page: Int!) {
    coinsInfo(limit: $limit, page: $page, sortBy: marketcap_desc) {
      count
      coins {
        name
        coin
        price
        stats {
          marketcap
          volume24h
          change24h
        }
      }
    }
  }
`;
