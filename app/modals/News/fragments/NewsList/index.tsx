import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
} from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { noop } from 'lodash';

import { NewsArticle } from '@app/components';
import { Article } from '@app/models/Article';
import styles from './styles';
import NewsListHeader from '../NewListHeader';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface NewsListProps {
  headerHeight: Animated.SharedValue<number>;
  data: Article[];
  handleScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  handleSelect: (article: Article) => void;
}

const List: ForwardRefRenderFunction<FlatList, NewsListProps> = (
  { handleScroll = noop, data, headerHeight, handleSelect },
  ref
) => {
  const keyExtractor = useCallback(({ title }, i) => `${title}-${i}`, []);

  const renderItem = useCallback(
    ({ item: article, index }) => (
      <NewsArticle
        key={article.description}
        article={article}
        onSelect={() => handleSelect(article)}
        isLastItem={index === data.length - 1}
      />
    ),
    [data.length, handleSelect]
  );

  const marginTopListStyle = useAnimatedStyle(() => ({
    marginTop: headerHeight.value,
  }));

  return (
    <AnimatedFlatList
      ref={ref}
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      style={[styles.list, marginTopListStyle]}
      onScroll={handleScroll}
      scrollEventThrottle={1}
      ListHeaderComponent={<NewsListHeader />}
    />
  );
};

export default forwardRef(List);
