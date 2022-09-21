import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '@app/state/stores/settings/types';
import styles from '../styles';
import { SLIDERS_NUMERIC_STEPS } from '../constants';

interface StepStyleReturn {
  color: string;
}

export const getTextInputStyle = (
  theme: Theme
): StyleProp<TextStyle> | null => {
  const isDarkTheme = theme === 'dark';
  if (isDarkTheme) {
    return styles.textLight;
  }
  return styles.textDark;
};

export const getTrackStyle = (theme: Theme): StyleProp<any> | null => {
  const isDarkTheme = theme === 'dark';
  if (isDarkTheme) {
    return styles.trackDark;
  }
  return styles.track;
};

export const getContainerStyle = (
  theme: Theme
): StyleProp<ViewStyle> | null => {
  const isDarkTheme = theme === 'dark';
  if (isDarkTheme) {
    return styles.customContainerDark;
  }
  return styles.customContainerStyle;
};

export const getBackGroundStyle = (
  theme: Theme
): StyleProp<ViewStyle> | null => {
  const isDarkTheme = theme === 'dark';
  if (isDarkTheme) {
    return styles.withBackGroundDark;
  }
  return styles.withBackGroundLight;
};

export const getActiveMarkStyle = (
  theme: Theme
): StyleProp<ViewStyle> | null => {
  const isDarkTheme = theme === 'dark';
  if (isDarkTheme) {
    return styles.activeMarkDark;
  }
  return styles.activeMark;
};

export const getHowMuchToInvestFirstStepStyle = (
  isDarkTheme: boolean,
  extractedValue: number
): StepStyleReturn => {
  if (isDarkTheme && extractedValue === SLIDERS_NUMERIC_STEPS.zero) {
    return styles.sliderValueHighlight;
  }
  if (!isDarkTheme && extractedValue === SLIDERS_NUMERIC_STEPS.zero) {
    return styles.sliderValueBlue;
  }
  return styles.graphPointStyle;
};

export const getHowMuchToInvestMediumStepStyle = (
  isTheMediumPoint: boolean,
  isDarkTheme: boolean,
  extractedValue: number
): StepStyleReturn => {
  if (isTheMediumPoint) {
    return styles.sliderValueOpaque;
  }
  if (isDarkTheme && extractedValue === SLIDERS_NUMERIC_STEPS.tenThousand) {
    return styles.sliderValueHighlight;
  }
  if (!isDarkTheme && extractedValue === SLIDERS_NUMERIC_STEPS.tenThousand) {
    return styles.sliderValueBlue;
  }
  return styles.graphPointStyle;
};

export const getHowMuchToInvestMaximumStepStyle = (
  amount: number,
  isDarkTheme: boolean,
  extractedValue: number
): StepStyleReturn => {
  if (isDarkTheme && extractedValue === amount) {
    return styles.sliderValueHighlight;
  }
  if (!isDarkTheme && extractedValue === amount) {
    return styles.sliderValueBlue;
  }
  return styles.graphPointStyle;
};
