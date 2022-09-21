import React from 'react';
import type { StyleSheet } from 'react-native';
import { View } from 'react-native';

import { Theme } from '@app/state/stores/settings/types';
import { translate } from '@app/i18n';
import { Quantity } from '@app/components';
import { REGEX_AMOUNT_VALIDATION } from './constants';
import { darkTextStyles, lightTextStyles, styles } from './styles';

export const getTextInputStyles = (
  isInputFocused: boolean,
  theme: Theme
): StyleSheet.NamedStyles<any> | null => {
  const isDarkTheme = theme === 'dark';
  const isDarkActive = isDarkTheme && isInputFocused;

  // dark
  if (isDarkActive) {
    return darkTextStyles.active;
  }

  if (isDarkTheme) {
    return darkTextStyles.default;
  }

  // light
  if (isInputFocused) {
    return lightTextStyles.active;
  }

  return lightTextStyles.default;
};

export const getAvailableConversionText = (
  fromCoinValue: number,
  fromCoinName: string,
  userBalance?: number
) => (
  <View style={styles.quantitiesContainer}>
    <Quantity
      style={styles.inputTextStyle}
      value={fromCoinValue}
      suffix={` ${fromCoinName}`}
    />
    {userBalance && (
      <Quantity
        style={styles.inputTextStyle}
        prefix=" ($"
        value={userBalance}
        suffix={translate('screens.stackedWallet.simpleSwap.available')}
      />
    )}
  </View>
);

export const getIsAmountCharValid = (amountCharacter: any): boolean => {
  const isAmountValid = new RegExp(REGEX_AMOUNT_VALIDATION).test(
    amountCharacter
  );

  const isFirstDor = amountCharacter[0] === '.';

  if (isAmountValid && !isFirstDor) {
    return true;
  }

  return false;
};
