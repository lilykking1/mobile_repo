import { Extrapolate, interpolate, withTiming } from 'react-native-reanimated';

export const withTimingFromBoolean = (value: boolean): number => {
  'worklet';

  return withTiming(value ? 1 : 0);
};

export const interpolateMargin = (
  timing: number,
  minValue: number,
  maxValue: number
): number => {
  'worklet';

  return interpolate(timing, [0, 1], [maxValue, minValue], Extrapolate.CLAMP);
};
