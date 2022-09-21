/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  cloneElement,
  DetailedReactHTMLElement,
  ReactNode,
} from 'react';
import type { StyleSheet } from 'react-native';

import { TypographySize } from '@app/components/Typography/types';

import type {
  ActionButtonSize,
  CloneElement,
  ColorsVariant,
  GetButtonStyleProps,
  GetContentProps,
} from './types';
import styles, { sizes } from './styles';
import { ACTIVE_STYLES, DISABLED_STYLES } from './constants';

export const getColors = (isDisabled: boolean): ColorsVariant => {
  if (isDisabled) {
    return DISABLED_STYLES;
  }

  return ACTIVE_STYLES;
};

export const getIconWithRightColor = (
  icon: ReactNode,
  color: string
): DetailedReactHTMLElement<any, HTMLElement> =>
  cloneElement(icon as CloneElement, { tint: color });

export const getSizeStyle = (
  size: ActionButtonSize
): StyleSheet.NamedStyles<any> => {
  switch (size) {
    case 'small':
      return sizes.small;
    case 'large':
      return sizes.large;
    case 'normal':
    default:
      return sizes.normal;
  }
};

export const getLabelSize = (size: ActionButtonSize): TypographySize => {
  switch (size) {
    case 'small':
      return 'body2';
    case 'large':
      return 'body1';
    case 'normal':
    default:
      return 'buttons';
  }
};

export const getButtonStyle = ({
  size,
  isDisabled,
  isPressed,
  style,
  fullWidth,
  theme,
}: GetButtonStyleProps): any[] => {
  const sizeStyle = getSizeStyle(size);
  const baseStyles: any[] = [styles.base, sizeStyle];

  const { backgroundColor, pressedColor } = getColors(isDisabled)[theme];

  baseStyles.push({
    backgroundColor: isPressed ? pressedColor : backgroundColor,
  });

  if (fullWidth) {
    baseStyles.push(styles.fullWidth);
  }

  if (style) {
    baseStyles.push(style);
  }

  return baseStyles;
};

export const getContent = ({
  isDisabled,
  isPressed,
  iconContent,
  labelContent,
  disabledMessageContent,
}: GetContentProps): ReactNode => {
  if (isPressed && isDisabled && disabledMessageContent) {
    return disabledMessageContent;
  }

  return (
    <>
      {iconContent}
      {labelContent}
    </>
  );
};
