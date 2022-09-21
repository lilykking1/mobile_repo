import { ComposedStyle } from '@app/utils/styles';

export type RadioButtonVariant =
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'transparent';
export type RadioButtonSize = 'normal' | 'small';

export type RadioButtonVariantStyle = ComposedStyle<RadioButtonVariant>;
