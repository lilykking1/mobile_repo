import { DetailedReactHTMLElement, ReactElement } from 'react';
import { StyleProp, ViewStyle, PressableStateCallbackType } from 'react-native';
import { ComposedStyle } from '@app/utils/styles';
import { TypographyVariant } from '@app/components/Typography/types';
import { Theme } from '@app/state/stores/settings/types';

export interface ColorsToUse {
  typography: TypographyVariant;
  icon: string;
  backgroundColor: string;
  pressedColor: string;
}

export interface ColorsVariant {
  light: ColorsToUse;
  dark: ColorsToUse;
}

export interface GetContentProps {
  isPressed: boolean;
  isDisabled: boolean;
  iconContent: ReactElement;
  labelContent: ReactElement;
  disabledMessageContent: ReactElement;
}

export interface GetButtonStyleProps {
  size: ActionButtonSize;
  isPressed: boolean;
  isDisabled: boolean;
  style?: PressableStyles;
  fullWidth?: boolean;
  theme?: Theme;
}

export type ActionButtonSize = 'normal' | 'large' | 'small';
export type ActionButtonSizeStyle = ComposedStyle<ActionButtonSize>;

export type CloneElement = DetailedReactHTMLElement<any, HTMLElement>;
export type PressableStyles =
  | StyleProp<ViewStyle>
  | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
