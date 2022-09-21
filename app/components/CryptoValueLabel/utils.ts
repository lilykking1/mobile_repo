/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './styles';
import { CryptoValueLabelVariant } from './types';

export const getSuffixStyles = (
  suffixStyled: boolean,
  variant: CryptoValueLabelVariant
): any[] => [
  suffixStyled ? styles.styledLabel : styles.valueLabel,
  { paddingBottom: variant === 'large' ? 10 : 0 },
];

export const getPrefixStyles = (prefixStyled: boolean): any[] => {
  if (prefixStyled) {
    return [styles.styledLabel];
  }

  return [styles.valueLabel];
};
