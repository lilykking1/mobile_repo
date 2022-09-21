import { Theme } from '@app/state/stores/settings/types';
import type { StyleSheet } from 'react-native';
import { removeStringCommas } from '../../utils';
import { REGEX_FIAT_AMOUNT_VALIDATION } from './constants';
import { textStyles } from './styles';

export const getTextInputStyles = (
  theme: Theme
): StyleSheet.NamedStyles<any> | null => {
  const isDarkTheme = theme === 'dark';

  // dark
  if (isDarkTheme) {
    return textStyles.dark;
  }

  return textStyles.light;
};

export const removeString$ = (stringText: string): string =>
  stringText.replaceAll('$', '');

export const formatFiatInputValue = (fiatInputValue: string): string => {
  const fiatInputValueWithoutCommas = removeStringCommas(fiatInputValue);
  return removeString$(fiatInputValueWithoutCommas);
};

export const validateAmountString = (
  amountString: string,
  amountStringFormatted: string
): boolean => {
  const isAmountValid = new RegExp(REGEX_FIAT_AMOUNT_VALIDATION).test(
    amountStringFormatted
  );
  if (isAmountValid || amountString === '' || amountString === '$') {
    return true;
  }

  return false;
};

export const checkIsAmountStringValid = (amountString: string): boolean => {
  const amountStringFormatted = formatFiatInputValue(amountString);
  return validateAmountString(amountString, amountStringFormatted);
};
