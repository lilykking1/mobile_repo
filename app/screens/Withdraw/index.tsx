import React, { FC, useCallback, useState, useRef, useMemo } from 'react';
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/core';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Typography, StickyHeader, SafeArea, Button } from '@app/components';
import { translate } from '@app/i18n';
import { Modal } from '@app/modals';
import { Routes, StackedWalletRoutes } from '@app/navigation/types';

import { palette } from '@app/theme';
import { useKeyboardOffset, useWallet } from '@app/hooks';
import styles from './styles';
import { getKeyboardOpenStyle } from './utils';
import { WithdrawContent } from './fragments';

interface WithdrawProps extends RouteProp<StackedWalletRoutes, 'Withdraw'> {
  route: {
    params: StackedWalletRoutes['Withdraw'];
  };
}

const Withdraw: FC<WithdrawProps> = ({ route: { params = {} } }) => {
  const { selectedCoin: selectedCoinToWithdraw } = params;
  const navigation = useNavigation<NavigationProp<Routes>>();
  const coinSelectorRef = useRef<BottomSheetModal>(null);
  const handleOpenModal = () => coinSelectorRef.current?.present();
  const handleCloseModal = () => coinSelectorRef.current?.close();

  const {
    wallet: { tokens },
  } = useWallet();

  const [walletAddress, setWalletAddress] = useState('');
  const [userSelectedAmount, setUserSelectedAmount] = useState<string | number>(
    0
  );
  const [hasWalletAddressError, setHasWalletAddressError] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(
    selectedCoinToWithdraw || tokens[0]
  );

  const { keyboardOffset } = useKeyboardOffset();
  const keyboardOpenStyle = getKeyboardOpenStyle(keyboardOffset);

  const footerStyle = [styles.footer, keyboardOpenStyle.footer];

  const resetWithdrawValues = useCallback(() => {
    setUserSelectedAmount(0);
    setWalletAddress('');
    setHasWalletAddressError(false);
  }, []);

  const handleSelectCoin = useCallback(
    (chosenCoin) => {
      setSelectedCoin(chosenCoin);
      resetWithdrawValues();
      handleCloseModal();
    },
    [resetWithdrawValues]
  );

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleWithdrawNavigation = () => {
    navigation.navigate('WithdrawConfirmation', {
      coinSymbol: selectedCoin.symbol,
      amount: Number(userSelectedAmount),
      walletAddress,
    });
  };

  const handleHasWithdrawAddressError = useCallback((hasError: boolean) => {
    setHasWalletAddressError(hasError);
  }, []);

  const isValidWithdraw = useMemo(
    () => userSelectedAmount > 0 && walletAddress && !hasWalletAddressError,
    [hasWalletAddressError, userSelectedAmount, walletAddress]
  );

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeArea altLight={palette.white}>
          <StickyHeader
            Title={(
              <Typography strong size="h6">
                {translate('screens.stackedWallet.withdraw.title')}
              </Typography>
            )}
            handleBackPress={handleBackPress}
            altLight={palette.white}
          />
          <WithdrawContent
            selectedCoin={selectedCoin}
            userSelectedAmount={userSelectedAmount}
            setUserSelectedAmount={setUserSelectedAmount}
            walletAddress={walletAddress}
            setWalletAddress={setWalletAddress}
            handleOpenSelectCoinModal={handleOpenModal}
            hasWalletAddressError={hasWalletAddressError}
            handleHasWithdrawAddressError={handleHasWithdrawAddressError}
            keyboardOpenStyle={keyboardOpenStyle}
          />

          <View style={footerStyle}>
            <Button
              size="large"
              variant="primary"
              label={translate('screens.stackedWallet.withdraw.title')}
              onPress={handleWithdrawNavigation}
              style={styles.buttonStyle}
              disabled={!isValidWithdraw}
            />
          </View>
        </SafeArea>
      </TouchableWithoutFeedback>
      <Modal.CoinSelection
        coinBalances={tokens}
        ref={coinSelectorRef}
        handleSelectCoin={handleSelectCoin}
        title={translate('screens.stackedWallet.withdraw.selectCoinModalTitle')}
        searchPlaceholder={translate(
          'screens.stackedWallet.simpleSwap.findCoins'
        )}
      />
    </View>
  );
};

export default Withdraw;
