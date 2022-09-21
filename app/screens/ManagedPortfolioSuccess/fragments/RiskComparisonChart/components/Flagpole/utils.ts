import { Theme } from '@app/state/stores/settings/types';

export const getColor = (
  theme: Theme = 'light',
  darkColor: string,
  lightColor: string
): string => (theme === 'dark' ? darkColor : lightColor);
