import React, { FC, useCallback } from 'react';
import { Button, Typography } from '@app/components';
import { View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { translate } from '@app/i18n';
import { Routes } from '@app/navigation/types';

import { getKeyboardOpenStyle, getIsSwapAvailable } from './utils';
import styles from './styles';

interface SimpleSwapFooterProps {
  keyboardOffset: number;
  fromCoinName: string;
  coinAmount: number;
  toCoinName: string;
  userSelectedAmount: number;
  convertedValue: number;
}

const SimpleSwapFooter: FC<SimpleSwapFooterProps> = ({
  keyboardOffset,
  fromCoinName,
  coinAmount,
  toCoinName,
  userSelectedAmount,
  convertedValue,
}) => {
  const footerStyle = getKeyboardOpenStyle(keyboardOffset);
  const isSwapAvailable = getIsSwapAvailable(
    userSelectedAmount,
    Number(coinAmount),
    fromCoinName
  );
  const navigation = useNavigation<NavigationProp<Routes>>();

  const handleSwapNavigation = useCallback(() => {
    navigation.navigate('SimpleSwapConfirmation', {
      coinFrom: fromCoinName,
      amountFrom: userSelectedAmount,
      coinTo: toCoinName,
      amountTo: convertedValue,
      swapTitle: translate('swap.confirmations.title'),
    });
  }, [
    navigation,
    fromCoinName,
    userSelectedAmount,
    toCoinName,
    convertedValue,
  ]);

  return (
    <>
      <View style={footerStyle}>
        <Typography style={styles.marketMessage}>
          {translate(
            'screens.stackedWallet.simpleSwap.marketVolatilityMessage'
          )}
        </Typography>
        <Button
          size="large"
          variant={isSwapAvailable.variant}
          label={isSwapAvailable.buttonText}
          onPress={handleSwapNavigation}
          style={styles.buttonStyle}
          disabled={isSwapAvailable.isDisabled}
        />
      </View>
    </>
  );
};

export default SimpleSwapFooter;
