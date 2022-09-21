import { palette } from '@app/theme';

export const getIconTint = (isDarkTheme: boolean): string =>
  isDarkTheme ? palette.grey[600] : palette.royalBlue[900];
