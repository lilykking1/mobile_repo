import React, { FC, useCallback } from 'react';
import { View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { CoinStackCard, StackedBarChart, Typography } from '@app/components';
import { getPortfolioName } from '@app/mocks/Portfolio';
import { CoinStackData, StackBarData } from '@app/models/Portfolio';
import { translate } from '@app/i18n';
import { Routes } from '@app/navigation/types';

import styles from './styles';
import { COIN_STACK_PERCENTAGE_PRECISION } from './constants';
import { getCoinStackDetailsRoute } from './utils';

interface PortfolioCompositionAreaProps {
  stacksBarData: StackBarData[];
  stacksCardData: CoinStackData[];
}

const PortfolioCompositionArea: FC<PortfolioCompositionAreaProps> = ({
  stacksCardData,
  stacksBarData,
}) => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  // TODO: Add navigation to the actual screens when it's done, sending the needed data
  const handleNavigateToDetailsScreen = useCallback(
    (coinStackData: CoinStackData) => {
      const route = getCoinStackDetailsRoute(coinStackData.portfolioType);
      navigation.navigate(route, {
        coinStack: coinStackData,
      });
    },
    [navigation]
  );

  return (
    <>
      <Typography size="h6" strong style={styles.portolioComponsitionTitle}>
        {translate('screens.managedPortfolioSuccess.portfolioComposition')}
      </Typography>

      <StackedBarChart data={stacksBarData} style={styles.margin} />

      <View>
        {stacksCardData.map((coinStackData) => (
          <CoinStackCard
            key={`${coinStackData.portfolioType}-${coinStackData.amount}`}
            title={getPortfolioName(coinStackData.portfolioType)}
            amount={coinStackData.amount}
            percentage={coinStackData.percentage}
            coins={coinStackData.coins}
            color={coinStackData.color}
            onPress={() => handleNavigateToDetailsScreen(coinStackData)}
            style={[styles.cards, styles.margin]}
            reverseValuePositions
            percentagePrecision={COIN_STACK_PERCENTAGE_PRECISION}
          />
        ))}
      </View>
    </>
  );
};

export default PortfolioCompositionArea;
