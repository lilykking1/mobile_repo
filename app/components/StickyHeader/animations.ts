import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';

import { STICKY_HEADER_THRESHOLD } from '@app/components/StickyHeader/constants';

export const interpolateOpacity = (
  scroll: Animated.SharedValue<number>
): number => {
  'worklet';

  return interpolate(
    scroll.value,
    [0, STICKY_HEADER_THRESHOLD - 10],
    [1, 0],
    Extrapolate.CLAMP
  );
};

export const interpolateOpacityInversed = (
  scroll: Animated.SharedValue<number>,
  fadeInPositionY: number,
  startFadeInPosition: number
): number => {
  'worklet';

  return interpolate(
    scroll.value,
    [fadeInPositionY, startFadeInPosition],
    [1, 0],
    Extrapolate.CLAMP
  );
};
