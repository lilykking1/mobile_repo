import { ViewStyle } from 'react-native';
import { Theme } from '@app/state/stores/settings/types';
import { ToggleSize, ToggleVariant } from './types';
import {
  backgroundColorThemes,
  wheelColorThemes,
  toggleStatus,
  toggleWheelSizes,
  toggleSizes,
} from './constants';

export const getBackgroundSwitchColor = (
  theme: Theme = 'light',
  variant: ToggleVariant,
  isToggled: boolean
): ViewStyle => {
  const toggle = isToggled ? toggleStatus.on : toggleStatus.off;
  return {
    backgroundColor: backgroundColorThemes[theme][variant][toggle],
  };
};

export const getWheelColor = (
  theme: Theme = 'light',
  variant: ToggleVariant,
  isToggled: boolean
): ViewStyle => {
  const toggle = isToggled ? toggleStatus.on : toggleStatus.off;
  return {
    backgroundColor: wheelColorThemes[theme][variant][toggle],
  };
};

export const getSwitchSize = (size: ToggleSize): ViewStyle => toggleSizes[size];

export const getWheelSize = (size: ToggleSize): ViewStyle =>
  toggleWheelSizes[size];
