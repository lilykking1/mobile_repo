import { Theme } from '@app/state/stores/settings/types';
import { isEmpty } from 'lodash';
import type { StyleSheet } from 'react-native';

import { lightStyles, darkStyles } from './styles';

export const getContainerStyles = (
  active: boolean,
  touched: boolean,
  error: boolean,
  value: string,
  theme: Theme
): StyleSheet.NamedStyles<any> | null => {
  const displayError = !active && error && touched;
  const isFilled = !isEmpty(value);

  const isDarkTheme = theme === 'dark';
  const isDarkActive = isDarkTheme && active;
  const isDarkFilled = isDarkTheme && isFilled;
  const isDarkError = isDarkTheme && displayError;

  // dark
  if (isDarkActive) {
    return darkStyles.active;
  }
  if (isDarkError) {
    return darkStyles.error;
  }
  if (isDarkFilled) {
    return darkStyles.filled;
  }
  if (isDarkTheme) {
    return darkStyles.default;
  }

  // light
  if (active) {
    return lightStyles.active;
  }
  if (displayError) {
    return lightStyles.error;
  }
  if (isFilled) {
    return lightStyles.filled;
  }

  return lightStyles.default;
};
