import { ExchangesCarouselItemData } from '@app/components/ExchangesCarousel/types';
import { userExchangesApi } from '@app/mocks/UserExchanges';
import {
  WALLETS,
  EXOTIC_EXCHANGES,
  EXCHANGES,
  Asset,
  UserDepository,
  UserExchange,
  UserWallet,
} from '@app/models';
import { CardType } from '../types';

const isListAlreadyInOrder = (
  exchangeList: ExchangesCarouselItemData[]
): boolean => {
  const isFirstItemCorrect = exchangeList[0].type === CardType.ALL_ASSETS;
  const isSecondItemCorrect =
    exchangeList[1].type === CardType.WALLET &&
    exchangeList[1].title === WALLETS.StackedWallet;
  const isLastItemCorrect =
    exchangeList[exchangeList.length - 1].type === CardType.ALL_ASSETS;

  return isFirstItemCorrect && isSecondItemCorrect && isLastItemCorrect;
};

const reduceTotalAmount = (array: UserDepository[]): number =>
  array.reduce((amountSum, currentItem) => amountSum + currentItem.amount, 0);

const getTotalAmount = (
  exchanges: UserExchange[],
  wallets: UserWallet[]
): number => {
  const totalExchangesAmount = reduceTotalAmount(exchanges);
  const totalWalletsAmount = reduceTotalAmount(wallets);
  return totalExchangesAmount + totalWalletsAmount;
};

const reduceAllAssets = (array: UserDepository[]): Asset[] => {
  let allAssets: Asset[] = [];

  array.forEach((exchange) => (allAssets = [...allAssets, ...exchange.assets]));

  return allAssets;
};

const getAllAssets = (
  exchanges: UserExchange[],
  wallets: UserWallet[]
): Asset[] => {
  const allExchangesAssets = reduceAllAssets(exchanges);
  const allWalletsAssets = reduceAllAssets(wallets);
  return [...allWalletsAssets, ...allExchangesAssets];
};

const reduceAssetsSymbol = (array: UserDepository[]): string[] => {
  let allAssetsSymbol: string[] = [];

  array.forEach((exchange) => {
    const exchangeAssetSymbols = exchange.assets.map(
      (exchangeAssets) => exchangeAssets.symbol
    );

    return (allAssetsSymbol = [...allAssetsSymbol, ...exchangeAssetSymbols]);
  });

  return allAssetsSymbol;
};

const getAllAssetsSymbol = (
  exchanges: UserExchange[],
  wallets: UserWallet[]
): string[] => {
  const allExchangesAssetsSymbol = reduceAssetsSymbol(exchanges);
  const allWalletsAssetsSymbol = reduceAssetsSymbol(wallets);
  return [...allExchangesAssetsSymbol, ...allWalletsAssetsSymbol];
};

const getAllAssetsData = (
  exchanges: UserExchange[],
  wallets: UserWallet[]
): ExchangesCarouselItemData => {
  const amount = getTotalAmount(exchanges, wallets);
  const assets = getAllAssets(exchanges, wallets);
  const title = getAllAssetsSymbol(exchanges, wallets);

  return {
    amount: amount.toString(),
    type: CardType.ALL_ASSETS,
    title,
    assets,
  };
};

const getAddExchangeCardData = (): ExchangesCarouselItemData => ({
  type: CardType.ADD_EXCHANGE,
  assets: [],
});

const getCarouselSorted = (items: ExchangesCarouselItemData[]) => {
  if (isListAlreadyInOrder(items)) {
    return items;
  }

  let itemsSorted: ExchangesCarouselItemData[] = [];

  const allAssetsItemIndex = items.findIndex(
    (item) => item.type === CardType.ALL_ASSETS
  );
  itemsSorted[0] = items[allAssetsItemIndex];
  items.splice(allAssetsItemIndex, 1);

  const stackedWalletItemIndex = items.findIndex(
    (item) =>
      item.type === CardType.WALLET && item.title === WALLETS.StackedWallet
  );
  itemsSorted[1] = items[stackedWalletItemIndex];
  items.splice(stackedWalletItemIndex, 1);

  itemsSorted = [...itemsSorted, ...items];

  const addExchangeItem = getAddExchangeCardData();
  itemsSorted.push(addExchangeItem);

  return itemsSorted;
};

const removeExoticExchangesNotConnected = (
  items: ExchangesCarouselItemData[]
) => {
  const itemsWithoutExoticNotConnected = items.filter((item) => {
    const isExoticExchange = EXOTIC_EXCHANGES.includes(item.title as EXCHANGES);
    const isConnected = item.connected;

    if (isExoticExchange && !isConnected) {
      return false;
    }

    return true;
  });

  return itemsWithoutExoticNotConnected;
};

const mapExchangeItems = (
  exchanges: UserExchange[]
): ExchangesCarouselItemData[] =>
  exchanges.map((exchange) => ({
    amount: String(exchange.amount),
    assets: exchange.assets,
    connected: exchange.isConnected,
    hasWebProducts: exchange.hasWebProducts,
    title: exchange.name,
    type: CardType.EXCHANGE,
  }));

const mapWalletItems = (wallets: UserWallet[]): ExchangesCarouselItemData[] =>
  wallets.map((wallet) => ({
    amount: String(wallet.amount),
    assets: wallet.assets,
    configured: wallet.isConfigured,
    title: wallet.name,
    type: CardType.WALLET,
  }));

export const getCarouselItems = (): ExchangesCarouselItemData[] => {
  const { exchanges, wallets } = userExchangesApi.data;

  const allAssetsItem = getAllAssetsData(exchanges, wallets);

  const exchangeItems = mapExchangeItems(exchanges);
  const walletItems = mapWalletItems(wallets);

  const items = [allAssetsItem, ...walletItems, ...exchangeItems];
  const itemsWithoutExoticsNotConnected = removeExoticExchangesNotConnected(
    items
  );

  const itemsSorted = getCarouselSorted(itemsWithoutExoticsNotConnected);

  return itemsSorted;
};
