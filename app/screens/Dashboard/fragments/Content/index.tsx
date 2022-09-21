import React, { FC, useCallback, useMemo, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import News from '@app/components/News';
import NewsArticle from '@app/components/NewsArticle';
import { Article } from '@app/models/Article';
import { getCoinNews } from '@app/mocks/CoinNews';
import { Routes } from '@app/navigation/types';
import { Background } from '@app/components';

import { logAmplitudeEvent } from '@app/utils/amplitude';
import { AmplitudeDashboardProps } from '@app/utils/amplitude/constants/dashboard/properties';
import { AmplitudeDashboardEvents } from '@app/utils/amplitude/constants/dashboard/events';
import {
  ManagedPortfolioCard,
  ReviewNewPortfolioCard,
  SelfDirectedCard,
} from '..';
import { managedPortfolioData, selfDirectedData } from '../../mock';

import styles from './styles';
import { SCREEN_NAME } from './constants';

interface ContentProps {
  isValuesInBitcoin: boolean;
  isValuesSecret: boolean;
  suffixValue?: string;
  prefixValue?: string;
  newPortfolioToReview?: {
    initialInvestment: number;
    defaultRisk: number;
    newRisk: number;
  };
  newRealocatedPortfolio?: {
    defaultRisk: number;
    newRisk: number;
  };
}

const Content: FC<ContentProps> = ({
  isValuesInBitcoin,
  isValuesSecret,
  suffixValue,
  prefixValue,
  newPortfolioToReview,
  newRealocatedPortfolio,
}) => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const [newsList] = useState<Article[]>(getCoinNews(7));

  const handleNewsSelect = useCallback(() => {
    navigation.navigate('News', { location: SCREEN_NAME });
  }, [navigation]);

  const handleArticleSelect = useCallback(
    (article: Article) => {
      const eventProperties = {
        location: AmplitudeDashboardProps.NEWS_LOCATION_DASHBOARD,
        article_name: article.description,
      };
      logAmplitudeEvent(
        AmplitudeDashboardEvents.CLICK_NEWS_ARTICLE,
        eventProperties
      );

      navigation.navigate('NewsDetail', { url: article.url });
    },
    [navigation]
  );

  const articlesComponents = useMemo(
    () =>
      newsList.map((article: Article) => (
        <NewsArticle
          key={article.description}
          article={article}
          onSelect={() => handleArticleSelect(article)}
        />
      )),
    [handleArticleSelect, newsList]
  );

  return (
    <Background style={styles.content}>
      <SelfDirectedCard
        isValuesSecret={isValuesSecret}
        isValuesInBitcoin={isValuesInBitcoin}
        prefixValues={prefixValue}
        suffixValues={suffixValue}
        value={selfDirectedData.totalInvested}
        coins={selfDirectedData.coins}
        accrualValue={selfDirectedData.accrualValue}
        accrualChange={selfDirectedData.percentChange}
      />
      <ManagedPortfolioCard
        isValuesSecret={isValuesSecret}
        isValuesInBitcoin={isValuesInBitcoin}
        prefixValues={prefixValue}
        suffixValues={suffixValue}
        value={managedPortfolioData.totalInvested}
        accrualValue={managedPortfolioData.accrualValue}
        accrualChange={managedPortfolioData.percentChange}
        chartData={managedPortfolioData.chartData}
        newRealocatedPortfolio={newRealocatedPortfolio}
      />
      {newPortfolioToReview && (
        <ReviewNewPortfolioCard newPortfolioToReview={newPortfolioToReview} />
      )}
      <News articles={articlesComponents} onHeaderSelect={handleNewsSelect} />
    </Background>
  );
};

export default Content;
