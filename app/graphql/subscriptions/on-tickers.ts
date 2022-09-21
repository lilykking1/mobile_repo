import { gql } from '@apollo/client';

export const onTickerPublished = gql`
  subscription onTickerPublished(
    $exchange: String!
    $symbols: [String]
    $coins: [String]
  ) {
    onTickerPublished(exchange: $exchange, symbols: $symbols, coins: $coins) {
      exchange
      symbol
      last
      lastBtc
      lastUsd
      percentage
    }
  }
`;

export default onTickerPublished;
