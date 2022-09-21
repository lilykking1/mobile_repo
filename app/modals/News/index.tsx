import React, { FC, useCallback, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { RootRoutes, Routes } from '@app/navigation/types';
import { Background, SimpleHeader } from '@app/components';
import { translate } from '@app/i18n';

import { Article } from '@app/models/Article';
import useStickyHandler from '@app/hooks/useStickyHandler';
import { palette } from '@app/theme';
import { getCoinNews } from '@app/mocks/CoinNews';
import { AmplitudeModalsEvents, logAmplitudeEvent } from '@app/utils/amplitude';
import styles from './styles';
import NewsList from './fragments/NewsList';

interface NewsProps {
  route: {
    params: RootRoutes['News'];
  };
}

const News: FC<NewsProps> = ({ route }) => {
  const { location } = route.params;
  const navigation = useNavigation<NavigationProp<Routes>>();

  const listRef = useRef<FlatList>();
  const {
    scroll,
    handleScrollWithFlatList,
    headerHeight,
    handleHeaderLayout,
  } = useStickyHandler(listRef);

  const [newsList] = useState<Article[]>(getCoinNews());

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSelect = useCallback(
    (article: Article) => {
      const eventProperties = {
        location,
        article_name: article.description,
      };
      logAmplitudeEvent(
        AmplitudeModalsEvents.CLICK_NEWS_ARTICLE,
        eventProperties
      );

      navigation.navigate('NewsDetail', { url: article.url });
    },
    [location, navigation]
  );

  return (
    <Background style={styles.container} altLight={palette.white}>
      <SimpleHeader
        scrollPosition={scroll}
        onPressBack={handleBackPress}
        title={translate('news.title')}
        handleHeaderLayout={handleHeaderLayout}
        isCollapsedTitle
      />
      <NewsList
        ref={listRef}
        data={newsList}
        handleScroll={handleScrollWithFlatList}
        headerHeight={headerHeight}
        handleSelect={handleSelect}
      />
    </Background>
  );
};

export default News;
