import { ViewStyle, TextStyle, ImageSourcePropType } from 'react-native';
import { TypographySize } from '@app/components/Typography/types';

interface AnimationObject {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: any[];
  layers: any[];
}

export interface SlideProps {
  image?: ImageSourcePropType;
  title?: string;
  subtitle?: string;
  lottieAnimation?: AnimationObject;
  bottomContainerStyle: ViewStyle;
  titleFontSize?: TypographySize;
  subtitleFontSize?: TypographySize;
  extraTitleStyle?: TextStyle;
  extraSubtitleStyle?: TextStyle;
}
