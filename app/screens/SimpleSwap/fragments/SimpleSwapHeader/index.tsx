import React, { FC, useCallback } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { Typography, StickyHeader } from '@app/components';
import { translate } from '@app/i18n';
import { Routes } from '@app/navigation/types';

import { palette } from '@app/theme';

const SimpleSwapHeader: FC = () => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <>
      <StickyHeader
        Title={(
          <Typography strong size="h6">
            {translate('screens.stackedWallet.simpleSwap.headerTitle')}
          </Typography>
        )}
        handleBackPress={handleBackPress}
        altLight={palette.white}
      />
    </>
  );
};

export default SimpleSwapHeader;
