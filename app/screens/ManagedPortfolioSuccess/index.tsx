import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { View } from 'react-native';
import {
  Background,
  Button,
  ContainerWithScrollableHeader,
  Icon,
  IconButton,
  Quantity,
  RiskAppetiteCard,
  RiskSlider,
  RiskGroupTable,
  SafeArea,
  StickyHeader,
} from '@app/components';
import { Modal } from '@app/modals';
import { useNavigation, NavigationProp } from '@react-navigation/core';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { CoinStackData, StackBarData } from '@app/models/Portfolio';
import { getCoinStacks, getStackBarData } from '@app/mocks/Portfolio';
import type { DashboardRoutes, Routes } from '@app/navigation/types';
import useStickyHandler from '@app/hooks/useStickyHandler';
import { RootContext } from '@app/state';
import { translate } from '@app/i18n';
import { palette } from '@app/theme';

import { observer } from 'mobx-react';
import { useBraze } from '@app/hooks';
import { BrazeBuildMyPortfolioEvents } from '@app/utils/braze/events';
import KycRequiredModal from '@app/modals/KycRequired';
import useKycModal from '@app/hooks/useKycModal';
import { logAppsFlyerEvent } from '@app/utils/appsflyer';
import { AppsFlyerPortfolioEvents } from '@app/utils/appsflyer/events';
import {
  AmplitudeManagedPortfolioEvents,
  AmplitudeRiskAssessmentEvents,
  logAmplitudeEvent,
} from '@app/utils/amplitude';
import {
  ModalCancelReassessment,
  ModalConfirmNewPortfolio,
  ModalExitConfirmation,
} from './components';
import {
  PortfolioCompositionArea,
  PortfolioHeader,
  SynopsisArea,
  RiskComparisonChart,
} from './fragments';
import styles from './styles';
import {
  RISK_CARD_PRECISION,
  RISK_CARD_SUBTITLE,
  RISK_CARD_TITLE,
} from './constants';
import { getButtonsContainerStyleByTheme } from './utils';

interface ManagedPortfolioSuccessProps {
  route: {
    params: DashboardRoutes['ManagedPortfolioSuccess'];
  };
}

const ManagedPortfolioSuccess: FC<ManagedPortfolioSuccessProps> = ({
  route,
}) => {
  const { logBrazeCustomEvent } = useBraze();
  const {
    authStore: { firstName },
    settingsStore: { theme },
    userStore: { setHasStartedManagedPortfolioSetup },
  } = useContext(RootContext);

  const navigation = useNavigation<NavigationProp<Routes>>();

  const riskReAssessmentBottomSheetRef = useRef<BottomSheetModal>(null);

  const handleOpenReAssessmentModal = () =>
    riskReAssessmentBottomSheetRef.current?.present();
  const handleCloseReAssessmentModal = () =>
    riskReAssessmentBottomSheetRef.current?.close();

  const { scroll, handleScrollWithScrollView } = useStickyHandler(undefined);

  const {
    initialInvestment,
    defaultRisk,
    isReassessment,
    newRisk,
  } = route.params;
  const calculatedRisk = isReassessment ? newRisk : defaultRisk;

  const [isLowerRisk, setIsLowerRisk] = useState(false);
  const [current, setCurrent] = useState(calculatedRisk);
  const [defaultRiskValue, setDefaultRiskValue] = useState(calculatedRisk);
  const [initialRiskValue, setInitialRiskValue] = useState(calculatedRisk);
  const [lowerRiskHasChanged, setLowerRiskHasChanged] = useState(false);
  const [isExitModalVisible, setIsExitModalVisible] = useState(false);
  const [
    isCancelReassessmentModalVisible,
    setIsCancelReassessmentModalVisible,
  ] = useState(false);
  const [
    isConfirmNewPortfolioModalVisible,
    setIsConfirmNewPortfolioModalVisible,
  ] = useState(false);

  const [portfolioCoinStacks] = useState<CoinStackData[]>(getCoinStacks());
  const [portfolioStackBarData] = useState<StackBarData[]>(getStackBarData());
  const {
    isKycRequired,
    isKycModalVisible,
    handleDisplayKycModal,
    handleDismissKycModal,
  } = useKycModal();

  useEffect(() => {
    setHasStartedManagedPortfolioSetup(true);
  });

  const containerStyle = isReassessment ? styles.reassessmentContainer : {};
  const buttonsContainerStyle = getButtonsContainerStyleByTheme(theme);

  useEffect(
    () =>
      // It prevents to go back to the loading screen
      navigation.addListener('beforeRemove', (e) => {
        if (e.data.action.type === 'GO_BACK') {
          e.preventDefault();
        }
      }),
    [navigation]
  );

  useEffect(() => {
    logAppsFlyerEvent(AppsFlyerPortfolioEvents.RISK_ASSESSMENT_COMPLETE);
    logBrazeCustomEvent(
      BrazeBuildMyPortfolioEvents.NAVIGATION_RISK_ASSESSMENT_COMPLETED
    );
    logAmplitudeEvent(AmplitudeRiskAssessmentEvents.RISK_ASSESSMENT_COMPLETE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCloseExitModal = useCallback(() => {
    setIsExitModalVisible(false);
  }, []);

  const handleCloseButton = useCallback(() => {
    if (isReassessment) {
      navigation.navigate('DashboardScreen', {
        newPortfolioToReview: {
          initialInvestment,
          defaultRisk,
          newRisk: current,
        },
      });
    } else {
      setIsExitModalVisible(true);
    }
  }, [current, defaultRisk, initialInvestment, isReassessment, navigation]);

  const onCloseCancelReassessmentModal = useCallback(() => {
    setIsCancelReassessmentModalVisible(false);
  }, []);

  const handleCancelAndKeepCurrentPortfolio = useCallback(() => {
    setIsCancelReassessmentModalVisible(true);
  }, []);

  const onCloseConfirmNewPortfolioModal = useCallback(() => {
    setIsConfirmNewPortfolioModalVisible(false);
  }, []);

  const handleOpenConfirmNewPortfolioModal = useCallback(() => {
    setIsConfirmNewPortfolioModalVisible(true);
  }, []);

  const handleNewRiskValue = useCallback((value) => {
    setCurrent(value);
    setDefaultRiskValue(value[0]);
  }, []);

  const handleResetRiskNumber = useCallback(() => {
    setInitialRiskValue(initialRiskValue);
    setDefaultRiskValue(initialRiskValue);
    setCurrent(initialRiskValue);
    setLowerRiskHasChanged(false);
  }, [initialRiskValue]);

  const navigateToInvestment = useCallback(() => {
    navigation.navigate('ChooseInvestment', {
      amountToInvest: 3000,
      isFunding: true,
    });
  }, [navigation]);

  const handleFundPortfolio = useCallback(() => {
    logBrazeCustomEvent(BrazeBuildMyPortfolioEvents.CLICK_FUND_PORTFOLIO);
    logAmplitudeEvent(AmplitudeManagedPortfolioEvents.CLICK_FUND_PORTFOLIO);
    handleDisplayKycModal(navigateToInvestment);
  }, [handleDisplayKycModal, logBrazeCustomEvent, navigateToInvestment]);

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

  const handleUpdateCurrentRiskNumber = (value: number) => {
    setCurrent(value);
  };

  const closeIcon = <Icon.Close />;
  const closeButton = (
    <IconButton startIcon={closeIcon} onPress={handleCloseButton} />
  );

  const collapsedTitle = (
    <Quantity value={initialInvestment} prefix="$" size="body1" useValueLabel />
  );

  const stickyHeader = (
    <StickyHeader
      scroll={scroll}
      altDark={palette.royalBlue[950]}
      altLight={palette.white}
      Right={closeButton}
      CollapsedTitle={collapsedTitle}
      secondaryBackground
    />
  );

  const ManagedPortfolioSuccessHeader = isReassessment ? (
    <PortfolioHeader
      userName={firstName}
      initialInvestment={initialInvestment}
      currentRisk={defaultRisk}
      newRisk={current}
      isReassessment={isReassessment}
    />
  ) : (
    <PortfolioHeader
      userName={firstName}
      initialInvestment={initialInvestment}
      currentRisk={current}
    />
  );

  const Header = (
    <>
      {ManagedPortfolioSuccessHeader}
      <RiskSlider
        value={current}
        defaultRisk={defaultRiskValue}
        onValueChange={handleUpdateCurrentRiskNumber}
        maximumValue={99}
        minimumValue={1}
        animationType="spring"
        step={1}
        customSteps={[1, 33, 66, 99]}
        showCurrentNumber
        handleOpenReAssessmentModal={handleOpenReAssessmentModal}
        setIsLowerRisk={setIsLowerRisk}
        setInitialRiskValue={setInitialRiskValue}
      />
      {lowerRiskHasChanged && (
        <Background>
          <Button
            variant="secondary"
            label={translate(
              'screens.managedPortfolioSuccess.actions.resetRiskNumber'
            )}
            style={styles.resetRiskButton}
            onPress={handleResetRiskNumber}
          />
        </Background>
      )}
    </>
  );

  const Content = (
    <Background style={styles.portfolioContent}>
      <PortfolioCompositionArea
        stacksBarData={portfolioStackBarData}
        stacksCardData={portfolioCoinStacks}
      />
      <SynopsisArea riskNumber={current} />
      {/* TODO: Change values from RiskAppetiteCard when we have back-end */}
      <RiskAppetiteCard
        lossCard={{
          percentage: 45.21,
          subtitle: 25.845,
        }}
        gainCard={{
          percentage: 182.49,
          subtitle: 225.845,
        }}
        leftTitle={RISK_CARD_TITLE}
        subtitle={RISK_CARD_SUBTITLE}
        risk={current}
        coloredBackground
        accrual
        precision={RISK_CARD_PRECISION}
      />
      <RiskComparisonChart
        title={translate(
          'screens.managedPortfolioSuccess.riskNumberComparison.title'
        )}
        riskValue={current}
      />
      <RiskGroupTable
        style={styles.riskGroupTable}
        title={translate(
          'screens.managedPortfolioSuccess.averageRiskComparison.title'
        )}
      />
    </Background>
  );

  const ActionsButtonsContainer = useMemo(() => {
    if (isReassessment) {
      return (
        <Background style={buttonsContainerStyle} altLight={palette.white}>
          <Button
            variant="secondary"
            label={translate(
              'screens.managedPortfolioSuccess.reassessmentActions.cancelAndKeepCurrentPortfolio'
            )}
            onPress={handleCancelAndKeepCurrentPortfolio}
          />
          <Button
            variant="green"
            label={translate(
              'screens.managedPortfolioSuccess.reassessmentActions.confirmNewPortfolio'
            )}
            onPress={handleOpenConfirmNewPortfolioModal}
            style={styles.confirmNewPortfolioButton}
          />
        </Background>
      );
    }
    return (
      <View style={styles.buttonContainer}>
        <Button
          variant="green"
          label={translate(
            'screens.managedPortfolioSuccess.averageRiskComparison.fundPortfolio'
          )}
          onPress={handleFundPortfolio}
        />
      </View>
    );
  }, [
    buttonsContainerStyle,
    handleCancelAndKeepCurrentPortfolio,
    handleOpenConfirmNewPortfolioModal,
    handleFundPortfolio,
    isReassessment,
  ]);

  const handleRiseRisk = useCallback(() => {
    navigation.navigate('Riskalyze', {
      url:
        'https://go.riskalyze.com/start/e6381d9a9a97fe69a33646d350b4015718cf50c9',
      isRetakingAssessment: true,
    });
  }, [navigation]);

  return (
    <SafeArea
      secondary
      edges={['top']}
      altLight={palette.white}
      style={containerStyle}
    >
      <ContainerWithScrollableHeader
        stickyHeader={stickyHeader}
        regularHeader={Header}
        content={Content}
        onScroll={handleScrollWithScrollView}
      />

      {ActionsButtonsContainer}

      <ModalExitConfirmation
        visible={isExitModalVisible}
        onRequestClose={onCloseExitModal}
      />
      <ModalCancelReassessment
        visible={isCancelReassessmentModalVisible}
        onRequestClose={onCloseCancelReassessmentModal}
      />
      <ModalConfirmNewPortfolio
        visible={isConfirmNewPortfolioModalVisible}
        onRequestClose={onCloseConfirmNewPortfolioModal}
        defaultRisk={defaultRisk}
        newRisk={current}
      />

      <Modal.RiskReAssessment
        ref={riskReAssessmentBottomSheetRef}
        isLowerRisk={isLowerRisk}
        oldRisk={initialRiskValue}
        newRisk={current}
        handleClose={handleCloseReAssessmentModal}
        setRiskValue={handleNewRiskValue}
        handleRiseRisk={handleRiseRisk}
        lowerRiskHasChanged={lowerRiskHasChanged}
        setLowerRiskHasChanged={setLowerRiskHasChanged}
      />
      <KycRequiredModal
        visible={isKycRequired && isKycModalVisible}
        onCancel={handleCancelKyc}
        onSubmit={handleSubmitKyc}
      />
    </SafeArea>
  );
};

export default observer(ManagedPortfolioSuccess);
