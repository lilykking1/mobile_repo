import { palette } from '@app/theme';
import { THEME_VARIANT } from '@app/components/Slider/constants';
import { SliderType } from './types';

export const isShowCoinIcon = (type: SliderType): boolean =>
  type === SliderType.INPUT_WITH_ICON ||
  type === SliderType.INPUT_ICON_WITH_LEVELS;

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

export const getValueByPercent = (
  percent: number,
  maximumValue: number
): number => (percent * maximumValue) / 100;

export const getValueWhenForceSnap = (
  currentValue: number,
  maximumValue: number
): number => {
  const percentValue = getPercentByValue(currentValue, maximumValue);

  if (percentValue > 94 && percentValue <= 99) {
    return getValueByPercent(99, maximumValue);
  }
  if (percentValue > 70 && percentValue < 80) {
    return getValueByPercent(75, maximumValue);
  }
  if (percentValue > 45 && percentValue < 55) {
    return getValueByPercent(50, maximumValue);
  }
  if (percentValue > 20 && percentValue < 30) {
    return getValueByPercent(25, maximumValue);
  }
  if (percentValue > 0 && percentValue < 5) {
    return getValueByPercent(1, maximumValue);
  }

  return currentValue;
};
