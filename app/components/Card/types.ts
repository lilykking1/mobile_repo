import { StyleSheet } from 'react-native';

export type CardVariant =
  | 'white'
  | 'transparent'
  | 'red'
  | 'green'
  | 'grey'
  | 'dark';
export type CardSize = 'small' | 'medium' | 'large' | 'xlarge';

export type CardStyle<T extends string> = Record<
  T,
  StyleSheet.NamedStyles<any>
>;

export type CardVariantStyle = CardStyle<CardVariant>;
export type CardSizeStyle = CardStyle<CardSize>;
