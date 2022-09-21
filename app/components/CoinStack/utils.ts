import { TypographyVariant } from '../Typography/types';

/**
 * Get the right Typography variant for the selected theme
 * @param {boolean} isDarkTheme if the selected theme is dark
 * @returns the right Typography variant for item
 */
export const getTextVariant = (isDarkTheme: boolean): TypographyVariant =>
  isDarkTheme ? 'white' : 'grey.600';
