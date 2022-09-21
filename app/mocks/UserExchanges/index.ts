import {
  Asset,
  UserExchange,
  UserWallet,
  EXCHANGES,
  getCoinProperties,
  WALLETS,
} from '@app/models';
import { random } from 'lodash';

export const assets = [
  'atom',
  'btc',
  'eth',
  'fil',
  'sol',
  'uni',
  'usdt',
  'xrp',
];

export const assetsList: Asset[] = assets.map((asset) => {
  const coinProperties = getCoinProperties(asset);

  const fiatAmount = random(0, 10_000, true);
  const coinAmount = random(0, 30, true);

  return {
    name: coinProperties.name,
    symbol: asset,
    fiatAmount,
    coinAmount,
  };
});

const getRandomAssets = (start?: number, end?: number) => {
  const startIndexToUse = start || random(0, assetsList.length - 3, false);
  const endIndexToUse = end || startIndexToUse + 2;

  return assetsList.slice(startIndexToUse, endIndexToUse);
};

const getRandomWalletData = (): UserWallet => {
  const walletsArray = Object.keys(WALLETS);

  const randomIndex = random(walletsArray.length - 1, false);
  const randomWallet = walletsArray[randomIndex];

  const name = WALLETS[randomWallet];
  const isConfigured = random(1, false);
  const amount = random(0, 10_000, true);
  const randomAssets = getRandomAssets();

  return {
    name,
    amount,
    isConfigured: !!isConfigured,
    assets: isConfigured ? randomAssets : [],
  };
};

const getRandomExchangeData = (): UserExchange => {
  const exchangesArray = Object.keys(EXCHANGES);

  const randomIndex = random(exchangesArray.length - 1, false);
  const randomExchange = exchangesArray[randomIndex];

  const name = EXCHANGES[randomExchange];
  const isConnected = random(1, false);
  const amount = random(0, 10_000, true);
  const randomAssets = getRandomAssets();
  const hasWebProducts = random(1, false);

  return {
    name,
    amount,
    isConnected: !!isConnected,
    assets: isConnected ? randomAssets : [],
    hasWebProducts: !!hasWebProducts,
  };
};

export const userExchangesApi = {
  data: {
    wallets: [getRandomWalletData()],
    exchanges: [
      getRandomExchangeData(),
      getRandomExchangeData(),
      getRandomExchangeData(),
      getRandomExchangeData(),
    ],
  },
};
