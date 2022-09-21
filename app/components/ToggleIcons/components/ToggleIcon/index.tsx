import React, {
  FC,
  ReactElement,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { Pressable, View, ViewProps } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { noop, values } from 'lodash';

import { Options } from '@app/components/ToggleIcons/types';
import { IconProps } from '@app/components/Icon/types';

import { RootContext } from '@app/state';
import { observer } from 'mobx-react';
import ToggleOption from '../ToggleOption';
import IconComponent from '../IconComponent';
import { interpolateLeft } from './animations';
import { INITIAL_DIMENSIONS } from './constants';
import { Dimensions, ToggleIconsVariant } from './types';
import { containerStyles, maskStyles, pillStyles } from './styles';
import {
  getContainerStyles,
  getIconTintOff,
  getIconTintOn,
  getMaskStyles,
  getPillStyles,
} from './utils';

export interface ToggleIconProps extends ViewProps {
  checked?: boolean;
  disabled?: boolean;
  leftIcon: ReactElement<IconProps>;
  rightIcon: ReactElement<IconProps>;
  rounded?: boolean;
  variant?: ToggleIconsVariant;
  width?: number;
  onChange?: (checked: boolean) => void;
}

const ToggleIcon: FC<ToggleIconProps> = ({
  checked,
  disabled,
  style,
  variant,
  leftIcon,
  rightIcon,
  rounded,
  onChange = noop,
  ...rest
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const timing = useDerivedValue(() => withTiming(checked ? 1 : 0));
  const [dimensions, setDimensions] = useState<Dimensions>(INITIAL_DIMENSIONS);
  const [width, setWidth] = useState<number>();
  const iconColorOn = useMemo(() => getIconTintOn(disabled), [disabled]);
  const iconColorOff = useMemo(() => getIconTintOff(disabled), [disabled]);

  // Once the 'leftIcon' and 'rightIcon' widths are grabbed from handleLayout,
  // set the container width based on the largest of the widths.
  // This is fixed width now of 'CONTAINER_HEIGHT in constants
  useLayoutEffect(() => {
    const max = Math.max.apply(null, values(dimensions));
    setWidth(max);
  }, [dimensions]);

  const containerStyle = useMemo(
    () => [
      containerStyles.base,
      getContainerStyles(disabled, rounded, theme),
      style,
    ],
    [disabled, rounded, theme, style]
  );

  const pillStyle = useMemo(
    () => [pillStyles.base, getPillStyles(variant, disabled)],
    [disabled, variant]
  );

  const maskStyle = useMemo(() => [maskStyles.base, getMaskStyles(rounded)], [
    rounded,
  ]);

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

  const maskElement = <Animated.View style={[maskStyle, maskStyleAnimated]} />;

  return (
    <Pressable onPress={handlePress} disabled={disabled}>
      <View style={containerStyle} {...rest}>
        <MaskedView maskElement={maskElement}>
          <Animated.View style={pillStyle}>
            <ToggleOption option="left" onLayout={handleLayout} width={width}>
              <IconComponent icon={leftIcon} tint={iconColorOn} />
            </ToggleOption>
            <ToggleOption option="right" onLayout={handleLayout} width={width}>
              <IconComponent icon={rightIcon} tint={iconColorOn} />
            </ToggleOption>
          </Animated.View>
        </MaskedView>
        <View style={containerStyles.underLayer}>
          <ToggleOption option="left" onLayout={handleLayout} width={width}>
            <IconComponent icon={leftIcon} tint={iconColorOff} />
          </ToggleOption>
          <ToggleOption option="right" onLayout={handleLayout} width={width}>
            <IconComponent icon={rightIcon} tint={iconColorOff} />
          </ToggleOption>
        </View>
      </View>
    </Pressable>
  );
};

export default observer(ToggleIcon);
