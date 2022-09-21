import { ComposedStyle } from '@app/utils/styles';

export type ButtonVariant = 'primary' | 'secondary' | 'green' | 'red';
export type ButtonVariantStyle = ComposedStyle<ButtonVariant>;

export type ButtonSize = 'normal' | 'large' | 'small';
export type ButtonSizeStyle = ComposedStyle<ButtonSize>;
