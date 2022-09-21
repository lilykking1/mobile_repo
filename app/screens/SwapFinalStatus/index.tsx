import React, { FC, useCallback } from 'react';
import { View } from 'react-native';

import { SafeArea, StickyHeader, Typography } from '@app/components';
import { translate } from '@app/i18n';
import { ErrorModal } from '@app/modals';
import { RootRoutes } from '@app/navigation/types';
import { palette } from '@app/theme';
import { AmplitudeWalletEvents, logAmplitudeEvent } from '@app/utils/amplitude';
import { Status, Footer } from './fragments';
import styles from './styles';

interface SwapFinalStatusProps {
  route: {
    params: RootRoutes['SwapFinalStatus'];
  };
}
const SwapFinalStatus: FC<SwapFinalStatusProps> = ({ route }) => {
  const { hasError = false, swapTitle } = route.params;

  const Title = (
    <Typography strong size="body1">
      {swapTitle}
    </Typography>
  );

  const handleRetryAction = useCallback(() => {
    // TODO: initiate the Swap flow again
    logAmplitudeEvent(AmplitudeWalletEvents.CLICK_RETRY_SWAP_ERROR);
  }, []);

  const handleCancelAction = useCallback(() => {
    // TODO: goes back to the last Swap flow step before the confirmation screen
  }, []);

  return (
    <>
      <SafeArea
        altLight={palette.white}
        style={styles.container}
        edges={['top', 'bottom']}
      >
        <StickyHeader altLight={palette.white} Title={Title} />

        {!hasError && (
          <View style={styles.content}>
            <Status />
          </View>
        )}

        {hasError ? null : <Footer />}
      </SafeArea>
      {hasError && (
        <ErrorModal
          headerTitle={translate(
            'screens.stackedWallet.simpleSwap.headerTitle'
          )}
          title={translate('swap.status.error.title')}
          subtitle={translate('swap.status.error.message')}
          primaryButtonText={translate('swap.status.error.action')}
          secondaryButtonText={translate('swap.status.error.cancel')}
          primaryButtonAction={handleRetryAction}
          secondaryButtonAction={handleCancelAction}
        />
      )}
    </>
  );
};

export default SwapFinalStatus;
