import React, { FC, useCallback, useContext, useEffect, useMemo } from 'react';
import { TouchableOpacity, View, ViewProps } from 'react-native';
import { observer } from 'mobx-react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { RootContext } from '@app/state';
import { ToggleSize, ToggleVariant } from './types';
import { DEFAULT_TOGGLED } from './constants';
import {
  getBackgroundSwitchColor,
  getSwitchSize,
  getWheelColor,
  getWheelSize,
} from './utils';
import { getMoveToggle, withTimingMoveToggle } from './animations';
import styles from './styles';

export interface ToggleProps extends ViewProps {
  variant?: ToggleVariant;
  size?: ToggleSize;
  disabled?: boolean;
  checked: boolean;
  onChange: (isChecked: boolean) => void;
}

const Toggle: FC<ToggleProps> = ({
  variant = 'default',
  disabled = false,
  size = 'medium',
  checked = DEFAULT_TOGGLED,
  onChange,
}) => {
  const isVariantDisabled = variant === 'disabled';
  const switchTransition = useSharedValue(0);
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const moveToggle = useAnimatedStyle(() =>
    getMoveToggle(switchTransition.value)
  );

  const switchBackgroundStyles = useMemo(
    () => [
      styles.toggleContainer,
      getBackgroundSwitchColor(theme, variant, checked),
      getSwitchSize(size),
    ],
    [theme, variant, checked, size]
  );

  const wheelStyles = useMemo(
    () => [
      styles.toggleWheelStyle,
      getWheelColor(theme, variant, checked),
      moveToggle,
      getWheelSize(size),
    ],
    [theme, variant, checked, moveToggle, size]
  );

  const handlePress = useCallback(() => {
    if (disabled) {
      return;
    }
    onChange(!checked);
  }, [disabled, checked, onChange]);

  useEffect(() => {
    switchTransition.value = withTimingMoveToggle(checked);
  }, [checked, switchTransition]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled || isVariantDisabled}
        onPress={() => handlePress()}
      >
        <View style={switchBackgroundStyles}>
          <Animated.View style={wheelStyles} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default observer(Toggle);
