import { TextProps } from 'react-native';
import { AltTypographyColors } from '@app/interfaces/Colors';
import { ComposedStyle } from '@app/utils/styles';

export type TypographySize =
  | 'h0'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'buttons'
  | 'small'
  | 'title';

export type TypographyVariant =
  | 'black'
  | 'main.200'
  | 'main.400'
  | 'main.500'
  | 'main.600'
  | 'secondary.200'
  | 'secondary.400'
  | 'secondary.500'
  | 'secondary.600'
  | 'secondary.800'
  | 'secondary.900'
  | 'white'
  | 'green.500'
  | 'grey.300'
  | 'grey.500'
  | 'grey.600'
  | 'grey.650'
  | 'grey.700'
  | 'grey.900'
  | 'red'
  | 'yellow';

export type TypographySizeStyle = ComposedStyle<TypographySize>;
export type TypographyVariantStyle = ComposedStyle<TypographyVariant>;

export type TextPropsAndColors = TextProps & AltTypographyColors;
