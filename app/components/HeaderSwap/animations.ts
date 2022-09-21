import { interpolateColor } from 'react-native-reanimated';
import { palette } from '@app/theme';

export const interpolateHeaderButtonColor = (position = 0): string | number => {
  'worklet';

  return interpolateColor(
    position,
    [0, 0.08],
    [palette.royalBlue[950], palette.royalBlue[1000]]
  );
};

export const interpolateHeaderColor = (position = 0): string | number => {
  'worklet';

  return interpolateColor(
    position,
    [0, 0.08],
    [palette.royalBlue[1000], palette.royalBlue[950]]
  );
};

export const interpolateHeaderBorderColor = (position: number) => {
  'worklet';

  return interpolateColor(
    position,
    [0, 0.08],
    [palette.royalBlue[1000], palette.grey[700]]
  );
};
