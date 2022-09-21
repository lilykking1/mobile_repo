import { StatusBarStyle } from 'react-native';

export interface StatusVariant {
  light: StatusBarStyle;
  dark: StatusBarStyle;
}

export const STATUS_BAR_DARK_VARIANT = 'dark-content';
export const STATUS_BAR_LIGHT_VARIANT = 'light-content';

export const StatusBarVariants: StatusVariant = {
  light: STATUS_BAR_DARK_VARIANT,
  dark: STATUS_BAR_LIGHT_VARIANT,
};
