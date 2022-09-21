import { ComposedStyle } from '@app/utils/styles';

export type LinkVariant =
  | 'primary'
  | 'success'
  | 'danger'
  | 'inverted'
  | 'transparent';
export type LinkSize = 'normal' | 'large' | 'small';

export type LinkSizeStyle = ComposedStyle<LinkSize>;
export type LinkVariantStyle = ComposedStyle<LinkVariant>;
