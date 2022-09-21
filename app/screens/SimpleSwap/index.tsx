import React, { FC, useCallback, useState, useRef, useContext } from 'react';
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { observer } from 'mobx-react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { RootContext } from '@app/state';
import {
  AmountInput,
  CryptoButton,
  Icon,
  Typography,
  SafeArea,
} from '@app/components';
import { translate } from '@app/i18n';
import { Modal } from '@app/modals';

import { palette } from '@app/theme';
import { useKeyboardOffset, useWallet } from '@app/hooks';
import { StackedWalletRoutes } from '@app/navigation/types';
import { RouteProp } from '@react-navigation/core';
import { SimpleSwapHeader, SimpleSwapFooter } from './fragments';
import { MODAL_OPTIONS } from './constants';
import styles from './styles';
import {
  getKeyboardOpenStyle,
  getArrowContainerStyle,
  getMockedConversionValues,
  getBorderStyle,
  getTheHighestHoldingCoin,
  getSwapToCoin,
} from './utils';

interface SimpleSwapProps extends RouteProp<StackedWalletRoutes, 'SimpleSwap'> {
  route: {
    params: StackedWalletRoutes['SimpleSwap'];
  };
}

const SimpleSwap: FC<SimpleSwapProps> = ({ route: { params = {} } }) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const {
    wallet: { tokens },
  } = useWallet();

  const { selectedCoin } = params;

  const coinSelectorRef = useRef<BottomSheetModal>(null);
  const handleOpenModal = () => coinSelectorRef.current?.present();
  const handleCloseModal = () => coinSelectorRef.current?.close();

  const [selectedModal, setSelectedModal] = useState<MODAL_OPTIONS | null>(
    null
  );
  const [userSelectedAmount, setUserSelectedAmount] = useState<number | string>(
    0
  );
  const [fromCoinSelected, setFromCoinSelected] = useState(
    () => selectedCoin || getTheHighestHoldingCoin(tokens)
  );
  const [toCoinSelected, setToCoinSelected] = useState(() =>
    getSwapToCoin(tokens, selectedCoin?.symbol)
  );

  const arrowContainerStyle = getArrowContainerStyle(theme);
  const arrowDown = <Icon.ArrowDown tint={arrowContainerStyle.arrowTint} />;
  const arrowUp = <Icon.ArrowUp tint={arrowContainerStyle.arrowTint} />;

  const convertedValue = getMockedConversionValues(
    userSelectedAmount,
    fromCoinSelected.symbol,
    toCoinSelected.symbol
  );
  const { keyboardOffset } = useKeyboardOffset();
  const keyboardOpenStyle = getKeyboardOpenStyle(keyboardOffset);

  const swapContainerStyle = [styles.swapContainer, keyboardOpenStyle];
  const borderStyle = [styles.fromCoinContainer, getBorderStyle(theme)];

  const onMaxSelect = useCallback(() => {
    setUserSelectedAmount(Number(fromCoinSelected.coinAmount));
  }, [fromCoinSelected.coinAmount]);

  const onCoinSwap = useCallback(() => {
    setFromCoinSelected(toCoinSelected);
    setToCoinSelected(fromCoinSelected);
    setUserSelectedAmount(0);
  }, [toCoinSelected, fromCoinSelected]);

  const handleOpenSelectFromCoinModal = useCallback(() => {
    Keyboard.dismiss();
    setSelectedModal(MODAL_OPTIONS.from);
    handleOpenModal();
  }, []);

  const handleOpenSelectToCoinModal = useCallback(() => {
    Keyboard.dismiss();
    setSelectedModal(MODAL_OPTIONS.to);
    handleOpenModal();
  }, []);

  const handleSelectFromCoin = useCallback(
    (chosenCoin) => {
      if (toCoinSelected.symbol !== chosenCoin.symbol) {
        setFromCoinSelected(chosenCoin);
        setUserSelectedAmount(0);
      } else {
        alert(
          translate('screens.stackedWallet.simpleSwap.selectDifferentCoins')
        );
      }
      handleCloseModal();
    },
    [toCoinSelected.symbol]
  );

  const handleSelectToCoin = useCallback(
    (chosenCoin) => {
      if (fromCoinSelected.symbol !== chosenCoin.symbol) {
        setToCoinSelected(chosenCoin);
        setUserSelectedAmount(0);
      } else {
        alert(
          translate('screens.stackedWallet.simpleSwap.selectDifferentCoins')
        );
      }
      handleCloseModal();
    },
    [fromCoinSelected.symbol]
  );

  const handleSelectCoin = useCallback(
    (chosenCoin) => {
      if (selectedModal === MODAL_OPTIONS.from) {
        handleSelectFromCoin(chosenCoin);
      }
      if (selectedModal === MODAL_OPTIONS.to) {
        handleSelectToCoin(chosenCoin);
      }
    },
    [handleSelectFromCoin, handleSelectToCoin, selectedModal]
  );

  return (
    <SafeArea
      altLight={palette.white}
      altDark={palette.royalBlue[1000]}
      edges={['bottom']}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeArea altLight={palette.white}>
          <SimpleSwapHeader />
          <View style={swapContainerStyle}>
            <View style={borderStyle}>
              <CryptoButton
                coin={fromCoinSelected.symbol}
                onPress={handleOpenSelectFromCoinModal}
              />
              <View style={styles.amountInputContainer}>
                <AmountInput
                  value={userSelectedAmount.toString()}
                  placeholder="0"
                  onChangeText={(text) => setUserSelectedAmount(text)}
                  fiatAmount={Number(fromCoinSelected.fiatAmount)}
                  coinAmount={Number(fromCoinSelected.coinAmount)}
                  coinSymbol={fromCoinSelected.symbol}
                  shouldShowMaxButton
                  onMaxSelect={onMaxSelect}
                />
              </View>
              <TouchableOpacity
                style={arrowContainerStyle.container}
                onPress={onCoinSwap}
              >
                {arrowDown}
                {arrowUp}
              </TouchableOpacity>
            </View>
            <View style={styles.toCoinContainer}>
              <View style={styles.toCoinButton}>
                <CryptoButton
                  coin={toCoinSelected.symbol}
                  onPress={handleOpenSelectToCoinModal}
                />
              </View>
              <Typography
                size="body2"
                variant="grey.600"
                style={styles.youWillGetText}
              >
                {translate('screens.stackedWallet.simpleSwap.youWillGet')}
              </Typography>
              <Typography strong size="h2" style={styles.youWillGetValue}>
                {convertedValue}
              </Typography>
            </View>
          </View>
          <SimpleSwapFooter
            keyboardOffset={keyboardOffset}
            fromCoinName={fromCoinSelected.symbol}
            coinAmount={Number(fromCoinSelected.coinAmount)}
            toCoinName={toCoinSelected.symbol}
            userSelectedAmount={Number(userSelectedAmount)}
            convertedValue={Number(convertedValue)}
          />
        </SafeArea>
      </TouchableWithoutFeedback>
      <Modal.CoinSelection
        coinBalances={tokens}
        ref={coinSelectorRef}
        handleSelectCoin={handleSelectCoin}
        title={translate(`screens.stackedWallet.simpleSwap.${selectedModal}`)}
        searchPlaceholder={translate(
          'screens.stackedWallet.simpleSwap.findCoins'
        )}
      />
    </SafeArea>
  );
};

export default observer(SimpleSwap);
