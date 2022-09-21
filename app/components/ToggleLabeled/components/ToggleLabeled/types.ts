import { ComposedStyle } from '@app/utils/styles';

export type ToggleVariant =
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'default';

export type Options = 'left' | 'right';

export type ToggleVariantStyle = ComposedStyle<ToggleVariant>;
export type Dimensions = Record<Options, number>;
