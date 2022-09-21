/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { View, ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import MaskedView from '@react-native-community/masked-view';
import { findIndex, get, noop, reduce } from 'lodash';

import Background from '../Background';

import { DARK_CONTAINER_COLOR, LIGHT_CONTAINER_COLOR } from './constants';
import { bezierEasing } from './animations';
import { Item } from './components';
import styles from './styles';
import { ViewPropsAndColors } from './types';

interface TabsProps extends ViewPropsAndColors {
  selected: number | string;
  tabs: Array<{ id: number | string; value: string }>;
  onChange?: (id: number | string) => void;
}

const Tabs: FC<TabsProps> = ({
  altLight,
  altDark,
  selected,
  tabs,
  style,
  onChange = noop,
  ...rest
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [dimensions, setDimensions] = useState<Array<number>>([]);

  const left = useSharedValue(0);
  const width = useSharedValue(0);

  // Update the selected index if the props selected or tabs are modified
  useEffect(() => {
    const index = findIndex(tabs, ({ id }) => id === selected);

    if (index > -1) {
      setSelectedIndex(index);
    }
  }, [selected, tabs]);

  // Update the position and size of mask based on the selected index
  useEffect(() => {
    if (selectedIndex < dimensions.length) {
      const maskPosition = reduce(
        dimensions,
        (accumulator, value, index) => {
          if (index >= selectedIndex) {
            return accumulator;
          }

          return accumulator + value;
        },
        0
      );

      left.value = maskPosition;
      width.value = dimensions[selectedIndex];
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions, selectedIndex]);

  const animations = useAnimatedStyle(() => ({
    width: bezierEasing(width.value),
    left: bezierEasing(left.value),
  }));

  const maskElement = <Animated.View style={[styles.mask, animations]} />;

  const containerStyles = useMemo(() => [styles.container, style], [style]);

  const handleLayout = useCallback((index, dimension) => {
    setDimensions((state) => {
      const dims = [...state];
      dims[index] = dimension;
      return dims;
    });
  }, []);

  const handlePress = useCallback(
    (index: number) => {
      const item = get(tabs, [index, 'id'], null);
      onChange(item);
      setSelectedIndex(index);
    },
    [onChange, tabs]
  );

  const maskedElements = useMemo(
    () =>
      tabs.map(({ id, value }, index) => (
        <Item
          key={id}
          label={value}
          selected
          index={index}
          selectedIndex={selectedIndex}
          onLayout={handleLayout}
          onPress={handlePress}
        />
      )),
    [tabs, selectedIndex, handleLayout, handlePress]
  );

  const inactiveElements = useMemo(
    () => tabs.map(({ id, value }) => <Item key={id} label={value} />),
    [tabs]
  );

  return (
    <Background
      altLight={altLight || LIGHT_CONTAINER_COLOR}
      altDark={altDark || DARK_CONTAINER_COLOR}
      style={containerStyles as ViewStyle[]}
      accessible
      accessibilityRole="tablist"
      {...rest}
    >
      <MaskedView accessibilityElementsHidden maskElement={maskElement}>
        <View style={styles.activeContainer}>{maskedElements}</View>
      </MaskedView>

      <View style={styles.inactiveContainer}>{inactiveElements}</View>
    </Background>
  );
};

export default Tabs;
