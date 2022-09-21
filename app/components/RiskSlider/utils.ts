import { palette } from '@app/theme';
import { THEME_VARIANT } from '@app/components/Slider/constants';
import { ViewStyle } from 'react-native';
import { SNAP_RANGE } from './constants';
import { styles } from './styles';

export const getMinimumTrackTintColor = (disabled: boolean): string =>
  disabled ? palette.grey[500] : palette.royalBlue[500];

export const getMaximumTrackTintColor = (theme: string): string =>
  THEME_VARIANT[theme].maximumTrackTintColor;

export const getPercentByValue = (
  value: number,
  maximumValue: number
): number => {
  const fixedValue = Number.isNaN(value) ? 0 : value;
  return parseFloat(((100 * fixedValue) / maximumValue).toFixed(0));
};

export const getValueWhenForceSnap = (
  currentValue: number,
  maximumValue: number,
  customSteps: number[]
): number => {
  const percentValue = getPercentByValue(currentValue, maximumValue);

  for (let i = 0; i < customSteps.length; i += 1) {
    if (i === 0) {
      if (
        percentValue > customSteps[i] &&
        percentValue < customSteps[i] + SNAP_RANGE
      ) {
        return customSteps[i];
      }
    } else if (i === customSteps.length - 1) {
      if (
        percentValue > customSteps[i] - SNAP_RANGE &&
        percentValue <= customSteps[i]
      ) {
        return customSteps[i];
      }
    } else if (
      percentValue > customSteps[i] - SNAP_RANGE &&
      percentValue < customSteps[i] + SNAP_RANGE
    ) {
      return customSteps[i];
    }
  }

  return currentValue;
};

export const getTrackStyle = (theme: string): ViewStyle => ({
  ...styles.track,
  backgroundColor: THEME_VARIANT[theme].trackBackground,
});
