import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useMemo,
} from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { noop } from 'lodash';

import { Alert } from '@app/models';
import styles from './styles';
import AlertsGrouped from '../AlertsGrouped';
import ListHeader from '../ListHeader';
import { buildAlertGroupList, getDateMonthAndYear } from '../../utils';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface ListProps {
  headerHeight: Animated.SharedValue<number>;
  data: Alert[];
  handleScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  handleMarkAllPress: () => void;
}

const List: ForwardRefRenderFunction<FlatList, ListProps> = (
  { handleScroll = noop, data, headerHeight, handleMarkAllPress },
  ref
) => {
  const keyExtractor = useCallback(({ title }, i) => `${title}-${i}`, []);

  const renderItem = useCallback(
    ({ item: alertGroup }) => (
      <AlertsGrouped
        key={getDateMonthAndYear(alertGroup[0].timestamp)}
        alerts={alertGroup}
      />
    ),
    []
  );

  const marginTopListStyle = useAnimatedStyle(() => ({
    marginTop: headerHeight.value,
  }));

  const alertsGroupedByMonthAndYear = useMemo((): Alert[][] => {
    if (data) {
      return buildAlertGroupList(data);
    }
    return [];
  }, [data]);

  return (
    <AnimatedFlatList
      ref={ref}
      data={alertsGroupedByMonthAndYear}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      style={[styles.alerts, marginTopListStyle]}
      onScroll={handleScroll}
      scrollEventThrottle={1}
      ListHeaderComponent={
        <ListHeader handleMarkAllPress={handleMarkAllPress} />
      }
    />
  );
};

export default forwardRef(List);
