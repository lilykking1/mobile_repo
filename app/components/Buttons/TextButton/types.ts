import { ComposedStyle } from '@app/utils/styles';

export type TextButtonVariant = 'primary' | 'secondary';
export type TextButtonVariantStyle = ComposedStyle<TextButtonVariant>;

export type TextButtonSize = 'normal' | 'large' | 'small';
export type TextButtonSizeStyle = ComposedStyle<TextButtonSize>;
