import { StyleSheet } from 'react-native';

import { palette } from '@app/theme';
import { getFontStyleForWeight } from '@app/utils/font';

import { TypographySizeStyle, TypographyVariantStyle } from './types';

export const variationsStyle = StyleSheet.create<TypographyVariantStyle>({
  black: {
    color: palette.black,
  },
  'green.500': {
    color: palette.green[500],
  },
  'grey.300': {
    color: palette.grey[300],
  },
  'grey.500': {
    color: palette.grey[500],
  },
  'grey.600': {
    color: palette.grey[600],
  },
  'grey.650': {
    color: palette.grey[650],
  },
  'grey.700': {
    color: palette.grey[700],
  },
  'grey.900': {
    color: palette.grey[900],
  },
  'main.200': {
    color: palette.royalBlue[200],
  },
  'main.400': {
    color: palette.royalBlue[400],
  },
  'main.500': {
    color: palette.royalBlue[500],
  },
  'main.600': {
    color: palette.royalBlue[600],
  },
  red: {
    color: palette.red[500],
  },
  'secondary.200': {
    color: palette.royalBlue[200],
  },
  'secondary.400': {
    color: palette.royalBlue[400],
  },
  'secondary.500': {
    color: palette.royalBlue[500],
  },
  'secondary.600': {
    color: palette.royalBlue[600],
  },
  'secondary.800': {
    color: palette.royalBlue[800],
  },
  'secondary.900': {
    color: palette.royalBlue[900],
  },
  white: {
    color: palette.white,
  },
  yellow: {
    color: palette.yellow[600],
  },
});

export const sizesStyle = StyleSheet.create<TypographySizeStyle>({
  body1: {
    fontSize: 16,
    lineHeight: 24,
  },
  body2: {
    fontSize: 12,
  },
  buttons: {
    fontSize: 14,
  },
  h0: {
    fontSize: 60,
  },
  h1: {
    fontSize: 46,
  },
  h2: {
    fontSize: 32,
  },
  h3: {
    fontSize: 26,
  },
  h4: {
    fontSize: 22,
  },
  h5: {
    fontSize: 20,
  },
  h6: {
    fontSize: 18,
  },
  small: {
    fontSize: 10,
  },
  title: {
    fontSize: 36,
  },
});

export const styles = StyleSheet.create({
  base: {
    ...getFontStyleForWeight({
      fontFamily: 'VisueltPro',
    }),
  },
  strong: {
    ...getFontStyleForWeight({
      fontFamily: 'VisueltPro',
      fontWeight: '500',
    }),
  },
});

export default styles;
