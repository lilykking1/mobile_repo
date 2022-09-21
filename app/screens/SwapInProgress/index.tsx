import React, { FC, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { SafeArea, StickyHeader, Typography } from '@app/components';
import { RootRoutes } from '@app/navigation/types';
import { palette } from '@app/theme';

import { getCoinsNameByDirection } from '@app/screens/SwapInProgress/utils';
import { AssetVariationDirection } from '@app/models';
import { resetNavigation } from '@app/navigation/utils';
import { CoinsRow } from './fragments';
import styles from './styles';
import { MOCK_INTERVAL_IN_MS } from './constants';

interface SwapConfirmationProps {
  route: {
    params: RootRoutes['SwapInProgress'];
  };
}

const SwapInProgress: FC<SwapConfirmationProps> = ({ route }) => {
  const { assetsList, swapTitle, resetNavigationParam } = route.params;

  const hasOnlyTwoCoins = assetsList.length === 2;

  const amountTo = hasOnlyTwoCoins && assetsList[0].currentCoinAmount;
  const amountFrom = hasOnlyTwoCoins && assetsList[1].currentCoinAmount;

  const handleConfirmAction = useCallback(() => {
    // TODO: integrate with BE and pass the boolean status of the call's response in the hasError
    resetNavigation(resetNavigationParam);
  }, [resetNavigationParam]);

  useEffect(() => {
    // TODO: after we have backend, we will not need this timeout
    const id = setTimeout(() => {
      handleConfirmAction();
    }, MOCK_INTERVAL_IN_MS);

    return () => clearTimeout(id);
  }, [handleConfirmAction]);

  const RenderTitle = (
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
      <StickyHeader altLight={palette.white} Title={RenderTitle} />
      <View style={styles.content}>
        <CoinsRow
          coinsLeft={getCoinsNameByDirection(
            assetsList,
            AssetVariationDirection.FROM
          )}
          coinsRight={getCoinsNameByDirection(
            assetsList,
            AssetVariationDirection.TO
          )}
          amountTo={amountTo}
          amountFrom={amountFrom}
        />
      </View>
    </SafeArea>
  );
};

export default SwapInProgress;
