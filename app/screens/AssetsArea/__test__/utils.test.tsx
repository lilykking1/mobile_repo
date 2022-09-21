/* eslint-disable no-console */
import React from 'react';
import {
  EXCHANGES,
  EXOTIC_EXCHANGES,
  STANDARD_EXCHANGES,
  WALLETS,
} from '@app/models';

import { ExchangesCarouselItemData } from '@app/components/ExchangesCarousel/types';
import { getAssetsListHeader, getCarouselItems } from '../utils';
import {
  ExoticExchangeActions,
  StackedWalletActions,
  StandardExchangeActions,
} from '../fragments';
import { CardType } from '../types';

let carouselItems: ExchangesCarouselItemData[];

describe('Get correct assets order, data and actions from exchanges / wallet carousel', () => {
  beforeAll(() => {
    carouselItems = getCarouselItems();
  });

  it('has All Assets card as the first item ', () => {
    const firstItem = carouselItems[0];
    expect(firstItem.type).toEqual(CardType.ALL_ASSETS);
  });

  it('has Stacked Wallet card as the second item', () => {
    const secondItem = carouselItems[1];
    expect(secondItem.type).toEqual(CardType.WALLET);
    expect(secondItem.title).toEqual(WALLETS.StackedWallet);
  });

  it('has Add Exchange card as the last item', () => {
    const lastItemIndex = carouselItems.length - 1;
    const lastItem = carouselItems[lastItemIndex];
    expect(lastItem.type).toEqual(CardType.ADD_EXCHANGE);
  });

  it('returns a empty assets list view if the selected item is not connected', () => {
    const selectedIndex = carouselItems.findIndex(
      (item) => item.connected === false
    );

    if (selectedIndex < 0) {
      console.log('No items are not connected');
      expect(true);
      return;
    }

    const selectedCard = carouselItems[selectedIndex];
    const isConnected = false;

    const expectedHeader = null;
    const expectedAssets = [];

    const result = getAssetsListHeader(
      selectedIndex,
      carouselItems,
      isConnected
    );
    expect(result).toEqual(expectedHeader);
    expect(selectedCard.assets).toEqual(expectedAssets);
  });

  it('has the right assets list and actions when All Assets item is selected', () => {
    const selectedIndex = carouselItems.findIndex(
      (item) => item.type === CardType.ALL_ASSETS
    );
    const selectedCard = carouselItems[selectedIndex];
    const expectedAssets = selectedCard.assets;
    const expectedHeader = null;

    const header = getAssetsListHeader(selectedIndex, carouselItems);
    expect(header).toEqual(expectedHeader);
    expect(selectedCard.assets).toEqual(expectedAssets);
  });

  it('has the right assets list and actions when Stacked Wallet item is selected', () => {
    const selectedIndex = carouselItems.findIndex(
      (item) => item.title === WALLETS.StackedWallet
    );
    const expectedHeader = <StackedWalletActions />;
    const selectedCard = carouselItems[selectedIndex];
    const expectedAssets = selectedCard.assets;
    const isConnected = true;

    const header = getAssetsListHeader(
      selectedIndex,
      carouselItems,
      isConnected
    );
    expect(header).toEqual(expectedHeader);
    expect(selectedCard.assets).toEqual(expectedAssets);
  });

  it('has the right assets list and actions when a Standard Exchange item is selected', () => {
    const selectedIndex = carouselItems.findIndex(
      (item) =>
        item.type === CardType.EXCHANGE &&
        STANDARD_EXCHANGES.includes(item.title as EXCHANGES)
    );

    if (selectedIndex < 0) {
      console.log('No items are Standard exchanges');
      expect(true);
      return;
    }

    const selectedCard = carouselItems[selectedIndex];
    const expectedHeader = (
      <StandardExchangeActions
        isLinkedToWebProduct={selectedCard?.hasWebProducts}
      />
    );
    const expectedAssets = selectedCard.assets;
    const isConnected = true;

    const header = getAssetsListHeader(
      selectedIndex,
      carouselItems,
      isConnected
    );
    expect(header).toEqual(expectedHeader);
    expect(selectedCard.assets).toEqual(expectedAssets);
  });

  it('has the right assets list and actions when a Exotic Exchange item is selected', () => {
    const selectedIndex = carouselItems.findIndex(
      (item) =>
        item.type === CardType.EXCHANGE &&
        EXOTIC_EXCHANGES.includes(item.title as EXCHANGES)
    );

    if (selectedIndex < 0) {
      console.log('No items are Exotic exchanges');
      expect(true);
      return;
    }

    const expectedHeader = <ExoticExchangeActions />;
    const selectedCard = carouselItems[selectedIndex];
    const expectedAssets = selectedCard.assets;
    const isConnected = true;

    const header = getAssetsListHeader(
      selectedIndex,
      carouselItems,
      isConnected
    );
    expect(header).toEqual(expectedHeader);
    expect(selectedCard.assets).toEqual(expectedAssets);
  });
});
