import { palette } from '@app/theme';
import Color from 'color';
import { BACKGROUND_ALPHA, DOLLAR_CHAR } from './constants';

export const getTextPaddingVertical = (coloredBackground: boolean): number =>
  coloredBackground ? 4 : 0;

export const getTextBackgroundColor = (
  coloredBackground: boolean,
  gain: boolean
): string => {
  if (!coloredBackground) {
    return palette.transparent;
  }
  const currentColor = gain ? palette.green[500] : palette.red[500];

  return Color(currentColor).alpha(BACKGROUND_ALPHA).toString();
};

export const formatNumberSubtitle = (
  subtitle: number,
  gain: boolean
): string => {
  const signal = gain ? '+' : '-';

  return `${signal}${DOLLAR_CHAR}${subtitle}`;
};
