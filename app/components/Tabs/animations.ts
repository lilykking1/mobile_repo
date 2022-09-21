import { Easing, withTiming } from 'react-native-reanimated';

export const bezierEasing = (value: number): number => {
  'worklet';

  return withTiming(value, {
    duration: 240,
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });
};
