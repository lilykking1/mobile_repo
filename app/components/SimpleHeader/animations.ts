import {
  Extrapolate,
  interpolate,
  interpolateColor,
} from 'react-native-reanimated';
import { palette } from '@app/theme';
import { BORDER_COLOR } from './constants';

export const interpolateHeaderButtonColor = (
  position: number,
  threshold: number
): string | number => {
  'worklet';

  return interpolateColor(
    position,
    [0, threshold],
    [palette.royalBlue[950], palette.royalBlue[1000]]
  );
};

export const interpolateHeaderColor = (
  position: number,
  threshold: number
): string | number => {
  'worklet';

  return interpolateColor(
    position,
    [0, threshold],
    [palette.royalBlue[1000], palette.royalBlue[950]]
  );
};

export const interpolateLightHeaderBorderColor = (
  position: number,
  threshold: number
): string | number => {
  'worklet';

  return interpolateColor(
    position,
    [0, threshold],
    [palette.transparent, BORDER_COLOR.light]
  );
};

export const interpolateDarkHeaderBorderColor = (
  position: number,
  threshold: number
): string | number => {
  'worklet';

  return interpolateColor(
    position,
    [0, threshold],
    [palette.royalBlue[1000], BORDER_COLOR.dark]
  );
};

export const interpolateTitleOpacity = (
  position: number,
  threshold: number
): number => {
  'worklet';

  return interpolate(position, [0, threshold], [0, 1], Extrapolate.CLAMP);
};
