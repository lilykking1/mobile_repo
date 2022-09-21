import React, { useCallback, useRef } from 'react';
import { storiesOf } from '@storybook/react-native';
import { withWideView } from '@story/decorators';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { Background, SimpleHeader } from '@app/components';
import { FlatList, View } from 'react-native';
import useStickyHandler from '@app/hooks/useStickyHandler';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { palette } from '@app/theme';
import styles from './styles';
import { SimpleHeaderProps } from '..';

const mockData = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const SimpleHeaderExample: React.FC<SimpleHeaderProps> = ({
  title,
  isCollapsedTitle,
  threshold,
}) => {
  const listRef = useRef<FlatList>();
  const {
    scroll,
    handleScrollWithFlatList,
    headerHeight,
    handleHeaderLayout,
  } = useStickyHandler(listRef);

  const keyExtractor = useCallback(({ id }) => `${id}`, []);
  const renderItem = useCallback(() => <View style={styles.listItem} />, []);

  const marginTopListStyle = useAnimatedStyle(() => ({
    marginTop: headerHeight.value,
  }));

  return (
    <Background style={styles.container} altLight={palette.white}>
      <SimpleHeader
        title={title}
        scrollPosition={scroll}
        isCollapsedTitle={isCollapsedTitle}
        handleHeaderLayout={handleHeaderLayout}
        threshold={threshold}
      />
      <AnimatedFlatList
        ref={listRef}
        data={mockData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        style={[styles.list, marginTopListStyle]}
        onScroll={handleScrollWithFlatList}
        scrollEventThrottle={1}
      />
    </Background>
  );
};

storiesOf('NavigationBar.SimpleHeader', module)
  .addDecorator(withKnobs)
  .addDecorator(withWideView)
  .add('Default', () => {
    const title = text('Title', 'title');
    const isCollapsedTitle = boolean('Is Collapsed Title', false);
    const threshold = number('Swap Color Threshold', 50);

    return (
      <SimpleHeaderExample
        title={title}
        isCollapsedTitle={isCollapsedTitle}
        threshold={threshold}
      />
    );
  });
