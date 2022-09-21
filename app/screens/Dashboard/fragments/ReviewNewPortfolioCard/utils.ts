import { Theme } from '@app/state/stores/settings/types';
import { palette } from '@app/theme';

const isDarkTheme = (theme: Theme) => theme === 'dark';

export const getIconTintByTheme = (theme: Theme): string =>
  isDarkTheme(theme) ? palette.grey[600] : palette.grey[500];
