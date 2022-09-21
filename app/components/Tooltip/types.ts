import { StyleSheet } from 'react-native';

export enum TooltipVariant {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

export type TooltipStyle<T extends string> = Record<
  T,
  StyleSheet.NamedStyles<any>
>;
export type TooltipVariantStyle = TooltipStyle<TooltipVariant>;
