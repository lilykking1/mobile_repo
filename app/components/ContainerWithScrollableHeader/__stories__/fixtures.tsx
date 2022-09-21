import React from 'react';
import { Alert, View } from 'react-native';

import {
  AssetsItem,
  Icon,
  List,
  News,
  NewsArticle,
  Quantity,
  ToggleIcons,
} from '@app/components';
import Action from '@app/screens/Dashboard/fragments/Action';
import { ActionType } from '@app/screens/Dashboard/types';

import Background from '@app/components/Background';
import styles from './styles';

const value = 10_543;

const press = (message: string) => {
  Alert.alert(message);
};

export const valueDisplayed = (
  <Quantity strong useValueLabel valueLabelVariant="normal" value={value} />
);

export const Right = (
  <Action
    onPress={() => press('Action pressed')}
    type={ActionType.SECRET}
    hasHorizontalSpace
  />
);

export const Left = (
  <View style={styles.actionsRow}>
    <ToggleIcons
      leftIcon={<Icon.Dollar />}
      rightIcon={<Icon.Bitcoin />}
      variant="default"
      onChange={() => press('Toggle pressed')}
    />
  </View>
);

const items = [
  {
    name: 'Ethereum',
    symbol: 'ETH',
    amountInDollar: '14384.19',
    amountInCrypto: '0.22',
  },
  {
    name: 'Cosmos',
    symbol: 'ATOM',
    amountInDollar: '1129.98',
    amountInCrypto: '10.73',
  },
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    amountInDollar: '10533.45',
    amountInCrypto: '0.025',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    amountInDollar: '14384.19',
    amountInCrypto: '0.22',
  },
  {
    name: 'Cosmos',
    symbol: 'ATOM',
    amountInDollar: '1129.98',
    amountInCrypto: '10.73',
  },
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    amountInDollar: '10533.45',
    amountInCrypto: '0.025',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    amountInDollar: '14384.19',
    amountInCrypto: '0.22',
  },
  {
    name: 'Cosmos',
    symbol: 'ATOM',
    amountInDollar: '1129.98',
    amountInCrypto: '10.73',
  },
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    amountInDollar: '10533.45',
    amountInCrypto: '0.025',
  },
];

const renderItem = ({ item }) => (
  <AssetsItem
    coin={item.symbol}
    fiatAmount={item.amountInDollar}
    coinAmount={item.amountInCrypto}
  />
);

export const ListComponent = (
  <List customStyle={styles.content} items={items} renderItem={renderItem} />
);

const newsArticles = [
  {
    iconURL: '',
    description:
      'Ethereum (ETH) Price Today: Price Consolidates Near $2,800, Sets Eye On 50 SMA',
    time: '4h ago',
    id: '1',
    url: '',
  },
  {
    iconURL: '',
    description: 'Crypto News, Feb. 14: Epic Fail as Coinbase Crashes',
    time: '4h ago',
    id: '1',
    url: '',
  },
  {
    iconURL: '',
    description: 'Property Backed By NFT Sells for First Time in U.S.',
    time: '5h ago',
    id: '1',
    url: '',
  },
  {
    iconURL: '',
    description:
      'Ethereum (ETH) Price Today: Price Consolidates Near $2,800, Sets Eye On 50 SMA',
    time: '4h ago',
    id: '1',
    url: '',
  },
  {
    iconURL: '',
    description: 'Crypto News, Feb. 14: Epic Fail as Coinbase Crashes',
    time: '4h ago',
    id: '1',
    url: '',
  },
  {
    iconURL: '',
    description: 'Property Backed By NFT Sells for First Time in U.S.',
    time: '5h ago',
    id: '1',
    url: '',
  },
];

const articlesRendered = newsArticles.map((article) => (
  <NewsArticle
    article={article}
    onSelect={() => Alert.alert(`You selected ${article.description}`)}
  />
));

export const NewsComponent = (
  <Background style={styles.content}>
    <News
      articles={articlesRendered}
      onHeaderSelect={() => press('News pressed')}
    />
  </Background>
);
