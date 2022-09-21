import React, { useEffect, useMemo, ReactElement } from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ApolloProvider } from '@apollo/client';

import { client } from '@app/graphql';
import '@app/utils/ignore-warnings';
import {
  AuthenticationProvider,
  ExchangeProvider,
  PasswordProvider,
} from '@app/temporary';
import Navigation from '@app/navigation';
import ErrorBoundary from '@app/screens/Error/ErrorBoundary';
import ToggleStorybook from '@story/ToggleStorybook';
import { RootContext, RootStore } from '@app/state';
import StatusBar from '@app/components/StatusBar';
import { initAmplitude } from '@app/utils/amplitude';
import { LoadingModalProvider, useBraze, WalletProvider } from './hooks';
import { revalidationToken } from './auth';
import { initAppsFlyer } from './utils/appsflyer';

const App = (): ReactElement => {
  const { initBraze } = useBraze();

  useEffect(() => {
    SplashScreen.hide();
    initAppsFlyer();
    initAmplitude();
    initBraze();
  }, [initBraze]);

  // mobx stores
  const rootStore = useMemo(() => new RootStore(), []);

  // apollo/graphql client
  const apolloClient = useMemo(
    () => client,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // revalidate user if they have a valid refresh token in storage, else logout
  useEffect(() => {
    const checkUserAuthentication = async () => {
      try {
        await revalidationToken();
      } catch {
        await rootStore.authStore.signOutUser();
      }
    };
    if (rootStore.authStore.isSignedIn) {
      checkUserAuthentication();
    }
  }, [rootStore.authStore]);

  return (
    <ErrorBoundary catchErrors="always">
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ToggleStorybook>
          <RootContext.Provider value={rootStore}>
            <ApolloProvider client={apolloClient}>
              <LoadingModalProvider>
                <AuthenticationProvider>
                  <PasswordProvider>
                    <ExchangeProvider>
                      <WalletProvider>
                        <BottomSheetModalProvider>
                          <StatusBar />
                          <Navigation />
                        </BottomSheetModalProvider>
                      </WalletProvider>
                    </ExchangeProvider>
                  </PasswordProvider>
                </AuthenticationProvider>
              </LoadingModalProvider>
            </ApolloProvider>
          </RootContext.Provider>
        </ToggleStorybook>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
};

export default App;
