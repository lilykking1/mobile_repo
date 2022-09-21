import { LinkSize, LinkVariant } from '../types';

export const sizes: Record<LinkSize, LinkSize> = {
  normal: 'normal',
  large: 'large',
};

export const variants: Record<LinkVariant, LinkVariant> = {
  primary: 'primary',
  success: 'success',
  danger: 'danger',
  transparent: 'transparent',
  inverted: 'inverted',
};
