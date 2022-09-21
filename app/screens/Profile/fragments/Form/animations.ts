import Animated, { withTiming } from 'react-native-reanimated';
import { ANIMATION_DURATION_IN_MS } from './constants';

export const interpolateTranslateY = (
  yOffset: Animated.SharedValue<number>
): { translateY: number } => {
  'worklet';

  const translateY = withTiming(yOffset.value, {
    duration: ANIMATION_DURATION_IN_MS,
  });
  return { translateY };
};

export const interpolateOpacity = (
  opacity: Animated.SharedValue<number>
): number => {
  'worklet';

  return withTiming(opacity.value, { duration: ANIMATION_DURATION_IN_MS });
};
