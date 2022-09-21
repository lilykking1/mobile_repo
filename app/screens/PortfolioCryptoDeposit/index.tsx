import React, { FC, useContext, useEffect, useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/core';
import Clipboard from '@react-native-clipboard/clipboard';
import { observer } from 'mobx-react';

import { SafeArea, StickyHeader } from '@app/components';
import type { DashboardRoutes, Routes } from '@app/navigation/types';
import { palette } from '@app/theme';
import { RootContext } from '@app/state';
import {
  AmplitudeManagedPortfolioEvents,
  logAmplitudeEvent,
} from '@app/utils/amplitude';

import {
  Title,
  Infos,
  WaitingIndicator,
  CryptoData,
  BackButton,
} from './fragments';
import { COINS_OPTIONS_DATA, EIGHT_SECONDS_IN_MS } from './contants';
import { generateWalletAddress } from './mock';
import { getWalletAddress } from './utils';

interface PortfolioCryptoDepositProps {
  route: {
    params: DashboardRoutes['PortfolioCryptoDeposit'];
  };
}

const PortfolioCryptoDeposit: FC<PortfolioCryptoDepositProps> = ({ route }) => {
  const { initialInvestment, isFunding } = route.params;

  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const navigation = useNavigation<NavigationProp<Routes>>();

  const [selectedCoinId, setSelectedCoinId] = useState(
    COINS_OPTIONS_DATA.bitcoin.id
  );

  const [selectedCoinWalletAddress, setSelectedCoinWalletAddress] = useState(
    ''
  );

  useEffect(() => {
    const selectedWalletAddress = getWalletAddress(selectedCoinId);
    setSelectedCoinWalletAddress(selectedWalletAddress);
  }, [selectedCoinId]);

  const handlePressCopyButton = () => {
    Clipboard.setString(selectedCoinWalletAddress);
  };

  const handleGenerateWalletAddress = () => {
    logAmplitudeEvent(AmplitudeManagedPortfolioEvents.CLICK_GENERATE_WALLET);
    if (!selectedCoinWalletAddress) {
      const addressGenerated = generateWalletAddress(selectedCoinId);
      setSelectedCoinWalletAddress(addressGenerated);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      // TODO Fix this
      navigation.navigate('ManagedPortfolio');
    }, EIGHT_SECONDS_IN_MS);
  });

  const isDarkTheme = theme === 'dark';

  return (
    <SafeArea altLight={palette.white}>
      <StickyHeader
        altLight={palette.white}
        BottomTitle={<Title />}
        Left={
          <BackButton isDarkTheme={isDarkTheme} onPress={navigation.goBack} />
        }
      />

      <CryptoData
        selectedCoinId={selectedCoinId}
        selectedCoinWalletAddress={selectedCoinWalletAddress}
        onChangeSelectedCoin={setSelectedCoinId}
        initialInvestment={initialInvestment}
        handlePressCopyButton={handlePressCopyButton}
        handleGenerateWalletAddress={handleGenerateWalletAddress}
        isFunding={isFunding}
      />

      <Infos
        selectedCoin={selectedCoinId.toUpperCase()}
        hasToGenerateAddress={!selectedCoinWalletAddress}
      />

      <WaitingIndicator />
    </SafeArea>
  );
};

export default observer(PortfolioCryptoDeposit);
