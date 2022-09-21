import { ViewProps } from 'react-native';
import { AltBackgroundColors } from '@app/interfaces/Colors';

export enum BackgroundColorVariation {
  MAIN = 'main',
  SECONDARY = 'secondary',
  ALT = 'alternative',
}

export type ViewPropsAndColors = ViewProps & AltBackgroundColors;
