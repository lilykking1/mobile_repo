import type { TextInputProps } from 'react-native';
import type { BottomSheetTextInputProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetTextInput';
import { TypographyVariant } from '@app/components/Typography/types';
import { ComposedStyle } from '@app/utils/styles';

export type InputColorVariant = 'filled' | 'disabled';

export type InputStyleVariant = ComposedStyle<InputColorVariant>;

// Force to have useBottomSheet defined for extending BottomSheetTextInputProps
export type BottomSheetInput<T> = T &
  BottomSheetTextInputProps & {
    useBottomSheet: true;
  };

// Force to have useBottomSheet undefined for extending TextInputProps
export type RegularInput<T> = T &
  TextInputProps & {
    useBottomSheet?: false;
  };

// Combine the two possibilities, forcing the correct props
export type ComposedInput<T> = BottomSheetInput<T> | RegularInput<T>;

export interface ThemeItems {
  suffix: TypographyVariant;
  suffixEditing: TypographyVariant;
}

export interface ThemeVariant {
  light: ThemeItems;
  dark: ThemeItems;
}
