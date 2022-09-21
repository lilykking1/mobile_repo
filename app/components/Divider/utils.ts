import { Theme } from '@app/state/stores/settings/types';
import { COLORS } from './constants';

export const getBackgroundColor = (
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

  return COLORS[theme];
};
