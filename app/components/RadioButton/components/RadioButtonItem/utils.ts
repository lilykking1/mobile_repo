import { RadioButtonItemSize, RadioButtonItemVariant } from './types';

import { sizeStyles, inactiveStyles } from './styles';

export const getSizeStyle = (size: RadioButtonItemSize) => {
  switch (size) {
    case 'small':
      return sizeStyles.small;
    case 'normal':
    default:
      return sizeStyles.normal;
  }
};
export const getVariantStyle = (
  variant: RadioButtonItemVariant,
  active: boolean
) => {
  if (active) {
    return null;
  }

  switch (variant) {
    case 'danger':
      return inactiveStyles.danger;
    case 'success':
      return inactiveStyles.success;
    case 'transparent':
      return inactiveStyles.transparent;
    case 'warning':
      return inactiveStyles.warning;
    case 'primary':
    default:
      return inactiveStyles.primary;
  }
};
export const getTypographySize = (size) => {
  switch (size) {
    case 'small':
      return 'body2';
    case 'normal':
    default:
      return 'buttons';
  }
};
