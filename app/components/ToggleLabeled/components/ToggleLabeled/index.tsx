import React, {
  useState,
  FC,
  useMemo,
  useCallback,
  useLayoutEffect,
  useContext,
} from 'react';
import { Pressable, View, ViewProps } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { noop, values } from 'lodash';

import { RootContext } from '@app/state';
import { observer } from 'mobx-react';
import ToggleOption from '../ToggleOption';
import { interpolateLeft } from './animations';
import { INITIAL_DIMENSIONS, TEXT_MARGIN } from './constants';
import { Dimensions, ToggleVariant, Options } from './types';
import { styles } from './styles';
import {
  getPillStyles,
  getTextColorOff,
  getTextColorOn,
  getContainerStyles,
} from './utils';

export interface ToggleLabeledProps extends ViewProps {
  checked?: boolean;
  disabled?: boolean;
  textOne: string;
  textTwo: string;
  variant?: ToggleVariant;
  width?: number;
  onChange?: (checked: boolean) => void;
}

const ToggleLabeled: FC<ToggleLabeledProps> = ({
  checked,
  disabled,
  style,
  textOne,
  textTwo,
  variant = 'default',
  onChange = noop,
  ...rest
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const timing = useDerivedValue(() => withTiming(checked ? 1 : 0));
  const [dimensions, setDimensions] = useState<Dimensions>(INITIAL_DIMENSIONS);
  const [width, setWidth] = useState<number>();
  const textColorOn = useMemo(() => getTextColorOn(disabled), [disabled]);
  const textColorOff = useMemo(() => getTextColorOff(disabled), [disabled]);

  // Once the 'On' and 'Off' text widths are grabbed from handleLayout,
  // set the container width based on the largest of the text widths.
  useLayoutEffect(() => {
    const max = Math.max.apply(null, values(dimensions));
    setWidth(max + TEXT_MARGIN);
  }, [dimensions]);

  const containerStyle = useMemo(
    () => [styles.container, getContainerStyles(disabled, theme), style],
    [disabled, theme, style]
  );

  const pillStyle = useMemo(
    () => [styles.pill, getPillStyles(variant, disabled, theme)],
    [disabled, theme, variant]
  );

  const maskStyleAnimated = useAnimatedStyle(() => ({
    left: interpolateLeft(timing),
  }));

  const handlePress = useCallback(() => {
    onChange(!checked);
  }, [onChange, checked]);

  const handleLayout = useCallback((dimension: number, option: Options) => {
    const predicate = (state: Dimensions) => ({
      ...state,
      [option]: dimension,
    });
    setDimensions(predicate);
  }, []);

  const maskElement = (
    <Animated.View style={[styles.mask, maskStyleAnimated]} />
  );

  return (
    <Pressable onPress={handlePress} disabled={disabled}>
      <View style={containerStyle} {...rest}>
        <MaskedView maskElement={maskElement}>
          <Animated.View style={pillStyle}>
            <ToggleOption
              color={textColorOn}
              option="left"
              onLayout={handleLayout}
              width={width}
            >
              {textOne}
            </ToggleOption>
            <ToggleOption
              color={textColorOn}
              option="right"
              onLayout={handleLayout}
              width={width}
            >
              {textTwo}
            </ToggleOption>
          </Animated.View>
        </MaskedView>
        <View style={styles.underLayer}>
          <ToggleOption
            color={textColorOff}
            option="left"
            onLayout={handleLayout}
            width={width}
          >
            {textOne}
          </ToggleOption>
          <ToggleOption
            color={textColorOff}
            option="right"
            onLayout={handleLayout}
            width={width}
          >
            {textTwo}
          </ToggleOption>
        </View>
      </View>
    </Pressable>
  );
};

export default observer(ToggleLabeled);
