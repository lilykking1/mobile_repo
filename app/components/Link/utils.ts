import type { StyleSheet } from 'react-native';

import { LinkSize, LinkVariant } from './types';
import styles, { sizes, variations } from './styles';

const getSizeStyle = (size: LinkSize): StyleSheet.NamedStyles<any> =>
  sizes[size] || sizes.normal;

const getVariantStyle = (variant: LinkVariant): StyleSheet.NamedStyles<any> => {
  switch (variant) {
    case 'danger':
      return variations.danger;
    case 'inverted':
      return variations.inverted;
    case 'success':
      return variations.success;
    case 'transparent':
      return variations.transparent;
    case 'primary':
    default:
      return variations.primary;
  }
};

const getUnderlinedStyle = (underlined: boolean, variant: LinkVariant) => {
  const underlineStyle = getVariantStyle(variant);

  if (underlined) {
    return { ...styles.underlined, borderBottomColor: underlineStyle.color };
  }

  return {};
};

export const getLinkStyle = (variant: LinkVariant, underline: boolean) => [
  getUnderlinedStyle(underline, variant),
];

export const getLabelStyle = (variant: LinkVariant, size: LinkSize) => [
  styles.base,
  getSizeStyle(size),
  getVariantStyle(variant),
];
