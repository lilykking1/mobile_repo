import Animated, { interpolate } from 'react-native-reanimated';

export function interpolateLeft(timing: Animated.SharedValue<number>) {
  'worklet';

  const percent = interpolate(timing.value, [0, 1], [0, 50]);

  return `${percent}%`;
}
