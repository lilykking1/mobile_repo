import { withTiming, Easing } from 'react-native-reanimated';

export const withTimingOpacity = (present: boolean): number => {
  'worklet';

  return withTiming(present ? 1 : 0, {
    duration: 250,
    easing: Easing.linear,
  });
};
