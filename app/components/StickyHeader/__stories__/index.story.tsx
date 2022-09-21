import React, { useCallback, useRef } from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { coinIconSvgs } from '@app/assets/crypto-icons';

import {
  IconButton,
  TextButton,
  Icon,
  Typography,
  Button,
  ToggleIcons,
} from '@app/components';
import { palette } from '@app/theme';
import { FlatList, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import useStickyHandler from '@app/hooks/useStickyHandler';
import StickyHeader, { StickyHeaderProps } from '../index';
import styles from './styles';

declare let module;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

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

const StickyHeaderAnimatedExample: React.FC<StickyHeaderProps> = ({
  Title,
  CollapsedTitle,
  BottomTitle,
  Right,
  Left,
  CollapsedRight,
  BottomRight,
  handleBackPress,
}) => {
  const listRef = useRef<FlatList>();
  const {
    handleHeaderLayout,
    handleBottomHeaderLayout,
    scroll,
    handleScrollWithFlatList,
    headerHeight,
    bottomHeaderHeight,
  } = useStickyHandler(listRef);

  const listHeaderStyle = useAnimatedStyle(() => ({
    height: bottomHeaderHeight.value,
  }));

  const marginTopListStyle = useAnimatedStyle(() => ({
    marginTop: headerHeight.value,
  }));

  const keyExtractor = useCallback(({ id }) => `${id}`, []);
  const renderItem = useCallback(() => <View style={styles.listItem} />, []);

  return (
    <View style={styles.container}>
      <StickyHeader
        handleHeaderLayout={handleHeaderLayout}
        scroll={scroll}
        Title={Title}
        CollapsedTitle={CollapsedTitle}
        BottomTitle={BottomTitle}
        Right={Right}
        Left={Left}
        CollapsedRight={CollapsedRight}
        BottomRight={BottomRight}
        handleBackPress={handleBackPress}
        handleBottomHeaderLayout={handleBottomHeaderLayout}
      />
      <AnimatedFlatList
        ref={listRef}
        data={mockData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        style={[styles.list, marginTopListStyle]}
        onScroll={handleScrollWithFlatList}
        scrollEventThrottle={1}
        ListHeaderComponent={<Animated.View style={listHeaderStyle} />}
      />
    </View>
  );
};

storiesOf('NavigationBar.StickyHeader', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const bottomTitle = text('Bottom Title', 'Bottom Title');
    const hasTitle = boolean('Title', true);
    const hasCollapsedTitle = boolean('Collapsed Title', true);

    const animatedHeader = boolean('Animated Header', true);
    const hasBackButton = boolean('Back Button', true);
    const hasLeftComponent = boolean('Left Component', false);
    const hasRightComponent = boolean('Right Component', false);
    const hasCollapsedRightComponent = boolean(
      'Collapsed Right Component',
      false
    );

    const hasBottomRightComponent = boolean('Bottom Right Component', false);

    const handleBackPress = hasBackButton ? () => {} : undefined;

    const Title = hasTitle ? (
      <coinIconSvgs.ETH width={32} height={32} />
    ) : undefined;

    const CollapsedTitle = hasCollapsedTitle ? (
      <Typography strong size="h6">
        Title
      </Typography>
    ) : undefined;

    const Right = hasRightComponent ? (
      <IconButton
        size="normal"
        startIcon={
          <Icon.Close tint={palette.royalBlue[900]} width={16} height={16} />
        }
      />
    ) : undefined;

    const Left = hasLeftComponent ? (
      <View style={styles.actionsRow}>
        <ToggleIcons
          leftIcon={<Icon.Dollar />}
          rightIcon={<Icon.Bitcoin />}
          variant="default"
        />
      </View>
    ) : undefined;

    const CollapsedRight = hasCollapsedRightComponent ? (
      <Button variant="green" label="BUY" onPress={() => {}} size="small" />
    ) : undefined;

    const BottomRight = hasBottomRightComponent ? (
      <TextButton label="label" />
    ) : undefined;

    return animatedHeader ? (
      <StickyHeaderAnimatedExample
        CollapsedTitle={CollapsedTitle}
        Title={Title}
        BottomTitle={bottomTitle}
        Right={Right}
        Left={Left}
        CollapsedRight={CollapsedRight}
        BottomRight={BottomRight}
        handleBackPress={handleBackPress}
      />
    ) : (
      <View style={styles.container}>
        <StickyHeader
          Title={Title}
          Right={Right}
          Left={Left}
          BottomTitle={bottomTitle}
          BottomRight={BottomRight}
          handleBackPress={handleBackPress}
        />
      </View>
    );
  });
