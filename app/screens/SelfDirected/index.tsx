import React, {
  FC,
  useState,
  useMemo,
  useContext,
  useCallback,
  useRef,
} from 'react';
import { View, Dimensions } from 'react-native';
import {
  IconButton,
  Icon,
  Quantity,
  LineChart,
  Typography,
  AssetsItem,
  List,
  ContainerWithScrollableHeader,
  StickyHeader,
  Background,
  SafeArea,
} from '@app/components';
import { getTotalAmount, generateDataArray } from '@app/mocks/Portfolio';
import { Routes } from '@app/navigation/types';
import { useNavigation, NavigationProp } from '@react-navigation/core';
import { PaletteColor, palette } from '@app/theme';
import { RootContext } from '@app/state';
import dayjs from 'dayjs';
import { translate } from '@app/i18n';
import useStickyHandler from '@app/hooks/useStickyHandler';
import {
  getPeriodShortLabel,
  PeriodFilterShortLabels,
} from '@app/utils/periodIntervalSelection';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Modal } from '@app/modals';
import { Data } from './types';
import styles from './styles';
import { getGradientColor, getIconColor } from './utils';
import { stackedWalletData, mockWalletData } from './mock';

interface SelfDirectedProps {
  lineColor: PaletteColor;
  onPressPeriodFilter: () => void;
  periodLabel: string;
}

const SelfDirected: FC<SelfDirectedProps> = () => {
  const navigation = useNavigation<NavigationProp<Routes>>();
  const [walletAmount] = useState<string>(getTotalAmount());
  const periodBottomSheetFilterRef = useRef<BottomSheetModal>(null);
  const data: Data[] = generateDataArray(15);
  const formatLabel = (label: Date): string => dayjs(label).format('MM/DD');
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const iconColor = useMemo(() => getIconColor(theme), [theme]);
  const isDarkTheme = theme === 'dark';
  const gradientColor = useMemo(() => getGradientColor(theme), [theme]);
  const { scroll, handleScrollWithScrollView } = useStickyHandler(undefined);
  const { width } = Dimensions.get('window');

  const handleClosePeriodFilter = useCallback(
    () => periodBottomSheetFilterRef.current?.close(),
    []
  );

  const [period, setPeriod] = useState<string>(
    translate('modals.Interval.24hours')
  );
  const [periodLabel, setPeriodLabel] = useState<string>(
    PeriodFilterShortLabels.ONE_DAY
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

  const onPressPeriodFilter = useCallback(
    () => periodBottomSheetFilterRef.current?.present(),
    []
  );

  const handleNavigateBack = () => {
    navigation.goBack();
  };

  const iconWalletAction = () => {
    navigation.navigate('Wallet' as never);
  };

  const walletIcon = (
    <IconButton
      containerStyle={styles.iconWallet}
      onPress={iconWalletAction}
      startIcon={<Icon.WalletIcon tint={iconColor} />}
      size="normal"
    />
  );

  const navBarCollapsedTitle = (
    <Quantity
      strong
      prefix="$"
      value={walletAmount}
      useValueLabel
      valueLabelVariant="normal"
    />
  );

  const stickyHeader = (
    <StickyHeader
      secondaryBackground
      useInternalGrid
      scroll={scroll}
      Right={walletIcon}
      CollapsedTitle={navBarCollapsedTitle}
      handleBackPress={handleNavigateBack}
    />
  );

  const content = (
    <>
      <View style={isDarkTheme ? styles.lineChart : null}>
        <LineChart
          accrualValue={stackedWalletData.accrualValue}
          accrualPercentage={stackedWalletData.accrualPercentage}
          width={width}
          chartHeight={100}
          data={data}
          xKey="time"
          yKey="value"
          padding={30}
          labelSpacing={10}
          gradientColor={gradientColor}
          xLabelTransform={formatLabel}
          isSolidBackground
          onPressPeriodFilter={onPressPeriodFilter}
          periodLabel={periodLabel}
          strokeColor={palette.royalBlue[400]}
        >
          <View style={styles.titleContainer}>
            <Typography size="h6" strong style={styles.title}>
              {translate('screens.dashboard.cards.selfDirected.title')}
            </Typography>
          </View>
          <View style={styles.quantityView}>
            <Quantity
              strong
              prefix="$"
              value={walletAmount}
              useValueLabel
              valueLabelVariant="large"
            />
          </View>
        </LineChart>
      </View>
      <Background altDark={palette.royalBlue[1000]}>
        <View style={styles.assetsView}>
          <List
            items={mockWalletData}
            renderItem={({ item }) => (
              <AssetsItem
                coin={item.name}
                coinAmount={stackedWalletData.coinAmount}
                fiatAmount={stackedWalletData.fiatAmount}
                isSecret={false}
                prefixValue="$"
                accrualShown
                accrualCardPrefixValue="$"
                accrualCardPrecision={0}
                accrualCardValue={stackedWalletData.accrualValue}
                accrualCardPercentageChange={stackedWalletData.percentChange}
                accrualCardStyle={styles.accrualCardStyle}
                accrualCardContainer={styles.accrualCardContainer}
              />
            )}
          />
        </View>
      </Background>
    </>
  );

  return (
    <SafeArea edges={['top']} style={styles.container} secondary>
      <ContainerWithScrollableHeader
        stickyHeader={stickyHeader}
        useFlatList
        regularHeader={null}
        content={content}
        onScroll={handleScrollWithScrollView}
      />
      <Modal.PeriodFilter
        ref={periodBottomSheetFilterRef}
        selected={period}
        onSelect={handleSelectPeriod}
      />
    </SafeArea>
  );
};

export default SelfDirected;
