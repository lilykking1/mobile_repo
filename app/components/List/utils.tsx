/* eslint-disable @typescript-eslint/no-explicit-any */
import { ViewStyle } from 'react-native';
import styles from './styles';

export const getStyles = (
  hasHeader: boolean,
  isListEmpty: boolean,
  customContentStyle: ViewStyle
): any[] => {
  const baseStyles: any[] = [styles.container];

  if (!hasHeader) {
    baseStyles.push(styles.spacing);
  }

  if (isListEmpty) {
    return [styles.emptyContainer];
  }

  if (customContentStyle) {
    baseStyles.push(customContentStyle);
  }

  return baseStyles;
};

export const getHeaderStyles = (
  hasHeader: boolean,
  customStyle: ViewStyle
): ViewStyle => {
  const baseStyles: ViewStyle = styles.listHeaderContainer;

  if (hasHeader && !!customStyle) {
    return customStyle;
  }

  return baseStyles;
};
