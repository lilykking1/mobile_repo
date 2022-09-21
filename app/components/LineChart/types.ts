import { PaletteColor } from '@app/theme';

export type CurveShape = 'linear' | 'monotone';

export interface GradientStop {
  stopOpacity: number;
  offset: string;
  stopColor: PaletteColor;
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface CustomPanGestureState {
  opacity: number;
  xValue: number;
}

export type PanGestureState = 0 | 1 | 2 | 3 | 4 | 5;
