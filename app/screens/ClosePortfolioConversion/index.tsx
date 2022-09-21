import React, { useCallback, useContext, useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { observer } from 'mobx-react';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { RootContext } from '@app/state';
import {
  Background,
  IconButton,
  SafeArea,
  StickyHeader,
  Typography,
} from '@app/components';
import { translate } from '@app/i18n';
import { ErrorModal } from '@app/modals';
import {
  getCoinStacks,
  getPortfolioName,
  getTotalAmount,
} from '@app/mocks/Portfolio';
import type { RootRoutes, Routes } from '@app/navigation/types';
import { palette } from '@app/theme';
import type { CoinStackData } from '@app/models/Portfolio';
import useStickyHandler from '@app/hooks/useStickyHandler';
import { useBraze } from '@app/hooks';
import { BrazeManagedPortfolioModificationEvents } from '@app/utils/braze/events';
import { logAmplitudeEvent } from '@app/utils/amplitude';
import { AmplitudeManagedPortfolioEvents } from '@app/utils/amplitude/constants/managedPortfolio';
import { getCloseButtonIcon } from './utils';
import styles from './styles';
import { ConversionCard, ConvertedCoinDetails } from './fragments';
import { DEFAULT_COUNTDOWN_IN_SECONDS, TRANSACTION_ID } from './constants';

interface ClosePortfolioConversionProps {
  route: {
    params: RootRoutes['ClosePortfolioConversion'];
  };
}

const ClosePortfolioConversion = ({ route }: ClosePortfolioConversionProps) => {
  const { selectedCoin, walletAddress } = route.params;
  const {
    settingsStore: { theme },
    userStore: {
      setHasStartedManagedPortfolioSetup,
      setHasCompletedManagedPortfolioSetup,
    },
  } = useContext(RootContext);
  const { logBrazeCustomEvent } = useBraze();

  const [hasError, setHasError] = useState(false);
  const [portfolioCoinStacks] = useState<CoinStackData[]>(getCoinStacks());
  const totalAmount = useMemo(() => getTotalAmount(), []);

  const navigation = useNavigation<NavigationProp<Routes>>();

  const { scroll } = useStickyHandler(undefined);

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleClose = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleCancelClosing = () => {
    navigation.navigate('Dashboard');
  };

  const handleConfirmAndTransferAssets = async () => {
    logAmplitudeEvent(
      AmplitudeManagedPortfolioEvents.CLICK_CLOSE_PORTFOLIO_CONFIRM
    );

    try {
      // if there is no error in the API
      if (!hasError) {
        // TODO: Remove line from below once the API is implemented
        // throw new Error('Error from the api');
        setHasStartedManagedPortfolioSetup(false);
        setHasCompletedManagedPortfolioSetup(false);
        logBrazeCustomEvent(
          BrazeManagedPortfolioModificationEvents.CLOSE_CONFIRM
        );

        logBrazeCustomEvent(
          BrazeManagedPortfolioModificationEvents.CLOSE_CONFIRM
        );

        navigation.navigate('CloseManagedPortfolioSuccess', {
          selectedCoin: selectedCoin.toUpperCase(),
          walletAddress,
          transactionId: TRANSACTION_ID,
        });
      }
    } catch (err) {
      setHasError(true);
    }
  };

  const handleGoBack = () => {
    setHasError(false);
  };

  const handlePressCancelError = () => {
    logAmplitudeEvent(AmplitudeManagedPortfolioEvents.CLICK_ERROR_PAGE_CANCEL);
    handleGoBack();
  };

  const navBarRightButton = (
    <IconButton
      size="normal"
      onPress={handleClose}
      startIcon={getCloseButtonIcon(theme)}
    />
  );

  const headerTitle = (
    <Typography strong size="h6" style={styles.title}>
      {translate('screens.closePortfolioConversion.title')}
    </Typography>
  );

  return (
    <>
      <SafeArea
        altLight={palette.white}
        altDark={palette.royalBlue[950]}
        edges={['top']}
        style={styles.container}
      >
        <StickyHeader
          scroll={scroll}
          Title={headerTitle}
          Right={navBarRightButton}
          handleBackPress={handleBackPress}
          secondaryBackground
        />
        <ScrollView>
          <Background style={styles.contentContainer}>
            <Typography
              size="body1"
              variant="grey.600"
              style={styles.conversionWarningMessage}
            >
              {translate(
                'screens.closePortfolioConversion.conversionWarningMessage'
              )}
            </Typography>
            <ConversionCard
              fiatAmount={totalAmount}
              convertTo={selectedCoin}
              wallet={walletAddress}
              countdown={DEFAULT_COUNTDOWN_IN_SECONDS}
              onCancel={handleCancelClosing}
              onConfirm={handleConfirmAndTransferAssets}
              theme={theme}
            />
            <View style={styles.productListTitle}>
              <Typography strong size="h6">
                {translate('screens.closePortfolioConversion.productListTitle')}
              </Typography>
            </View>
            <View>
              {portfolioCoinStacks.map((coinStackData) => (
                <ConvertedCoinDetails
                  countdown={DEFAULT_COUNTDOWN_IN_SECONDS}
                  key={`${coinStackData.portfolioType}-${coinStackData.amount}`}
                  title={getPortfolioName(coinStackData.portfolioType)}
                  fiatAmount={coinStackData.amount}
                  conversionCoin={selectedCoin}
                  coins={coinStackData.coins}
                  style={styles.coinCard}
                />
              ))}
            </View>
          </Background>
        </ScrollView>
      </SafeArea>
      {hasError && (
        <ErrorModal
          headerTitle={translate(
            'screens.closePortfolioConversion.error.headerTitle'
          )}
          title={translate('screens.closePortfolioConversion.error.title')}
          subtitle=""
          primaryButtonText={translate(
            'screens.closePortfolioConversion.error.action.primary'
          )}
          secondaryButtonText={translate(
            'screens.closePortfolioConversion.error.action.secondary'
          )}
          primaryButtonAction={handleGoBack}
          secondaryButtonAction={handlePressCancelError}
        />
      )}
    </>
  );
};

export default observer(ClosePortfolioConversion);
