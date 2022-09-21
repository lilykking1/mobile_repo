import { Options } from '@app/components/ToggleIcons/types';
import { ComposedStyle } from '@app/utils/styles';

export type ToggleIconsVariant =
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'default';

export type ToggleVariantStyle = ComposedStyle<ToggleIconsVariant>;
export type Dimensions = Record<Options, number>;
