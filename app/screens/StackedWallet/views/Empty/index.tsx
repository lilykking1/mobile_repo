import React, { FC, useCallback, useContext } from 'react';
import { Image, View } from 'react-native';
import { translate } from '@app/i18n';
import { Button, SafeArea, Typography } from '@app/components';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { Routes } from '@app/navigation/types';
import { RootContext } from '@app/state';
import { getWalletImage } from '@app/screens/StackedWallet/views/Empty/utils';
import { BrazeBuildMyPortfolioEvents } from '@app/utils/braze/events';
import { useBraze } from '@app/hooks';
import { BrazeWalletEvents } from '@app/utils/braze/events/wallet';
import { observer } from 'mobx-react';
import KycRequiredModal from '@app/modals/KycRequired';
import useKycModal from '@app/hooks/useKycModal';
import {
  AmplitudeWalletEvents,
  AmplitudeManagedPortfolioEvents,
  logAmplitudeEvent,
} from '@app/utils/amplitude';
import { AmplitudeWalletProps } from '@app/utils/amplitude/constants/wallet/properties';
import styles from './styles';

const Empty: FC = () => {
  const { logBrazeCustomEvent } = useBraze();
  const navigation = useNavigation<NavigationProp<Routes>>();
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const {
    isKycRequired,
    isKycModalVisible,
    handleDisplayKycModal,
    handleDismissKycModal,
  } = useKycModal();

  const handleOnPressDeposit = useCallback(() => {
    // TODO Clicking on “Deposit” will initiate the deposit flow: APP-141
    const amplitudeData = {};
    amplitudeData[`${AmplitudeWalletProps.LOCATION}`] =
      AmplitudeWalletProps.WELCOME_SCREEN;
    logAmplitudeEvent(AmplitudeWalletEvents.DEPOSIT);
    logBrazeCustomEvent(BrazeWalletEvents.DEPOSIT);
    handleDisplayKycModal();
  }, [handleDisplayKycModal, logBrazeCustomEvent]);

  const navigateToMarket = useCallback(() => {
    navigation.navigate('Market');
  }, [navigation]);

  const handleOnPressBuy = useCallback(() => {
    // TODO If the user has not completed KYC with Stacked/Cognito, we will launch the KYC flow.
    const amplitudeData = {};
    amplitudeData[`${AmplitudeWalletProps.LOCATION}`] =
      AmplitudeWalletProps.WELCOME_SCREEN;
    logAmplitudeEvent(AmplitudeWalletEvents.BUY_CRYPTO);
    logBrazeCustomEvent(BrazeWalletEvents.BUY_CRYPTO);
    handleDismissKycModal(navigateToMarket);
  }, [handleDismissKycModal, navigateToMarket, logBrazeCustomEvent]);

  const handleCancel = useCallback(() => {
    handleDismissKycModal();
  }, [handleDismissKycModal]);

  const navigateToCognito = useCallback(() => {
    navigation.navigate('Cognito', {
      url:
        'https://flow-sandbox.cognitohq.com/verify/flwses_3PW8wan4yq1iNu?key=89981a88fdd0b39843de2da9909db495',
    });
  }, [navigation]);

  const handleSubmit = useCallback(() => {
    logBrazeCustomEvent(BrazeBuildMyPortfolioEvents.CLICK_PROCEED_TO_IDENTITY);
    logAmplitudeEvent(
      AmplitudeManagedPortfolioEvents.CLICK_PROCEED_TO_VERIFICATION
    );
    handleDismissKycModal(navigateToCognito);
  }, [handleDismissKycModal, logBrazeCustomEvent, navigateToCognito]);

  return (
    <SafeArea>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Typography strong size="h2">
            {translate('screens.stackedWallet.empty.title')}
          </Typography>
        </View>

        <Image
          accessibilityIgnoresInvertColors
          resizeMode="center"
          source={getWalletImage(theme)}
          style={styles.image}
        />

        <View style={styles.containerDescription}>
          <Typography strong size="h4" style={styles.description}>
            {translate('screens.stackedWallet.empty.description')}
          </Typography>
        </View>

        <View style={styles.containerButtons}>
          <Button
            style={styles.buttonDeposit}
            label={translate('screens.stackedWallet.empty.buttonDeposit')}
            onPress={handleOnPressDeposit}
          />
          <Button
            style={styles.buttonBuyCrypto}
            label={translate('screens.stackedWallet.empty.buttonBuy')}
            onPress={handleOnPressBuy}
          />
        </View>
      </View>
      <KycRequiredModal
        visible={isKycRequired && isKycModalVisible}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </SafeArea>
  );
};

export default observer(Empty);
