import { ViewProps } from 'react-native';

export type ToggleVariant = 'default' | 'disabled';

export type ToggleSize = 'small' | 'medium';

export interface ToggleProps extends ViewProps {
  variant: ToggleVariant;
  disabled?: boolean;
  checked: boolean;
}
