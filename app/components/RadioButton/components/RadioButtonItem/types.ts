import {
  RadioButtonSize,
  RadioButtonVariant,
} from '@app/components/RadioButton/types';
import { ComposedStyle } from '@app/utils/styles';

export type RadioButtonItemSize = RadioButtonSize;
export type RadioButtonItemVariant = RadioButtonVariant;

export type RadioButtonItemSizeStyle = ComposedStyle<RadioButtonItemSize>;
export type RadioButtonItemVariantStyle = ComposedStyle<RadioButtonItemVariant>;
