import React, { FC, useCallback, useRef, useState } from 'react';
import { View } from 'react-native';
import {
  useNavigation,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { MarketWatchRoutes, Routes } from '@app/navigation/types';
import {
  Button,
  CoinIcon,
  SafeArea,
  Typography,
  GemCard,
  ContainerWithScrollableHeader,
  Background,
} from '@app/components';
import StickyHeader from '@app/components/StickyHeader';
import { translate } from '@app/i18n';
import { getCoinNews } from '@app/mocks/CoinNews';
import { Article } from '@app/models/Article';
import useStickyHandler from '@app/hooks/useStickyHandler';
import { Modal } from '@app/modals';
import { TransactionData } from '@app/models/Transactions';
import { transactionStatusCardMock } from '@app/mocks/Portfolio';
import { getProcessingTransactionFromCoin } from '@app/mocks/Transactions';
import {
  getPeriodShortLabel,
  PeriodFilterShortLabels,
} from '@app/utils/periodIntervalSelection';

import KycRequiredModal from '@app/modals/KycRequired';
import useKycModal from '@app/hooks/useKycModal';
import { useWallet, useBraze } from '@app/hooks';
import {
  AmplitudeManagedPortfolioEvents,
  logAmplitudeEvent,
} from '@app/utils/amplitude';
import { BrazeBuildMyPortfolioEvents } from '@app/utils/braze/events';
import { coinData, coinDetails } from './mock/data';
import {
  BuyBox,
  ChartSection,
  Description,
  KeyMetrics,
  NewsSection,
  PriceMetrics,
  Social,
} from './fragments';
import {
  BUY_HEADER_START_FADE_IN,
  BUY_HEADER_START_FADE_POSITION,
} from './constants';
import styles from './styles';
import { GemFlowInitator } from '../Gem/types';

interface MarketWatchDetailProps
  extends RouteProp<MarketWatchRoutes, 'MarketWatchDetail'> {
  route: {
    params: MarketWatchRoutes['MarketWatchDetail'];
  };
}
const MarketWatchDetail: FC<MarketWatchDetailProps> = ({
  route: { params },
}) => {
  const { name, symbol } = params;
  const { getCoinBySymbol } = useWallet();
  const userCoin = getCoinBySymbol(symbol);
  const { logBrazeCustomEvent } = useBraze();
  const navigation = useNavigation<NavigationProp<Routes>>();
  const { scroll, handleScrollWithScrollView } = useStickyHandler(undefined);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const periodBottomSheetFilterRef = useRef<BottomSheetModal>(null);

  const [newsList] = useState<Article[]>(getCoinNews(3));
  const {
    isKycRequired,
    isKycModalVisible,
    handleDisplayKycModal,
    handleDismissKycModal,
  } = useKycModal();

  const [period, setPeriod] = useState<string>(
    translate('modals.Interval.24hours')
  );
  const [periodLabel, setPeriodLabel] = useState<string>(
    PeriodFilterShortLabels.ONE_DAY
  );

  const [coinPurchaseInProgress] = useState<TransactionData | null>(
    getProcessingTransactionFromCoin(symbol)
  );

  const handleOpenPeriodFilter = useCallback(
    () => periodBottomSheetFilterRef.current?.present(),
    []
  );

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

  const navigateToGem = useCallback(() => {
    navigation.navigate('Gem', {
      asset: symbol,
      flow: GemFlowInitator.MARKETWATCH,
    });
  }, [navigation, symbol]);

  const onBuy = useCallback(() => {
    handleDisplayKycModal(navigateToGem);
  }, [handleDisplayKycModal, navigateToGem]);

  const onManage = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const onManageModalClose = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleCancelKyc = useCallback(() => {
    handleDismissKycModal();
  }, [handleDismissKycModal]);

  const navigateToCognito = useCallback(() => {
    navigation.navigate('Cognito', {
      url:
        'https://flow-sandbox.cognitohq.com/verify/flwses_3PW8wan4yq1iNu?key=89981a88fdd0b39843de2da9909db495',
    });
  }, [navigation]);

  const handleSubmitKyc = useCallback(() => {
    logBrazeCustomEvent(BrazeBuildMyPortfolioEvents.CLICK_PROCEED_TO_IDENTITY);
    logAmplitudeEvent(
      AmplitudeManagedPortfolioEvents.CLICK_PROCEED_TO_VERIFICATION
    );
    handleDismissKycModal(navigateToCognito);
  }, [handleDismissKycModal, logBrazeCustomEvent, navigateToCognito]);

  const expandedTitle = <CoinIcon coin={symbol} size={42} />;

  const collapsedRightButton = (
    <Button
      variant="green"
      label={translate('coinDetail.buybox.buy')}
      onPress={onBuy}
      size="small"
      style={styles.buyButton}
    />
  );
  const collapsedTitle = (
    <Typography strong size="h6">
      {name}
    </Typography>
  );

  const stickyHeader = (
    <StickyHeader
      scroll={scroll}
      Title={expandedTitle}
      CollapsedTitle={collapsedTitle}
      CollapsedRight={collapsedRightButton}
      handleBackPress={handleBackPress}
      rightFadingPosition={BUY_HEADER_START_FADE_POSITION}
      rightStartFadeInPosition={BUY_HEADER_START_FADE_IN}
      secondaryBackground
      useInternalGrid
    />
  );

  const regularHeader = (
    <ChartSection
      coinName={name}
      coinValue={coinDetails.coinValue}
      coinMovementPercentage={coinDetails.coinMovementPercentage}
      coinMovementValue={coinDetails.coinMovementValue}
      periodLabel={periodLabel}
      onPressPeriodFilter={handleOpenPeriodFilter}
    />
  );

  const content = (
    <Background style={styles.content}>
      <BuyBox
        coinName={symbol}
        coinAmount={userCoin?.coinAmount}
        fiatAmount={userCoin?.fiatAmount}
        onBuy={onBuy}
        onManage={onManage}
      />
      {coinPurchaseInProgress && (
        <View style={styles.gemCard}>
          <GemCard
            transactionType={transactionStatusCardMock.transactionType}
            paymentMethod={transactionStatusCardMock.paymentMethod}
            transactions={transactionStatusCardMock.transactions}
            estimatedDepositDate={transactionStatusCardMock.date}
            style={styles.gemPurchase}
          />
        </View>
      )}
      <Description description={coinData.description} />
      <Social
        website={coinData.website}
        github={coinData.github}
        twitter={coinData.twitter}
        telegram={coinData.telegram}
      />
      <KeyMetrics />
      <NewsSection articles={newsList} />
      <PriceMetrics />
    </Background>
  );

  return (
    <View style={styles.container}>
      <SafeArea edges={['top']} secondary>
        <ContainerWithScrollableHeader
          stickyHeader={stickyHeader}
          regularHeader={regularHeader}
          content={content}
          onScroll={handleScrollWithScrollView}
          useFlatList
        />
      </SafeArea>
      <Modal.ManageCoins
        ref={bottomSheetModalRef}
        selectedCoin={userCoin}
        onModalClose={onManageModalClose}
      />
      <Modal.PeriodFilter
        ref={periodBottomSheetFilterRef}
        selected={period}
        onSelect={handleSelectPeriod}
      />
      <KycRequiredModal
        visible={isKycRequired && isKycModalVisible}
        onCancel={handleCancelKyc}
        onSubmit={handleSubmitKyc}
      />
    </View>
  );
};

export default MarketWatchDetail;
