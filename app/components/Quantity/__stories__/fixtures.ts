import {
  TypographySize,
  TypographyVariant,
} from '@app/components/Typography/types';

export const sizes: Record<TypographySize, TypographySize> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'body',
  small: 'small',
  emphasis: 'emphasis',
  highlight: 'highlight',
};

export const variants: Record<TypographyVariant, TypographyVariant> = {
  primary: 'primary',
  success: 'success',
  danger: 'danger',
  inverted: 'inverted',
  opaque: 'opaque',
  transparent: 'transparent',
};
