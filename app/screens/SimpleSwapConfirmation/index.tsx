import React, { FC, useCallback } from 'react';
import { View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { SafeArea, StickyHeader, Typography } from '@app/components';
import { RootRoutes, Routes } from '@app/navigation/types';
import { translate } from '@app/i18n';
import { palette } from '@app/theme';

import { Asset } from '@app/models';
import { createAssetList } from '@app/utils/assets';
import { CoinsRow, Footer } from './fragments';
import styles from './styles';

interface SimpleSwapConfirmationProps {
  route: {
    params: RootRoutes['SimpleSwapConfirmation'];
  };
}

const SimpleSwapConfirmation: FC<SimpleSwapConfirmationProps> = ({ route }) => {
  const { coinFrom, amountFrom, coinTo, amountTo, swapTitle } = route.params;

  const navigation = useNavigation<NavigationProp<Routes>>();

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleConfirmAction = useCallback(() => {
    // TODO: integrate with BE and pass the boolean status of the call's response in the hasError
    const selectedToCoin: Asset = {
      coinAmount: amountTo,
      name: coinTo,
      symbol: coinTo,
    };

    const swapFromCoins: Array<Asset> = [
      {
        coinAmount: amountFrom,
        name: coinFrom,
        symbol: coinFrom,
      },
    ];

    const coinsValue = {};
    coinsValue[`${coinTo}`] = amountTo;
    coinsValue[`${coinFrom}`] = amountFrom;

    const assetsList = createAssetList(
      selectedToCoin,
      swapFromCoins,
      coinsValue
    );

    navigation.navigate('SwapInProgress', {
      resetNavigationParam: [
        {
          name: 'StackedWalletScreen',
        },
        {
          name: 'SwapFinalStatus',
          params: { hasError: false, swapTitle },
        },
      ],
      assetsList,
      swapTitle,
    });
  }, [amountFrom, amountTo, coinFrom, coinTo, navigation, swapTitle]);

  const title = (
    <Typography strong size="body1">
      {translate('swap.confirmations.title')}
    </Typography>
  );

  return (
    <SafeArea
      altLight={palette.white}
      style={styles.container}
      edges={['top', 'bottom']}
    >
      <StickyHeader
        altLight={palette.white}
        Title={title}
        handleBackPress={handleBackPress}
      />

      <View style={styles.content}>
        <CoinsRow
          coinFrom={coinFrom}
          amountFrom={amountFrom}
          coinTo={coinTo}
          amountTo={amountTo}
        />
      </View>

      <Footer
        handleBackPress={handleBackPress}
        handleConfirmAction={handleConfirmAction}
      />
    </SafeArea>
  );
};

export default SimpleSwapConfirmation;
