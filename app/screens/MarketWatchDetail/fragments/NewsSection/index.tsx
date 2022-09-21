import React, { FC, useCallback, useMemo } from 'react';
import NewsArticle from '@app/components/NewsArticle';
import News from '@app/components/News';
import { View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { Routes } from '@app/navigation/types';
import { Article } from '@app/models/Article';
import {
  AmplitudeMarketWatchEvents,
  logAmplitudeEvent,
} from '@app/utils/amplitude';
import { AmplitudeMarketWatchProps } from '@app/utils/amplitude/constants/marketWatch/properties';
import styles from './styles';
import { SCREEN_NAME } from './constants';

export interface NewsSectionProps {
  articles: Article[];
}

const NewsSection: FC<NewsSectionProps> = ({ articles = [] }) => {
  const navigation = useNavigation<NavigationProp<Routes>>();
  const handleSelect = useCallback(() => {
    navigation.navigate('News', { location: SCREEN_NAME });
  }, [navigation]);

  const handleArticleSelect = useCallback(
    (article: Article) => {
      const eventProperties = {};
      eventProperties[`${AmplitudeMarketWatchProps.LOCATION}`] =
        AmplitudeMarketWatchProps.NEWS_LOCATION_COINS_DETAILS;
      eventProperties[`${AmplitudeMarketWatchProps.ARTICLE_NAME}`] =
        article.description;

      logAmplitudeEvent(
        AmplitudeMarketWatchEvents.CLICK_NEWS_ARTICLE,
        eventProperties
      );

      navigation.navigate('NewsDetail', { url: article.url });
    },
    [navigation]
  );

  const articlesContent = useMemo(
    () =>
      articles.map((article: Article, index: number) => (
        <NewsArticle
          key={article.description}
          article={article}
          isLastItem={index === articles.length - 1}
          onSelect={() => handleArticleSelect(article)}
        />
      )),
    [articles, handleArticleSelect]
  );

  return (
    <View style={styles.container}>
      <News articles={articlesContent} onHeaderSelect={handleSelect} />
    </View>
  );
};

export default NewsSection;
