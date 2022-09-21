/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './styles';

export const getStyle = (
  isSelected: boolean,
  isAddExchangeSelected: boolean
): any[] => {
  const baseStyles: any[] = [styles.container];

  if (isSelected) {
    baseStyles.push(styles.selected);
  } else {
    baseStyles.push(styles.regular);
  }

  if (isAddExchangeSelected) {
    baseStyles.push(styles.invisible);
  }

  return baseStyles;
};
