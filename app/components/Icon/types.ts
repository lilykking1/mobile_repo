import { PaletteColor } from '@app/theme';
import { ViewStyle } from 'react-native';

export interface IconProps {
  tint?: PaletteColor;
  width?: number;
  height?: number;
  customStyle?: ViewStyle;
}
