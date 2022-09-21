import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';

import { STICKY_FILTER_THRESHOLD } from '@app/screens/MarketWatch/constants';

export const interpolateTranslate = (scroll: Animated.SharedValue<number>) => {
  'worklet';

  const translateY = interpolate(
    scroll.value,
    [-STICKY_FILTER_THRESHOLD, 0, STICKY_FILTER_THRESHOLD],
    [STICKY_FILTER_THRESHOLD, 0, -STICKY_FILTER_THRESHOLD],
    Extrapolate.CLAMP
  );

  return { translateY };
};
