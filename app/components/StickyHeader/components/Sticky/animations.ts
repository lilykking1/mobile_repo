import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';
import { STICKY_HEADER_THRESHOLD } from '@app/components/StickyHeader/constants';

export const interpolateTranslate = (
  scroll: Animated.SharedValue<number>
): { translateY: number } => {
  'worklet';

  const translateY = interpolate(
    scroll.value,
    [-STICKY_HEADER_THRESHOLD, 0, STICKY_HEADER_THRESHOLD],
    [STICKY_HEADER_THRESHOLD, 0, -STICKY_HEADER_THRESHOLD],
    Extrapolate.CLAMP
  );

  return { translateY };
};
