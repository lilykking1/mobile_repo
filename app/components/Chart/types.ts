export type CurveShape = 'linear' | 'monotone';

export interface GradientStop {
  stopOpacity: number;
  offset: string;
  stopColor: string;
}
