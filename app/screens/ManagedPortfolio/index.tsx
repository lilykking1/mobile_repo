import React, { FC, useCallback, useContext, useRef, useState } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { debounce } from 'lodash';

import { RootContext } from '@app/state';
import {
  Background,
  Button,
  ContainerWithScrollableHeader,
  Icon,
  IconButton,
  Quantity,
  RiskCard,
  SafeArea,
  StickyHeader,
  TabViews,
  Typography,
} from '@app/components';
import {
  getCoinStacks,
  getStackBarData,
  getTotalAmount,
} from '@app/mocks/Portfolio';
import { getTransactions } from '@app/mocks/Transactions';
import type { Routes } from '@app/navigation/types';
import { translate } from '@app/i18n';
import { palette } from '@app/theme';
import type { TransactionsData } from '@app/models/Transactions';
import type { CoinStackData, StackBarData } from '@app/models/Portfolio';
import { Modal } from '@app/modals';
import ListButton from '@app/components/ListButton';
import useStickyHandler from '@app/hooks/useStickyHandler';
import { useBraze } from '@app/hooks';
import {
  BrazeBuildMyPortfolioEvents,
  BrazeManagedPortfolioModificationEvents,
} from '@app/utils/braze/events';

import KycRequiredModal from '@app/modals/KycRequired';
import useKycModal from '@app/hooks/useKycModal';
import { logAmplitudeEvent } from '@app/utils/amplitude';
import { AmplitudeManagedPortfolioEvents } from '@app/utils/amplitude/constants/managedPortfolio';
import { Portfolio, Transactions } from './fragments';
import { getActionButtonIcon } from './utils';
import styles from './styles';
import { THREE_MS } from './constants';

const ManagedPortfolio: FC = () => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const riskReAssessmentBottomSheetRef = useRef<BottomSheetModal>(null);
  const paymentMethodBottomSheetRef = useRef<BottomSheetModal>(null);
  const dotsActionsBottomSheetRef = useRef<BottomSheetModal>(null);
  const closePortfolioRef = useRef<BottomSheetModal>(null);
  const [transactions] = useState<TransactionsData[]>(getTransactions(6));
  const [portfolioAmount] = useState<string>(getTotalAmount());
  const [portfolioCoinStacks] = useState<CoinStackData[]>(getCoinStacks());
  const [portfolioStackBarData] = useState<StackBarData[]>(getStackBarData());
  const [isMyPortfolioTab, setIsMyPortfolioTab] = useState(true);
  const {
    isKycRequired,
    isKycModalVisible,
    handleDisplayKycModal,
    handleDismissKycModal,
  } = useKycModal();
  const { logBrazeCustomEvent } = useBraze();
  const navigation = useNavigation<NavigationProp<Routes>>();
  const { scroll, handleScrollWithScrollView } = useStickyHandler(undefined);

  const handleBackPress = useCallback(() => {
    navigation.navigate('Home', {
      screen: 'DashboardScreen',
    });
  }, [navigation]);

  const handleOpenDotsAction = useCallback(
    () => dotsActionsBottomSheetRef.current?.present(),
    []
  );

  const openRetakeRiskAssessment = useCallback(() => {
    logAmplitudeEvent(AmplitudeManagedPortfolioEvents.RETAKE_ASSESSMENT);
    logBrazeCustomEvent(BrazeManagedPortfolioModificationEvents.RETAKE_RISK);
    dotsActionsBottomSheetRef.current?.dismiss();
    debounce(() => {
      riskReAssessmentBottomSheetRef.current?.present();
    }, THREE_MS)();
  }, [logBrazeCustomEvent]);

  const closeRetakeRiskAssessment = useCallback(
    () => riskReAssessmentBottomSheetRef.current?.dismiss(),
    []
  );

  const handleDepositMethod = useCallback(() => {
    paymentMethodBottomSheetRef.current?.present();
  }, []);

  const handleOpenClosePortfolio = () => {
    logAmplitudeEvent(AmplitudeManagedPortfolioEvents.CLOSE);
    logBrazeCustomEvent(
      BrazeManagedPortfolioModificationEvents.CLOSE_PORTFOLIO
    );
    dotsActionsBottomSheetRef.current?.dismiss();
    closePortfolioRef.current?.present();
    logBrazeCustomEvent(
      BrazeManagedPortfolioModificationEvents.CLOSE_PORTFOLIO
    );
  };

  const handleHideClosePortfolio = () => {
    closePortfolioRef.current?.dismiss();
  };

  const handleAddFunds = useCallback(() => {
    logAmplitudeEvent(AmplitudeManagedPortfolioEvents.ADD_FUNDS);
    logBrazeCustomEvent(BrazeManagedPortfolioModificationEvents.ADD_FUNDS);
    handleDisplayKycModal(handleDepositMethod);
  }, [logBrazeCustomEvent, handleDisplayKycModal, handleDepositMethod]);

  const onSelectDepositMethod = useCallback(() => {
    paymentMethodBottomSheetRef.current?.dismiss();
  }, []);

  const handleChangeTab = () => {
    setIsMyPortfolioTab((currentState) => !currentState);
  };
  const handleCancelKyc = useCallback(() => {
    handleDismissKycModal();
  }, [handleDismissKycModal]);

  const navigateToCognito = useCallback(() => {
    navigation.navigate('Cognito', {
      url:
        'https://flow-sandbox.cognitohq.com/verify/flwses_3PW8wan4yq1iNu?key=89981a88fdd0b39843de2da9909db495',
    });
  }, [navigation]);

  const handleRetakeAssessment = () => {
    logBrazeCustomEvent(
      BrazeManagedPortfolioModificationEvents.CONFIRM_RETAKE_RISK
    );
    logAmplitudeEvent(
      AmplitudeManagedPortfolioEvents.CLICK_CONFIRM_RETAKE_RISK
    );

    navigation.navigate('Riskalyze', {
      url:
        'https://go.riskalyze.com/start/e6381d9a9a97fe69a33646d350b4015718cf50c9',
      isRetakingAssessment: true,
    });
    closeRetakeRiskAssessment();
  };

  // TODO: Fund Portfolio Setup Flow
  // const handleFundPortfolio = useCallback(() => {
  //   // TODO: Fund Portfolio Setup Flow
  //   navigation.navigate('ChooseInvestment', { amountToInvest: 3000 });
  // }, [navigation]);

  const handleSubmitKyc = useCallback(() => {
    logBrazeCustomEvent(BrazeBuildMyPortfolioEvents.CLICK_PROCEED_TO_IDENTITY);
    logAmplitudeEvent(
      AmplitudeManagedPortfolioEvents.CLICK_PROCEED_TO_VERIFICATION
    );
    handleDismissKycModal(navigateToCognito);
  }, [handleDismissKycModal, logBrazeCustomEvent, navigateToCognito]);

  const navBarRightButton = (
    <IconButton
      size="normal"
      onPress={handleOpenDotsAction}
      startIcon={getActionButtonIcon(theme)}
    />
  );

  const navBarCollapsedTitle = (
    <Quantity
      strong
      prefix="$"
      value={portfolioAmount}
      useValueLabel
      valueLabelVariant="normal"
    />
  );

  const stickyHeader = (
    <StickyHeader
      scroll={scroll}
      Title={<RiskCard value={75} size="normal" />}
      CollapsedTitle={navBarCollapsedTitle}
      Right={navBarRightButton}
      handleBackPress={handleBackPress}
      secondaryBackground
    />
  );

  const header = (
    <View>
      <View style={styles.headerValues}>
        <Typography size="body1" strong>
          {translate('screens.managedPortfolio.title')}
        </Typography>
        <Quantity
          strong
          prefix="$"
          value={portfolioAmount}
          useValueLabel
          valueLabelVariant="large"
        />
        <View style={styles.chartContainer} />
      </View>
    </View>
  );

  const content = (
    <Background style={styles.sceneTabsContainer}>
      <TabViews.Container extraActionOnChangeTab={handleChangeTab}>
        <TabViews.Tab
          title={translate('screens.managedPortfolio.tabs.myPortfolio')}
        >
          <Portfolio
            stackBarChartData={portfolioStackBarData}
            coinStackCardsData={portfolioCoinStacks}
          />
        </TabViews.Tab>

        <TabViews.Tab
          title={translate('screens.managedPortfolio.tabs.transactions')}
        >
          <Transactions data={transactions} />
        </TabViews.Tab>
      </TabViews.Container>
    </Background>
  );

  return (
    <>
      <SafeArea
        altLight={palette.white}
        altDark={palette.royalBlue[950]}
        edges={['top']}
        style={styles.container}
      >
        <ContainerWithScrollableHeader
          stickyHeader={stickyHeader}
          regularHeader={header}
          content={content}
          onScroll={handleScrollWithScrollView}
          useFlatList
        />

        {!!isMyPortfolioTab && (
          <View style={styles.buttonContainer}>
            <Button
              label={translate('screens.managedPortfolio.action.addFunds')}
              variant="green"
              onPress={handleAddFunds}
            />
          </View>
        )}
      </SafeArea>

      <Modal.ManagedButtonSheetActions
        title={translate('modals.dotsActions.title')}
        ref={dotsActionsBottomSheetRef}
      >
        <ListButton
          Icon={() => <Icon.Retake />}
          title={translate('modals.dotsActions.retake')}
          action={openRetakeRiskAssessment}
        />
        <ListButton
          Icon={() => <Icon.Check tint={palette.grey[600]} />}
          title={translate('modals.dotsActions.done')}
          action={handleOpenClosePortfolio}
          isLast
        />
      </Modal.ManagedButtonSheetActions>
      <Modal.RetakeRiskAssessment
        ref={riskReAssessmentBottomSheetRef}
        handleOnDismiss={closeRetakeRiskAssessment}
        handleRetake={handleRetakeAssessment}
      />

      <KycRequiredModal
        visible={isKycRequired && isKycModalVisible}
        onCancel={handleCancelKyc}
        onSubmit={handleSubmitKyc}
      />

      <Modal.SelectDepositMethod
        onOptionSelect={onSelectDepositMethod}
        ref={paymentMethodBottomSheetRef}
      />
      <Modal.ClosePortfolio
        ref={closePortfolioRef}
        onHide={handleHideClosePortfolio}
      />
    </>
  );
};

export default observer(ManagedPortfolio);
