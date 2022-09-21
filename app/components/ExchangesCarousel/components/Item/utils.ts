/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './styles';

export const getStyle = (isSelected: boolean): any[] => {
  const baseStyles: any[] = [styles.container];

  if (isSelected) {
    baseStyles.push(styles.selected);
  }

  return baseStyles;
};
