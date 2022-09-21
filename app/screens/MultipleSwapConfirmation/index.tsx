import React, { FC, useCallback, useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/core';

import { SafeArea, StickyHeader, Typography } from '@app/components';
import { RootRoutes, Routes } from '@app/navigation/types';
import { palette } from '@app/theme';

import { useWallet } from '@app/hooks';
import { Content, Footer } from './fragments';
import styles from './styles';
import { getAssetsVariationListWithPercentage } from './utils';

interface MultipleSwapConfirmationProps {
  route: {
    params: RootRoutes['MultipleSwapConfirmation'];
  };
}

const MultipleSwapConfirmation: FC<MultipleSwapConfirmationProps> = ({
  route,
}) => {
  const { assetsList, swapTitle } = route.params;

  const { wallet } = useWallet();

  const navigation = useNavigation<NavigationProp<Routes>>();

  const [assetsVariationList, _] = useState(
    getAssetsVariationListWithPercentage(assetsList, wallet.totalInvested)
  );

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleConfirmAction = useCallback(() => {
    // TODO: integrate with BE and pass the boolean status of the call's response in the hasError
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
  }, [assetsList, navigation, swapTitle]);

  const title = (
    <Typography strong size="body1">
      {swapTitle}
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

      <Content assetsList={assetsVariationList} />

      <Footer
        handleBackPress={handleBackPress}
        handleConfirmAction={handleConfirmAction}
      />
    </SafeArea>
  );
};

export default MultipleSwapConfirmation;
