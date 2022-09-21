import type { StyleSheet } from 'react-native';
import { TooltipVariant } from './types';
import { variations } from './styles';
import { TypographyVariant } from '../Typography/types';

export const getVariantStyle = (
  variant: TooltipVariant
): StyleSheet.NamedStyles<any> => {
  if (!variant) {
    return variations.success;
  }
  return variations[variant];
};

export const getTextVariantColor = (
  variant: TooltipVariant
): TypographyVariant => {
  switch (variant) {
    case TooltipVariant.SUCCESS:
      return 'green.500';
    case TooltipVariant.WARNING:
      return 'yellow';
    case TooltipVariant.ERROR:
      return 'red';
    default:
      return 'green.500';
  }
};
