import React, { FC, useCallback, useMemo, useRef } from 'react';
import { FlatList } from 'react-native';
import {
  Background,
  IndividualCoinsCard,
  SafeArea,
  StickyHeader,
  Typography,
} from '@app/components';

import { useNavigation, NavigationProp } from '@react-navigation/core';
import type { Routes, DashboardRoutes } from '@app/navigation/types';
import useStickyHandler from '@app/hooks/useStickyHandler';
import { translate } from '@app/i18n';
import { CoinStackDetails } from '@app/models/Portfolio';

import { ListHeaderComponent, ListFooterComponent } from './fragments';
import styles from './styles';

interface IndividualCoinsDetailsProps {
  route: {
    params: DashboardRoutes['IndividualCoinsDetails'];
  };
}

const IndividualCoinsDetails: FC<IndividualCoinsDetailsProps> = ({ route }) => {
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
    (coinStackType: string, index: number): string =>
      `${coinStackType}-${index}`,
    []
  );

  const isLendingAnyCoin = useMemo(() => {
    const coinStackDetails = coinStack.details as CoinStackDetails[];
    const coinsAreLending = coinStackDetails.map(
      (details) => !!details.lending
    );
    return coinsAreLending.includes(true);
  }, [coinStack]);

  const renderItem = ({ item, index }) => {
    const key = keyExtractor(item.portfolioType, index);

    return (
      <IndividualCoinsCard
        key={key}
        totalAmount={item.amount}
        assets={item.details as CoinStackDetails[]}
      />
    );
  };

  const navBarTitle = (
    <Typography strong size="body1">
      {translate('screens.individualCoinsDetails.title')}
    </Typography>
  );

  const listHeaderComponent = (
    <ListHeaderComponent
      percentage={coinStack.percentage}
      totalAmount={coinStack.amount}
    />
  );

  const listFooterComponent = (
    <ListFooterComponent isLending={isLendingAnyCoin} />
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
          ListHeaderComponent={listHeaderComponent}
          ListFooterComponent={listFooterComponent}
          data={[coinStack]}
          renderItem={renderItem}
          onScroll={handleScrollWithScrollView}
        />
      </Background>
    </SafeArea>
  );
};

export default IndividualCoinsDetails;
