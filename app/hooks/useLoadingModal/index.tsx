/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, createContext, useState, useMemo } from 'react';

import { LoadingModal } from '@app/components';
import { ContextValue } from './types';

const LoadingModalContext = createContext<ContextValue>(null);

export const LoadingModalProvider: FC = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const value: ContextValue = useMemo(
    () => ({
      open: () => setLoading(true),
      close: () => setLoading(false),
    }),
    []
  );

  return (
    <LoadingModalContext.Provider value={value}>
      {loading && <LoadingModal />}
      {children}
    </LoadingModalContext.Provider>
  );
};

export const useLoadingModal = (): ContextValue =>
  React.useContext<ContextValue>(LoadingModalContext);
