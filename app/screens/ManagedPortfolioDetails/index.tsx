import React, {
  FC,
  useCallback,
  useMemo,
  useRef,
  useState,
  useContext,
} from 'react';
import { FlatList } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import {
  SafeArea,
  StickyHeader,
  Quantity,
  AssetsItem,
  List,
  Background,
} from '@app/components';
import { observer } from 'mobx-react';
import { RootContext } from '@app/state';
import { Modal } from '@app/modals';
import { useNavigation, NavigationProp } from '@react-navigation/core';
import type { Routes, DashboardRoutes } from '@app/navigation/types';
import useStickyHandler from '@app/hooks/useStickyHandler';
import {
  getPeriodShortLabel,
  PeriodFilterShortLabels,
} from '@app/utils/periodIntervalSelection';
import { translate } from '@app/i18n';

import { palette } from '@app/theme';
import { ListHeaderComponent, PortfolioChangeCard } from './fragments';
import styles from './styles';
import { getListBackground } from './utils';

interface ManagedPortfolioDetailsProps {
  route: {
    params: DashboardRoutes['ManagedPortfolioDetails'];
  };
}

const ManagedPortfolioDetails: FC<ManagedPortfolioDetailsProps> = ({
  route,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const periodBottomSheetFilterRef = useRef<BottomSheetModal>(null);
  const listRef = useRef<FlatList>();
  const navigation = useNavigation<NavigationProp<Routes>>();
  const {
    scroll,
    handleScrollWithScrollView,
    handleHeaderLayout,
    handleBottomHeaderLayout,
  } = useStickyHandler(listRef);

  const [period, setPeriod] = useState<string>(
    translate('modals.Interval.24hours')
  );
  const [periodLabel, setPeriodLabel] = useState<string>(
    PeriodFilterShortLabels.ONE_DAY
  );

  const {
    title,
    details,
    totalAmount,
    portfolioChange,
    accrualPercentage,
    lineColor,
    isAssetsPortfolio,
    useInternalGrid,
  } = route.params;

  const listContainsLending = details.some((key) => key.lending);

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleClosePeriodFilter = useCallback(
    () => periodBottomSheetFilterRef.current?.close(),
    []
  );

  const handleSelectPeriod = useCallback(
    (selectedPeriod) => {
      const periodShortLabel = getPeriodShortLabel(selectedPeriod);
      setPeriodLabel(periodShortLabel);
      setPeriod(selectedPeriod);

      handleClosePeriodFilter();
    },
    [handleClosePeriodFilter]
  );

  const handleOpenPeriodFilter = useCallback(
    () => periodBottomSheetFilterRef.current?.present(),
    []
  );

  const renderItem = useCallback(
    ({ item, index }) => {
      if (isAssetsPortfolio) {
        return (
          <PortfolioChangeCard
            title={item.assetName}
            value={item.fiatAmount}
            prefixValues="$"
            accrualValue={item.assetChange}
            accrualPrefixValue="$"
            accrualChange={item.accrualPercentage}
            coins={item.coins}
            isLastItem={index === details.length - 1}
          />
        );
      }
      return (
        <AssetsItem
          coin={item.coin}
          coinAmount={item.coinAmount}
          fiatAmount={item.fiatAmount}
          lending={item.lending}
          listContainsLending={listContainsLending}
        />
      );
    },
    [listContainsLending, isAssetsPortfolio, details]
  );

  const navBarCollapsedTitle = (
    <Quantity
      strong
      prefix="$"
      value={totalAmount}
      useValueLabel
      valueLabelVariant="normal"
    />
  );

  const listStyle = useMemo(() => [getListBackground(theme)], [theme]);

  return (
    <>
      <SafeArea edges={['top']} style={styles.container} secondary>
        <StickyHeader
          CollapsedTitle={navBarCollapsedTitle}
          handleHeaderLayout={handleHeaderLayout}
          handleBottomHeaderLayout={handleBottomHeaderLayout}
          scroll={scroll}
          handleBackPress={handleBackPress}
          secondaryBackground
          useInternalGrid={useInternalGrid}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          ListFooterComponentStyle={styles.container}
          style={listStyle}
          ListHeaderComponent={(
            <Background
              altDark={palette.royalBlue[950]}
              altLight={palette.white}
              style={styles.container}
            >
              <ListHeaderComponent
                onPressPeriodFilter={handleOpenPeriodFilter}
                periodLabel={periodLabel}
                lineColor={lineColor}
                accrualPercentage={accrualPercentage}
                portfolioChange={portfolioChange}
                title={title}
                totalAmount={totalAmount}
              />
            </Background>
          )}
          ListFooterComponent={(
            <Background style={styles.container}>
              <List
                customStyle={styles.listContainer}
                items={[...details, ...details, ...details]}
                renderItem={renderItem}
              />
            </Background>
          )}
          data={[]}
          renderItem={null}
          onScroll={handleScrollWithScrollView}
        />
      </SafeArea>
      <Modal.PeriodFilter
        ref={periodBottomSheetFilterRef}
        selected={period}
        onSelect={handleSelectPeriod}
      />
    </>
  );
};

export default observer(ManagedPortfolioDetails);
