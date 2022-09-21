import { CardVariant, CardSize } from '../types';

export const variants: Record<CardVariant, CardVariant> = {
  white: 'white',
  grey: 'grey',
  dark: 'dark',
  green: 'green',
  red: 'red',
  transparent: 'transparent',
};

export const sizes: Record<CardSize, CardSize> = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  xlarge: 'xlarge',
};
