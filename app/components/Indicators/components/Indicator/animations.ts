import { interpolateColor } from 'react-native-reanimated';
import { palette } from '@app/theme';
import { IndicatorsType } from './types';

export const interpolateBackgroundColor = (
  index: number,
  value: number
): string | number => {
  'worklet';

  return interpolateColor(
    value,
    [index - 1, index, index + 1],
    [palette.grey[400], palette.royalBlue[500], palette.grey[400]]
  );
};

export const getColorToPaintAllSteps = (
  index: number,
  current: number
): string | number => {
  'worklet';

  return index > current
    ? interpolateBackgroundColor(index, current)
    : palette.royalBlue[500];
};

export const getBackgroundColorFromType = (
  type: IndicatorsType,
  index: number,
  current: number
): string | number => {
  'worklet';

  return type === IndicatorsType.PAINT_CURRENT_STEP
    ? interpolateBackgroundColor(index, current)
    : getColorToPaintAllSteps(index, current);
};
