import React, { FC, useCallback, useContext, useMemo } from 'react';
import { Image, View } from 'react-native';
import { observer } from 'mobx-react';
import { useBraze } from '@app/hooks';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { BrazeBuildMyPortfolioEvents } from '@app/utils/braze/events';

import { RiskCard } from '@app/assets/images';
import { Button, SafeArea, TextButton, Typography } from '@app/components';
import { translate } from '@app/i18n';
import { Routes } from '@app/navigation/types';
import { RootContext } from '@app/state';
import { logAppsFlyerEvent } from '@app/utils/appsflyer';
import { AppsFlyerPortfolioEvents } from '@app/utils/appsflyer/events';

import { AmplitudeAuthEvents, logAmplitudeEvent } from '@app/utils/amplitude';
import { getAmplitudeEvent } from '@app/utils/amplitude/constants/dashboard/events';
import { getBrazeEvent } from '@app/utils/braze/events/dashboard';

import styles from './styles';
import {
  getBackgroundImage,
  getPortfolioAction,
  getSubtitleMessage,
  getWatchVideoVariant,
} from './utils';
import { ManagedPortfolioStatus } from '../Dashboard/fragments/ManagedPortfolioCard/types';

const Welcome: FC = () => {
  const { logBrazeCustomEvent } = useBraze();
  const {
    settingsStore: { theme, isTwoFactorAuthEnabled },
    userStore: { hasStartedManagedPortfolioSetup },
  } = useContext(RootContext);

  const navigation = useNavigation<NavigationProp<Routes>>();

  const handleWatchVideo = useCallback(() => {}, []);

  const handleReviewPortfolio = useCallback(() => {
    const amplitudeEvent = getAmplitudeEvent(ManagedPortfolioStatus.CONFIGURED);
    logAmplitudeEvent(amplitudeEvent);
    const brazeEvent = getBrazeEvent(ManagedPortfolioStatus.CONFIGURED);
    logBrazeCustomEvent(brazeEvent);
    navigation.navigate('ManagedPortfolioSuccess', {
      initialInvestment: 30000,
      defaultRisk: 75,
      isReassessment: false,
    });
  }, [navigation, logBrazeCustomEvent]);

  const handleBuildPortfolio = useCallback(() => {
    logAmplitudeEvent(AmplitudeAuthEvents.CLICK_BUILD_PORTFOLIO);
    logAppsFlyerEvent(AppsFlyerPortfolioEvents.BUILD);
    logBrazeCustomEvent(BrazeBuildMyPortfolioEvents.CLICK_BUILD_PORTFOLIO);

    if (isTwoFactorAuthEnabled) {
      navigation.navigate('PreQualification');
    } else {
      navigation.navigate('TwoFactorConfiguration', {
        screen: 'TwoFactorConfigurationBlock',
      });
    }
  }, [isTwoFactorAuthEnabled, navigation, logBrazeCustomEvent]);

  const handleCryptoAction = useCallback(() => {
    navigation.navigate('Market');
    logAmplitudeEvent(AmplitudeAuthEvents.CLICK_BUY_CRYPTO_NOW);
    logBrazeCustomEvent(BrazeBuildMyPortfolioEvents.CLICK_BUY_CRYPTO_NOW);
  }, [navigation, logBrazeCustomEvent]);

  const watchVideoVariant = getWatchVideoVariant(theme);
  const subtitleMessage = useMemo(
    () => getSubtitleMessage(hasStartedManagedPortfolioSetup),
    [hasStartedManagedPortfolioSetup]
  );
  const portfolioAction = useMemo(
    () => getPortfolioAction(hasStartedManagedPortfolioSetup),
    [hasStartedManagedPortfolioSetup]
  );

  return (
    <SafeArea>
      <Image
        resizeMode="cover"
        source={getBackgroundImage(theme)}
        style={styles.backgroundImage}
        accessibilityIgnoresInvertColors
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              accessibilityIgnoresInvertColors
              source={RiskCard}
            />
          </View>

          <View style={styles.titleContainer}>
            <Typography
              size="h2"
              altLight="secondary.800"
              altDark="white"
              style={styles.title}
            >
              {translate('screens.welcome.title')}
            </Typography>
          </View>

          <View style={styles.subtitleContainer}>
            <Typography
              size="body1"
              altLight="secondary.800"
              altDark="grey.600"
              style={styles.subtitle}
            >
              {subtitleMessage}
            </Typography>
          </View>

          <View style={styles.videoButtonContainer}>
            <TextButton
              onPress={handleWatchVideo}
              variant={watchVideoVariant}
              label={translate('screens.welcome.watchVideo')}
            />
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <Button
            onPress={
              hasStartedManagedPortfolioSetup
                ? handleReviewPortfolio
                : handleBuildPortfolio
            }
            variant={portfolioAction.variant}
            label={portfolioAction.label}
          />

          <View style={styles.cryptoActionButtonContainer}>
            <Button
              onPress={handleCryptoAction}
              variant="secondary"
              label={translate('screens.welcome.cryptoAction')}
            />
          </View>
        </View>
      </View>
    </SafeArea>
  );
};

export default observer(Welcome);
