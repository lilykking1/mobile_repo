import React from 'react';
import { View, ViewStyle } from 'react-native';

import { Icon, AssetsEmptyState, Button } from '@app/components';
import { ExchangesCarouselItemData } from '@app/components/ExchangesCarousel/types';
import {
  EXCHANGES,
  EXCHANGE_TITLES,
  EXOTIC_EXCHANGES,
  STANDARD_EXCHANGES,
} from '@app/models';
import { Theme } from '@app/state/stores/settings/types';
import { palette } from '@app/theme';

import { translate, TxKeyPath } from '@app/i18n';

import {
  ExoticExchangeActions,
  StackedWalletActions,
  StandardExchangeActions,
} from '../fragments';
import { CardType } from '../types';
import styles from '../styles';
import {
  ADD_EXCHANGE_BUTTON,
  ADD_EXCHANGE_TEXT,
  BUY_CRYPTO_BUTTON_LABEL,
  DEPOSIT_BUTTON_LABEL,
  EXCHANGE_NOT_CONNECTED_BUTTON,
  EXCHANGE_NOT_CONNECTED_TEXT,
  WALLET_NOT_CONTIG_TEXT,
} from '../constants';

export const getListHeaderFromExchangeType = (
  selectedIndex: number,
  exchangeList: ExchangesCarouselItemData[]
): React.ReactElement => {
  const isFirstItemSelected = selectedIndex === 0;
  const isLastItemSelected = selectedIndex === exchangeList.length - 1;

  if (isFirstItemSelected || isLastItemSelected) {
    return null;
  }

  const exchangeSelected = exchangeList[selectedIndex];

  if (EXOTIC_EXCHANGES.includes(exchangeSelected.title as EXCHANGES)) {
    return <ExoticExchangeActions />;
  }

  if (STANDARD_EXCHANGES.includes(exchangeSelected.title as EXCHANGES)) {
    return (
      <StandardExchangeActions
        isLinkedToWebProduct={exchangeSelected?.hasWebProducts}
      />
    );
  }

  return <StackedWalletActions />;
};

export const getAssetsListHeader = (
  selectedIndex: number,
  exchangeList: ExchangesCarouselItemData[],
  selectedIsNotOnline?: boolean
): React.ReactElement => {
  if (!selectedIsNotOnline) {
    return null;
  }

  const header = getListHeaderFromExchangeType(selectedIndex, exchangeList);

  return header;
};

export const getIsOnline = (selected: ExchangesCarouselItemData): boolean => {
  const isExchange = selected.type === CardType.EXCHANGE;
  return isExchange ? selected?.connected : selected?.configured;
};

export const getButtonSecretIcon = (
  isPressed: boolean,
  theme: Theme
): React.ReactElement => {
  if (isPressed) {
    const tint =
      theme === 'light' ? palette.grey[300] : palette.royalBlue[1000];
    return <Icon.EyeClosed tint={tint} />;
  }

  return <Icon.EyeOpen tint={palette.grey[600]} />;
};

export const getButtonSecretStyle = (
  isValuesSecret: boolean,
  theme: Theme
): ViewStyle => {
  if (isValuesSecret) {
    return { backgroundColor: palette.grey[600] };
  }

  return {
    backgroundColor:
      theme === 'light' ? palette.grey[300] : palette.royalBlue[1000],
  };
};

const getEmptyMessage = (type: CardType) => {
  switch (type) {
    case CardType.WALLET:
      return WALLET_NOT_CONTIG_TEXT;
    case CardType.EXCHANGE:
      return EXCHANGE_NOT_CONNECTED_TEXT;
    default:
      return ADD_EXCHANGE_TEXT;
  }
};

const getButton = (label: TxKeyPath) => (
  <Button variant="primary" label={translate(label)} />
);

const getActions = (type: CardType) => {
  switch (type) {
    case CardType.WALLET:
      return (
        <View style={styles.walletButtonsView}>
          {getButton(DEPOSIT_BUTTON_LABEL)}
          <View style={styles.space} />
          {getButton(BUY_CRYPTO_BUTTON_LABEL)}
        </View>
      );
    case CardType.EXCHANGE:
      return getButton(EXCHANGE_NOT_CONNECTED_BUTTON);
    default:
      return getButton(ADD_EXCHANGE_BUTTON);
  }
};

export const getEmptyAssetView = (type: CardType): React.ReactElement => (
  <AssetsEmptyState
    title={translate(getEmptyMessage(type))}
    actions={getActions(type)}
  />
);

export const getTitleAction = (
  exchange: EXCHANGES | string | string[]
): string => EXCHANGE_TITLES[exchange as EXCHANGES];
