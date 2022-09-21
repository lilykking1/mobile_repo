import React, { FC, useContext, useEffect } from 'react';
import { Image, View } from 'react-native';
import { observer } from 'mobx-react';
import { SafeArea, StickyHeader, Typography } from '@app/components';
import { RootContext } from '@app/state';
import {
  PortfolioEthereum,
  PortfolioMoney,
  PortfolioStaking,
} from '@app/assets/images';
import { translate } from '@app/i18n';

import { Routes } from '@app/navigation/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RiskLoader } from '@app/assets/animations';
import LottieView from 'lottie-react-native';
import { EIGHT_SECONDS_IN_MS } from './constants';
import styles from './styles';
import { getImageByTheme } from './utils';

const ManagedPortfolioLoading: FC = () => {
  const {
    settingsStore: { theme },
    userStore: { hasCompletedManagedPortfolioSetup },
  } = useContext(RootContext);
  const navigation = useNavigation<NavigationProp<Routes>>();

  useEffect(
    () =>
      // It prevents to go back to the risklyze screen
      navigation.addListener('beforeRemove', (e) => {
        if (e.data.action.type === 'GO_BACK') {
          e.preventDefault();
        }
      }),
    [navigation]
  );

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ManagedPortfolioSuccess', {
        initialInvestment: 30000,
        defaultRisk: 75,
        isReassessment: hasCompletedManagedPortfolioSetup,
        newRisk: 81,
      });
    }, EIGHT_SECONDS_IN_MS);
  });

  const RenderTitle = (
    <Typography strong size="body1">
      {translate('screens.managedPortfolio.title')}
    </Typography>
  );

  const RenderImageCoins = (
    <View style={styles.imageCoinsContainer}>
      <View style={styles.coinsContainerFirst}>
        <Image
          accessibilityIgnoresInvertColors
          source={getImageByTheme(theme)}
        />
        <Image accessibilityIgnoresInvertColors source={PortfolioMoney} />
      </View>

      <View style={styles.coinsContainerSecond}>
        <Image
          style={styles.imageStaking}
          accessibilityIgnoresInvertColors
          source={PortfolioStaking}
        />
        <Image accessibilityIgnoresInvertColors source={PortfolioEthereum} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeArea>
        <StickyHeader Title={RenderTitle} />

        <View style={styles.contentContainer}>
          <View style={styles.lottieViewContainer}>
            <LottieView
              autoPlay
              loop
              source={RiskLoader}
              style={styles.lottieView}
            />
          </View>
          <Typography
            size="h2"
            altLight="secondary.800"
            altDark="white"
            style={styles.title}
          >
            {translate('screens.managedPortfolio.loading.title')}
          </Typography>

          <Typography
            size="body1"
            altLight="secondary.800"
            altDark="grey.600"
            style={styles.subtitle}
          >
            {translate('screens.managedPortfolio.loading.subtitle')}
          </Typography>

          {RenderImageCoins}
        </View>
      </SafeArea>
    </View>
  );
};

export default observer(ManagedPortfolioLoading);
