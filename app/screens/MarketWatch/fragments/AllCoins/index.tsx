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
import Animated from 'react-native-reanimated';

import { CoinInfo } from '@app/models';
import ListHeader from '../ListHeader';

import CoinRow from '../CoinRow';
import styles from './styles';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface AllCoinsProps {
  coins: CoinInfo[];
  height: Animated.SharedValue<number> | number;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  usAllowed: boolean;
}

const AllCoins: ForwardRefRenderFunction<FlatList, AllCoinsProps> = (
  { coins, onScroll, height, usAllowed },
  ref
) => {
  const keyExtractor = useCallback((item) => `${item.coin}=${item.name}`, []);
  const renderItem = useCallback(
    ({ item }) => <CoinRow usAllowed={usAllowed} item={item} />,
    [usAllowed]
  );

  return (
    <AnimatedFlatList
      contentContainerStyle={styles.column}
      data={coins}
      ref={ref}
      bounces={false}
      initialNumToRender={10}
      scrollEventThrottle={1}
      onScroll={onScroll}
      ListHeaderComponent={<ListHeader height={height} />}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      style={styles.container}
    />
  );
};
export default forwardRef(AllCoins);
