import { ViewStyle } from 'react-native';
import { isArray } from 'lodash';

import { Theme } from '@app/state/stores/settings/types';

import { BackgroundColorVariation } from './types';
import { COLORS } from './constants';

export interface GetStyleProps {
  theme: Theme;
  secondary: boolean;
  customStyle?: ViewStyle | ViewStyle[];
  altLight?: string;
  altDark?: string;
}

export const getBackgroundColor = (
  variation: BackgroundColorVariation,
  theme: Theme,
  altLight?: string,
  altDark?: string
): string => {
  const isDarkTheme = theme === 'dark';

  if (altLight && !isDarkTheme) {
    return altLight;
  }

  if (altDark && isDarkTheme) {
    return altDark;
  }

  return COLORS[variation][theme];
};

const getVariation = (isSecondary: boolean) => {
  if (isSecondary) {
    return BackgroundColorVariation.SECONDARY;
  }

  return BackgroundColorVariation.MAIN;
};

export const getStyles = ({
  theme,
  secondary,
  customStyle,
  altLight,
  altDark,
}: GetStyleProps): ViewStyle[] => {
  const baseStyles: ViewStyle[] = [];

  const variation = getVariation(secondary);

  const backgroundColor = {
    backgroundColor: getBackgroundColor(variation, theme, altLight, altDark),
  };

  baseStyles.push(backgroundColor);

  if (customStyle) {
    if (isArray(customStyle)) {
      baseStyles.push(...customStyle);
    } else {
      baseStyles.push(customStyle);
    }
  }

  return baseStyles;
};
