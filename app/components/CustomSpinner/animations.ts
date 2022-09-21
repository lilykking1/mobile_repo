import type { RotateZTransform } from 'react-native';
import Animated, {
  Easing,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { ONE_SECOND_IN_MS, WHOLE_SPINN_IN_DEGREES } from './constants';

export const interpolateRotation = (
  rotation: Animated.SharedValue<number>
): RotateZTransform[] => {
  'worklet';

  const rotateZ = `${rotation.value}deg`;

  return [{ rotateZ }];
};

export const startIconRotation = (
  rotation: Animated.SharedValue<number>
): void => {
  const config: Animated.WithTimingConfig = {
    duration: ONE_SECOND_IN_MS,
    easing: Easing.linear,
  };

  const timing = withTiming(WHOLE_SPINN_IN_DEGREES, config);
  const repeat = withRepeat(timing, -1);

  // eslint-disable-next-line no-param-reassign
  rotation.value = repeat;
};
