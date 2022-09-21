import React, { FC, useCallback, useMemo, useRef } from 'react';
import { FlatList, View } from 'react-native';
import { noop } from 'lodash';

import { CardType } from '@app/screens/AssetsArea/types';
import {
  DECELERATION_RATE,
  INTERVAL_TO_SNAP_ITEM,
  QUANTITY_OF_ITENS_TO_RENDER_INITIALLY,
  VIEWABILITY_CONFIG,
  VIEW_POSITION_TO_SCROLL_TO,
} from './constants';
import { Indicators, Item } from './components';
import styles from './styles';
import { ExchangesCarouselItemData } from './types';

interface ExchangesCarouselProps {
  items: ExchangesCarouselItemData[];
  selectedIndex: number;
  isValuesSecret: boolean;
  handleSetSelected: (index: number) => void;
  onActionPress: () => void;
}

const ExchangesCarousel: FC<ExchangesCarouselProps> = ({
  items,
  selectedIndex = 0,
  isValuesSecret = false,
  handleSetSelected = noop,
  onActionPress = noop,
}) => {
  const listRef = useRef<FlatList>(null);

  const handleSelectItem = (index: number) => {
    handleSetSelected(index);

    listRef.current?.scrollToIndex({
      animated: true,
      index,
      viewPosition: VIEW_POSITION_TO_SCROLL_TO,
    });
  };

  const handleScroll = useCallback(
    ({ viewableItems }) => {
      if (viewableItems && viewableItems.length) {
        const mostViewableItem = viewableItems[0];
        const mostViewableItemIndex = mostViewableItem.index;

        handleSetSelected(mostViewableItemIndex);
      }
    },
    [handleSetSelected]
  );

  const viewabilityConfig = useMemo(() => VIEWABILITY_CONFIG, []);

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged: handleScroll },
  ]);

  const renderItem = ({ item, index }) => {
    const isExchange = item.type === CardType.EXCHANGE;
    const isOnline = isExchange ? item?.connected : item?.configured;

    return (
      <Item
        title={item.title}
        amount={item.amount}
        type={item?.type}
        isOnline={isOnline}
        isSelected={selectedIndex === index}
        onActionPress={onActionPress}
        onSelect={() => handleSelectItem(index)}
        isSecret={isValuesSecret}
      />
    );
  };

  const keyExtractor = (item: ExchangesCarouselItemData, index: number) =>
    `${item?.type}-${item?.title}-${index}`;

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.list}
        data={items}
        decelerationRate={DECELERATION_RATE}
        horizontal
        initialNumToRender={QUANTITY_OF_ITENS_TO_RENDER_INITIALLY}
        keyExtractor={keyExtractor}
        ref={listRef}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        snapToInterval={INTERVAL_TO_SNAP_ITEM}
        viewabilityConfig={viewabilityConfig}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />

      <Indicators itemsQuantity={items.length} selectedIndex={selectedIndex} />
    </View>
  );
};

export default ExchangesCarousel;
