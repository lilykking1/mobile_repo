import { StyleSheet } from 'react-native';

export type AccrualCardVariant = 'profit' | 'loss' | 'loss-red' | 'none';
export type AccrualCardSize = 'small' | 'medium' | 'large' | 'xlarge';

export type AccrualCardStyle<T extends string> = Record<
  T,
  StyleSheet.NamedStyles<any>
>;

export type AccrualCardVariantStyle = AccrualCardStyle<AccrualCardVariant>;
export type AccrualCardSizeStyle = AccrualCardStyle<AccrualCardSize>;
