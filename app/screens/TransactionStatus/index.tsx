import React, { FC, useState, useCallback, useContext, useEffect } from 'react';
import { FlatList } from 'react-native';
import {
  AmountHeaderCard,
  Background,
  GemCard,
  SafeArea,
  IconButton,
  Icon,
  StickyHeader as StickyHeaderComponent,
  RiskCard,
  Quantity,
} from '@app/components';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { getCoinStacks, getStackBarData } from '@app/mocks/Portfolio';
import type { TransactionsData } from '@app/models/Transactions';
import { getTransactions } from '@app/mocks/Transactions';
import { CoinStackData, StackBarData } from '@app/models/Portfolio';
import { PAYMENT_METHOD } from '@app/models/Transactions';
import { DashboardRoutes, Routes } from '@app/navigation/types';
import useStickyHandler from '@app/hooks/useStickyHandler';
import { RootContext } from '@app/state';
import { useBraze } from '@app/hooks';
import { BrazeBuildMyPortfolioEvents } from '@app/utils/braze/events';

import { generateWalletAddress } from '../PortfolioCryptoDeposit/mock';
import { AdditionalFundsCard } from './fragments';
import { COINS_OPTIONS_DATA, DOLLAR_CHAR } from './constants';
import { getDynamicContent } from './utils';
import styles from './styles';

interface TransactionStsatusProps {
  route: {
    params: DashboardRoutes['TransactionStatus'];
  };
}

const TransactionStatus: FC<TransactionStsatusProps> = ({ route }) => {
  const {
    riskAmount,
    fiatAmount,
    transactionType,
    coinAmount,
    flow,
    status,
    paymentMethod,
    date,
    transactions,
  } = route.params;
  const {
    userStore: { setHasCompletedManagedPortfolioSetup },
  } = useContext(RootContext);
  const navigation = useNavigation<NavigationProp<Routes>>();
  const { logBrazeCustomEvent } = useBraze();

  const [portfolioCoinStacks] = useState<CoinStackData[]>(getCoinStacks());
  const [portfolioStackBarData] = useState<StackBarData[]>(getStackBarData());
  const [transactionsHistory] = useState<TransactionsData[]>(
    getTransactions(1)
  );
  const [selectedCoinId, setSelectedCoinId] = useState(
    COINS_OPTIONS_DATA.bitcoin.id
  );
  const [selectedCoinWalletAddress, setSelectedCoinWalletAddress] = useState(
    ''
  );

  const {
    scroll,
    handleScrollWithScrollView,
    handleHeaderLayout,
    handleBottomHeaderLayout,
  } = useStickyHandler(undefined);

  const handleGenerateWalletAddress = () => {
    if (!selectedCoinWalletAddress) {
      const addressGenerated = generateWalletAddress(selectedCoinId);
      setSelectedCoinWalletAddress(addressGenerated);
    }
  };

  const handleNavigateManagedPortfolio = useCallback(() => {
    setHasCompletedManagedPortfolioSetup(true);
    navigation.navigate('ManagedPortfolio');
  }, [navigation, setHasCompletedManagedPortfolioSetup]);

  const NavBarRightButton = (
    <IconButton
      size="normal"
      startIcon={<Icon.Close />}
      onPress={handleNavigateManagedPortfolio}
    />
  );

  const CollapsedTitle = (
    <Quantity prefix={DOLLAR_CHAR} value={fiatAmount} strong />
  );

  const Title = <RiskCard value={riskAmount} size="normal" />;

  const StickyHeader = (
    <StickyHeaderComponent
      CollapsedTitle={CollapsedTitle}
      Title={Title}
      Right={NavBarRightButton}
      useInternalGrid
      secondaryBackground
      scroll={scroll}
      handleHeaderLayout={handleHeaderLayout}
      handleBottomHeaderLayout={handleBottomHeaderLayout}
    />
  );

  const Header = (
    <AmountHeaderCard
      fiatAmount={fiatAmount}
      coinAmount={coinAmount}
      paymentMethod={paymentMethod}
      status={status}
    />
  );

  const DynamicContent = getDynamicContent(
    flow,
    portfolioCoinStacks,
    portfolioStackBarData,
    transactionsHistory
  );

  const Content = (
    <Background style={styles.container}>
      <GemCard
        isTitleDark
        paymentMethod={paymentMethod}
        transactionType={transactionType}
        showCongratulationsCard
        estimatedDepositDate={date}
        transactions={transactions}
      />
      {paymentMethod === PAYMENT_METHOD.CRYPTO && (
        <AdditionalFundsCard
          selectedCoinId={selectedCoinId}
          onChangeSelectedCoin={setSelectedCoinId}
          handleGenerateWalletAddress={handleGenerateWalletAddress}
          selectedCoinWalletAddress={selectedCoinWalletAddress}
        />
      )}
      {DynamicContent}
    </Background>
  );

  useEffect(() => {
    logBrazeCustomEvent(
      BrazeBuildMyPortfolioEvents.NAVIGATION_NOT_ENOUGH_MONEY_ERROR
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeArea secondary edges={['top']} style={styles.container}>
      {StickyHeader}
      <FlatList
        ListHeaderComponent={Header}
        ListFooterComponent={Content}
        data={null}
        renderItem={null}
        onScroll={handleScrollWithScrollView}
      />
    </SafeArea>
  );
};

export default TransactionStatus;
