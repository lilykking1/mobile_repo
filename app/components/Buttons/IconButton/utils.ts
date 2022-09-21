import type { ViewStyle } from 'react-native';

import { Theme } from '@app/state/stores/settings/types';
import { palette } from '@app/theme';
import {
  TypographySize,
  TypographyVariant,
} from '@app/components/Typography/types';

import { IconButtonSize } from './types';
import {
  disabledBackgroundColor,
  disabledLabelVariants,
  pressedBackgroundColor,
  textSizes,
} from './constants';
import { containerSizes } from './styles';

export const getSizeStyle = (size: IconButtonSize = 'normal'): ViewStyle =>
  containerSizes[size];

export const getPressedStyle = (
  theme: Theme = 'light',
  isPressed: boolean
): ViewStyle | undefined =>
  isPressed ? { backgroundColor: pressedBackgroundColor[theme] } : undefined;

export const getDisabledStyle = (
  theme: Theme = 'light',
  isDisabled: boolean
): ViewStyle | undefined =>
  isDisabled ? { backgroundColor: disabledBackgroundColor[theme] } : undefined;

export const getIconTint = (
  theme: Theme = 'light',
  isDisabled: boolean
): string => {
  if (!isDisabled) {
    return palette.grey[600];
  }

  const isDarkTheme = theme === 'dark';

  return isDarkTheme ? palette.grey[700] : palette.grey[500];
};

export const getDisabledLabelVariant = (theme: Theme): TypographyVariant =>
  disabledLabelVariants[theme];

export const getLabelVariant = (
  theme: Theme = 'light',
  isDisabled: boolean
): TypographyVariant =>
  isDisabled ? getDisabledLabelVariant(theme) : undefined;

export const getLabelSize = (size: IconButtonSize = 'small'): TypographySize =>
  textSizes[size];
