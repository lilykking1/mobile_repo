import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';
import { useNavigation, NavigationProp } from '@react-navigation/core';

import { translate } from '@app/i18n';
import BottomSheetModal from '@app/components/BottomSheetModal';
import { Routes } from '@app/navigation/types';
import { AmplitudeWalletEvents, logAmplitudeEvent } from '@app/utils/amplitude';
import { useBraze } from '@app/hooks';
import { BrazeWalletEvents } from '@app/utils/braze/events/wallet';
import styles from './styles';
import SwapTypes from './fragments/SwapTypes';
import { CoinSwipeType } from './types';

const SwapCoins: ForwardRefRenderFunction<GorhomBottomSheetModal> = (
  _,
  ref
) => {
  const modalRef = ref as React.MutableRefObject<GorhomBottomSheetModal>;
  const navigation = useNavigation<NavigationProp<Routes>>();
  const { logBrazeCustomEvent } = useBraze();
  const onOneToOnePress = () => {
    logAmplitudeEvent(AmplitudeWalletEvents.CLICK_SWAP_SELECT_TYPE);
    logBrazeCustomEvent(BrazeWalletEvents.SWAP);
    navigation.navigate('SimpleSwap');
    modalRef.current?.close();
  };

  const onManyToOnePress = () => {
    logAmplitudeEvent(AmplitudeWalletEvents.CLICK_SWAP_SELECT_TYPE);
    logBrazeCustomEvent(BrazeWalletEvents.SWAP);
    navigation.navigate('SwapManyToOne');
    modalRef.current?.close();
  };

  const onOneToManyPress = () => {
    logAmplitudeEvent(AmplitudeWalletEvents.CLICK_SWAP_SELECT_TYPE);
    logBrazeCustomEvent(BrazeWalletEvents.SWAP);
    navigation.navigate('SwapOneToMany');
    modalRef.current?.close();
  };

  return (
    <BottomSheetModal contentStyle={styles.content} snapToContent ref={ref}>
      <SwapTypes
        title={translate('swap.options.oneToOne')}
        type={CoinSwipeType.ONE_TO_ONE}
        onPress={onOneToOnePress}
      />
      <SwapTypes
        title={translate('swap.options.manyToOne')}
        type={CoinSwipeType.MANY_TO_ONE}
        onPress={onManyToOnePress}
      />
      <SwapTypes
        title={translate('swap.options.oneToMany')}
        type={CoinSwipeType.ONE_TO_MANY}
        onPress={onOneToManyPress}
      />
    </BottomSheetModal>
  );
};

export default forwardRef(SwapCoins);
