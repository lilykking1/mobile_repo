import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { View, ViewProps } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import MaskedView from '@react-native-community/masked-view';
import { findIndex, get, noop, reduce } from 'lodash';

import { bezierEasing } from './animations';
import { RadioButtonItem } from './components';
import { RadioButtonVariant, RadioButtonSize } from './types';
import { getContentStyle } from './utils';
import styles from './styles';

interface RadioButtonProps extends ViewProps {
  selected: number | string;
  variant?: RadioButtonVariant;
  size?: RadioButtonSize;
  options: Array<{ id: number | string; value: string }>;
  onChange?: (id: number | string) => void;
}

const RadioButton: FC<RadioButtonProps> = ({
  variant,
  size,
  selected,
  options,
  style,
  onChange = noop,
  ...rest
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [dimensions, setDimensions] = useState<Array<number>>([]);
  const left = useSharedValue(0);
  const width = useSharedValue(0);

  // Update the selected index if the props selected or options are modified
  useEffect(() => {
    const index = findIndex(options, ({ id }) => id === selected);

    if (index > -1) {
      setSelectedIndex(index);
    }
  }, [selected, options]);

  // Update the position and size of mask based on the selected index
  useEffect(() => {
    if (selectedIndex < dimensions.length) {
      const maskPosition = reduce(
        dimensions,
        (acc, value, index) => {
          if (index >= selectedIndex) {
            return acc;
          }

          return acc + value;
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

  const containerStyles = useMemo(() => [styles.container, style], [style]);

  const contentStyles = useMemo(
    () => [styles.contentActive, getContentStyle(variant)],
    [variant]
  );

  const maskElement = <Animated.View style={[styles.mask, animations]} />;

  const handleLayout = useCallback((index, dimension) => {
    setDimensions((state) => {
      const dims = [...state];
      dims[index] = dimension;
      return dims;
    });
  }, []);

  const handlePress = useCallback(
    (index: number) => {
      const item = get(options, [index, 'id'], null);
      onChange(item);
      setSelectedIndex(index);
    },
    [onChange, options]
  );

  const maskedElements = useMemo(
    () =>
      options.map(({ id, value }, index) => (
        <RadioButtonItem
          key={id}
          active
          index={index}
          variant={variant}
          size={size}
          label={value}
          onLayout={handleLayout}
          onPress={handlePress}
        />
      )),
    [options, size, variant, handlePress, handleLayout]
  );

  const inactiveElement = useMemo(
    () =>
      options.map(({ id, value }) => (
        <RadioButtonItem key={id} variant={variant} size={size} label={value} />
      )),
    [options, size, variant]
  );

  return (
    <View
      style={containerStyles}
      accessible
      accessibilityRole="radiogroup"
      {...rest}
    >
      <MaskedView accessibilityElementsHidden maskElement={maskElement}>
        <View style={contentStyles}>{maskedElements}</View>
      </MaskedView>
      <View style={styles.contentInactive}>{inactiveElement}</View>
    </View>
  );
};

export default RadioButton;
