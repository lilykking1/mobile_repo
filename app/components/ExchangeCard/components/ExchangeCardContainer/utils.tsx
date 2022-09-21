import React from 'react';

import { ExchangeIcon, Logo } from '@app/components';
import { translate } from '@app/i18n';
import { EXCHANGES, EXCHANGE_TITLES } from '@app/models';
import { palette } from '@app/theme';

import styles from './styles';

export const getHeader = (
  exchange: EXCHANGES,
  isStackedWallet: boolean
): React.ReactNode => {
  if (isStackedWallet) {
    return <Logo variant="dark" compact width={50} style={styles.logo} />;
  }

  return <ExchangeIcon exchange={exchange} />;
};

export const getTitle = (
  exchange: EXCHANGES,
  isStackedWallet: boolean
): string => {
  if (isStackedWallet) {
    return translate('screens.dashboard.exchangeCards.stackedWallet');
  }

  return EXCHANGE_TITLES[exchange];
};

export const getValue = (
  amount: string,
  isOnline: boolean,
  stackedWallet: boolean
): string => {
  if (!isOnline) {
    const value = stackedWallet
      ? translate('exchanges.status.notConfigured')
      : translate('exchanges.status.notConnected');
    return value;
  }
  return amount;
};

export const getActionTint = (isDarkTheme: boolean): string =>
  isDarkTheme ? palette.royalBlue[400] : palette.royalBlue[500];
