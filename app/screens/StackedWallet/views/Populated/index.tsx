import React, { FC, useCallback, useMemo, useState, useRef } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { ContainerWithScrollableHeader, SafeArea } from '@app/components';
import useStickyHandler from '@app/hooks/useStickyHandler';
import { Routes } from '@app/navigation/types';
import Modal from '@app/modals/bottomSheetModals';
import { useBraze, useWallet } from '@app/hooks';
import { BrazeWalletEvents } from '@app/utils/braze/events/wallet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { AmplitudeWalletEvents, logAmplitudeEvent } from '@app/utils/amplitude';
import { AmplitudeWalletProps } from '@app/utils/amplitude/constants/wallet/properties';
import { FixedHeader, Header, Content } from './fragments';
import { BITCOIN_SUFFIX, DOLLAR_CHAR } from './constants';
import styles from './styles';

const Populated: FC = () => {
  const swapCoinsBottomSheetRef = useRef<BottomSheetModal>(null);
  const navigation = useNavigation<NavigationProp<Routes>>();
  const [isValuesSecret, setIsValueSecret] = useState(false);
  const [isValuesInBitcoin, setIsValuesInBitcoin] = useState<boolean>(false);
  const { logBrazeCustomEvent } = useBraze();
  const { wallet } = useWallet();

  const handleGoToDepositFlow = useCallback(() => {
    const amplitudeData = {};
    amplitudeData[`${AmplitudeWalletProps.LOCATION}`] =
      AmplitudeWalletProps.WALLET_PAGE;
    logAmplitudeEvent(AmplitudeWalletEvents.DEPOSIT);
    logBrazeCustomEvent(BrazeWalletEvents.DEPOSIT);
    navigation.navigate('WalletAddress');
  }, [navigation, logBrazeCustomEvent]);

  const valuesPrefixAndSuffix = useMemo(() => {
    if (isValuesInBitcoin) {
      return {
        prefix: undefined,
        suffix: BITCOIN_SUFFIX,
      };
    }

    return {
      prefix: DOLLAR_CHAR,
      suffix: undefined,
    };
  }, [isValuesInBitcoin]);

  const { scroll, handleScrollWithScrollView } = useStickyHandler(undefined);

  const handleSwap = useCallback(() => {
    logAmplitudeEvent(AmplitudeWalletEvents.SWAP);
    logBrazeCustomEvent(BrazeWalletEvents.SWAP);
    swapCoinsBottomSheetRef.current?.present();
  }, [logBrazeCustomEvent]);

  const handleWithdraw = useCallback(() => {
    logAmplitudeEvent(AmplitudeWalletEvents.WITHDRAW);
    logBrazeCustomEvent(BrazeWalletEvents.WITHDRAW);
    navigation.navigate('Withdraw');
  }, [navigation, logBrazeCustomEvent]);

  const stickyHeader = (
    <FixedHeader
      scrollYValue={scroll}
      isValuesSecret={isValuesSecret}
      isValuesInBitcoin={isValuesInBitcoin}
      prefixValues={valuesPrefixAndSuffix.prefix}
      suffixValues={valuesPrefixAndSuffix.suffix}
      walletValue={wallet.totalInvested}
      onPressSecretAction={setIsValueSecret}
      onPressToggleCurrency={setIsValuesInBitcoin}
      onPressQRCodeAction={handleGoToDepositFlow}
    />
  );

  const header = (
    <Header
      isValuesInBitcoin={isValuesInBitcoin}
      isValuesSecret={isValuesSecret}
      prefixValue={valuesPrefixAndSuffix.prefix}
      suffixValue={valuesPrefixAndSuffix.suffix}
      handlePressDeposit={handleGoToDepositFlow}
      handlePressSwap={handleSwap}
      handlePressWithdraw={handleWithdraw}
    />
  );

  const content = (
    <Content
      isValuesSecret={isValuesSecret}
      prefixValue={valuesPrefixAndSuffix.prefix}
      suffixValue={valuesPrefixAndSuffix.suffix}
      tokens={wallet.tokens}
      transactions={wallet.transactions}
    />
  );

  return (
    <>
      <SafeArea secondary edges={['top']} style={styles.container}>
        <ContainerWithScrollableHeader
          stickyHeader={stickyHeader}
          regularHeader={header}
          content={content}
          onScroll={handleScrollWithScrollView}
          useFlatList
        />
      </SafeArea>
      <Modal.SwapCoins ref={swapCoinsBottomSheetRef} />
    </>
  );
};

export default Populated;
