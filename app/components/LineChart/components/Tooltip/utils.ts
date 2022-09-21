import { TypographyVariant } from '@app/components/Typography/types';

export const getTitleTextColorVariant = (
  isDarkTheme: boolean
): TypographyVariant => {
  if (isDarkTheme) {
    return 'grey.300';
  }

  return 'secondary.900';
};

export const getDescriptionTextColorVariant = (
  isDarkTheme: boolean
): TypographyVariant => {
  if (isDarkTheme) {
    return 'grey.600';
  }

  return 'grey.600';
};
