import { StyleSheet, TextStyle } from 'react-native';
import { merge, reduce } from 'lodash';

export type ComposedStyle<T extends string> = Record<
  T,
  StyleSheet.NamedStyles<any>
>;

export const textStyle: Array<keyof TextStyle> = [
  'color',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'includeFontPadding',
  'fontVariant',
  'letterSpacing',
  'lineHeight',
  'textAlign',
  'textAlignVertical',
  'textDecorationColor',
  'textDecorationLine',
  'textDecorationStyle',
  'textShadowColor',
  'textShadowOffset',
  'textShadowRadius',
  'textTransform',
  'writingDirection',
];

export const mergeStyles = (
  styles: Array<any>
): StyleSheet.NamedStyles<any> => {
  const reducer = (result, style) => merge(result, style);

  return reduce(styles, reducer, {});
};

export const extractStyles = <
  ContainerKey extends string,
  ContentKey extends string
>(
  styles: Array<any>,
  containerKey: ContainerKey,
  contentKey: ContentKey
): Record<ContainerKey | ContentKey, StyleSheet.NamedStyles<any>> => {
  const merged = mergeStyles(styles);
  const result = {
    [containerKey]: {},
    [contentKey]: {},
  };

  const reducer = (accumulator, value, key) => {
    const type = textStyle.includes(key) ? contentKey : containerKey;

    return {
      ...accumulator,
      [type]: {
        ...accumulator[type],
        [key]: value,
      },
    };
  };

  return reduce(merged, reducer, result);
};
