import { Theme } from '@app/state/stores/settings/types';

export const getBorderColor = (
  theme: Theme = 'light',
  darkColor: string,
  lightColor: string
): string => (theme === 'dark' ? darkColor : lightColor);
