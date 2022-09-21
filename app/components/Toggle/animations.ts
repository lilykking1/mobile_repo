import { ViewStyle } from 'react-native';
import { interpolate, withTiming, Easing } from 'react-native-reanimated';

export const getMoveToggle = (switchTransitionValue: number): ViewStyle => {
  'worklet';

  return { marginLeft: interpolate(switchTransitionValue, [0, 1], [3, 22]) };
};

export const withTimingMoveToggle = (isToggled: boolean): number => {
  'worklet';

  return withTiming(isToggled ? 1 : 0, {
    duration: 150,
    easing: Easing.linear,
  });
};
