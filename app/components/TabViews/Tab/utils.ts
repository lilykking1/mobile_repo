import { TypographyVariant } from '@app/components/Typography/types';
import { DISABLED_DARK_COLOR, DISABLED_LIGHT_COLOR } from './constants';

export const getVariant = (
  isSelected: boolean,
  isDarkTheme: boolean
): TypographyVariant | undefined => {
  if (isSelected) {
    return undefined;
  }

  return isDarkTheme ? DISABLED_DARK_COLOR : DISABLED_LIGHT_COLOR;
};
