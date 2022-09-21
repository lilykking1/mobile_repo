import { walletData } from '@app/mocks/StackedWallet';
import React, { FC, createContext, useCallback } from 'react';

import { ContextValue } from './types';
import { findCoinBySymbolOnTheUserWallet } from './utils';

const WalletContext = createContext<ContextValue>(null);

export const WalletProvider: FC = ({ children }) => {
  const wallet = walletData;
  const getCoinBySymbol = useCallback(
    (symbol: string) => {
      const coin = findCoinBySymbolOnTheUserWallet(wallet, symbol);
      return coin;
    },
    [wallet]
  );
  return (
    <WalletContext.Provider value={{ wallet, getCoinBySymbol }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = (): ContextValue =>
  React.useContext<ContextValue>(WalletContext);
