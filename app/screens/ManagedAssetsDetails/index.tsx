import React, { FC, useCallback, useRef } from 'react';
import { FlatList } from 'react-native';
import {
  Background,
  CoinStackCard,
  SafeArea,
  StickyHeader,
  Typography,
} from '@app/components';

import { NavigationProp, useNavigation } from '@react-navigation/core';
import type { DashboardRoutes, Routes } from '@app/navigation/types';
import useStickyHandler from '@app/hooks/useStickyHandler';
import { translate } from '@app/i18n';
import { calculatePercentage } from '@app/utils/numbers';

import { ListFooterComponent, ListHeaderComponent } from './fragments';
import { AMOUNT_PRECISION_VALUE } from './constants';
import styles from './styles';

interface ManagedAssetsDetailsProps {
  route: {
    params: DashboardRoutes['ManagedAssetsDetails'];
  };
}

const ManagedAssetsDetails: FC<ManagedAssetsDetailsProps> = ({ route }) => {
  const listRef = useRef<FlatList>();
  const {
    params: { coinStack },
  } = route;
  const navigation = useNavigation<NavigationProp<Routes>>();
  const {
    scroll,
    handleScrollWithScrollView,
    handleHeaderLayout,
    handleBottomHeaderLayout,
  } = useStickyHandler(listRef);

  const keyExtractor = useCallback(
    (assetName: string, index: number): string => `${assetName}-${index}`,
    []
  );

  const renderItem = ({ item, index }) => {
    const percentage = calculatePercentage(coinStack.amount, item.fiatAmount);
    const key = keyExtractor(item.assetName, index);

    return (
      <CoinStackCard
        style={styles.card}
        key={key}
        title={item.assetName}
        amount={item.fiatAmount}
        percentage={percentage}
        amountPrecision={AMOUNT_PRECISION_VALUE}
        coins={item.coins}
      />
    );
  };

  const navBarTitle = (
    <Typography strong size="body1">
      {translate('screens.managedAssetsDetails.title')}
    </Typography>
  );

  const listHeaderComponent = (
    <ListHeaderComponent
      percentage={coinStack.percentage}
      totalAmount={coinStack.amount}
    />
  );

  const listFooterComponent = (
    <ListFooterComponent
      title={translate('screens.managedAssetsDetails.title')}
      content={translate('screens.managedAssetsDetails.footerMessageContent')}
    />
  );

  return (
    <SafeArea edges={['top']} secondary>
      <Background style={styles.container}>
        <StickyHeader
          CollapsedTitle={navBarTitle}
          Title={navBarTitle}
          handleHeaderLayout={handleHeaderLayout}
          handleBottomHeaderLayout={handleBottomHeaderLayout}
          scroll={scroll}
          handleBackPress={navigation.goBack}
          secondaryBackground
        />
        <FlatList
          style={styles.listContainer}
          showsVerticalScrollIndicator={false}
          ListFooterComponentStyle={styles.container}
          ListHeaderComponent={listHeaderComponent}
          ListFooterComponent={listFooterComponent}
          data={coinStack.details}
          renderItem={renderItem}
          onScroll={handleScrollWithScrollView}
        />
      </Background>
    </SafeArea>
  );
};

export default ManagedAssetsDetails;
