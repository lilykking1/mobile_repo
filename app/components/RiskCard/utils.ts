import { Dimensions, ViewStyle } from 'react-native';
import { RiskCardSize } from '@app/components/RiskCard/types';
import { TypographySize } from '@app/components/Typography/types';
import { Theme } from '@app/state/stores/settings/types';
import {
  LABEL_MARGIN_TOP,
  RATIO_HEIGHT_LARGE,
  RATIO_HEIGHT_NORMAL,
  RATIO_HEIGHT_SMALL,
  RATIO_LINE_HEIGHT_LARGE,
  RATIO_LINE_HEIGHT_NORMAL,
  RATIO_LINE_HEIGHT_SMALL,
} from './constants';

const { width } = Dimensions.get('window');

const getRatioBySize = (size: RiskCardSize): number => {
  switch (size) {
    case 'normal':
      return RATIO_LINE_HEIGHT_NORMAL;
    case 'large':
      return RATIO_LINE_HEIGHT_LARGE;
    default:
      return RATIO_LINE_HEIGHT_SMALL;
  }
};

export const getValueLineHeight = (size: RiskCardSize): number =>
  width * getRatioBySize(size);

export const getValueSize = (size: RiskCardSize): TypographySize => {
  switch (size) {
    case 'normal':
      return 'h3';
    case 'large':
      return 'h1';
    default:
      return 'h5';
  }
};

export const getValueHeight = (size: RiskCardSize): number => {
  switch (size) {
    case 'normal':
      return width * RATIO_HEIGHT_NORMAL;
    case 'large':
      return width * RATIO_HEIGHT_LARGE;
    default:
      return width * RATIO_HEIGHT_SMALL;
  }
};

export const getLabelSize = (size: RiskCardSize): TypographySize => {
  switch (size) {
    case 'normal':
      return 'body2';
    case 'large':
      return 'body1';
    default:
      return 'small';
  }
};

export const getLabelLetterSpacing = (size: RiskCardSize): number => {
  switch (size) {
    case 'normal':
      return 1;
    case 'large':
      return 6;
    default:
      return 0.5;
  }
};

export const getLabelPaddingLeft = (size: RiskCardSize): number => {
  switch (size) {
    case 'normal':
      return 1;
    case 'large':
      return 6;
    default:
      return 0.5;
  }
};

export const getPaddingBase = (size: RiskCardSize): number => {
  switch (size) {
    case 'normal':
      return 10;
    default:
      return 15;
  }
};

export const getPaddingContent = (size: RiskCardSize): number => {
  switch (size) {
    case 'normal':
      return 2;
    default:
      return 1;
  }
};

export const getLabelContainerStyleByTheme = (theme: Theme): ViewStyle[] => [
  {
    marginTop: LABEL_MARGIN_TOP[theme],
  },
];
