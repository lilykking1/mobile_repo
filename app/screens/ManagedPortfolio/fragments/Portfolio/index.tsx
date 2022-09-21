import React, { FC, useCallback } from 'react';
import { View } from 'react-native';
import {
  CoinStackCard,
  RiskAppetiteCard,
  StackedBarChart,
} from '@app/components';
import { translate } from '@app/i18n';
import {
  CoinStackData,
  PortfolioType,
  StackBarData,
} from '@app/models/Portfolio';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import type { Routes } from '@app/navigation/types';

import {
  getAccrualPercentage,
  getPortfolioName,
  getCoinStacksDetails,
  getCoinStacksTotalAmount,
  getPortfolioChange,
  isAssetsPortfolio,
  getPortfolioInternalGrids,
} from '@app/mocks/Portfolio';
import { PaletteColor } from '@app/theme';

import styles from './styles';
import { GAIN_CARD_SUBTITLE, LOSS_CARD_SUBTITLE } from './constants';

interface PortfolioProps {
  stackBarChartData: StackBarData[];
  coinStackCardsData: CoinStackData[];
}

const Portfolio: FC<PortfolioProps> = ({
  stackBarChartData,
  coinStackCardsData,
}) => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const handleOpenCoinsDetails = useCallback(
    (portfolioType: PortfolioType, color: PaletteColor) => {
      navigation.navigate('ManagedPortfolioDetails', {
        title: getPortfolioName(portfolioType),
        details: getCoinStacksDetails(portfolioType),
        totalAmount: getCoinStacksTotalAmount(portfolioType),
        portfolioChange: getPortfolioChange(portfolioType),
        accrualPercentage: getAccrualPercentage(portfolioType),
        isAssetsPortfolio: isAssetsPortfolio(portfolioType),
        useInternalGrid: getPortfolioInternalGrids(portfolioType),
        lineColor: color,
      });
    },
    [navigation]
  );

  return (
    <>
      <StackedBarChart data={stackBarChartData} style={styles.margin} />
      <View>
        {coinStackCardsData.map((coinStackData) => (
          <CoinStackCard
            key={`${coinStackData.portfolioType}-${coinStackData.amount}`}
            title={getPortfolioName(coinStackData.portfolioType)}
            amount={coinStackData.amount}
            percentage={coinStackData.percentage}
            coins={coinStackData.coins}
            color={coinStackData.color}
            onPress={() =>
              handleOpenCoinsDetails(
                coinStackData.portfolioType,
                coinStackData.color
              )}
            style={styles.margin}
          />
        ))}
      </View>
      <View style={styles.riskAppetiteContainer}>
        <RiskAppetiteCard
          lossCard={{
            subtitle: LOSS_CARD_SUBTITLE,
            percentage: 70,
          }}
          gainCard={{
            subtitle: GAIN_CARD_SUBTITLE,
            percentage: 140,
          }}
          leftTitle={translate('components.riskAppetiteCard.title')}
          rightTitle={translate('components.riskAppetiteCard.range')}
          risk={75}
        />
      </View>
    </>
  );
};

export default Portfolio;
