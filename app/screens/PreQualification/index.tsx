import React, {
  FC,
  useMemo,
  useCallback,
  useRef,
  useState,
  useEffect,
  useContext,
} from 'react';
import { Dimensions, View } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { observer } from 'mobx-react';
import { AppsFlyerPreQualificationEvents } from '@app/utils/appsflyer/events';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { SafeArea, HeaderSwap, SlideShow } from '@app/components';
import { SlideShowRefProps } from '@app/components/SlideShow';
import { logAppsFlyerEvent } from '@app/utils/appsflyer';
import { Routes } from '@app/navigation/types';
import { useBraze, useScrollHandler, useRiskalyze } from '@app/hooks';
import { RootContext } from '@app/state';
import { translate } from '@app/i18n';
import { palette } from '@app/theme';
import { Modal } from '@app/modals';
import { formatNumberToLocale } from '@app/utils/numbers';
import {
  AmplitudePrequalificationEvents,
  AmplitudeRiskAssessmentEvents,
  logAmplitudeEvent,
} from '@app/utils/amplitude';
import { BrazeBuildMyPortfolioEvents } from '@app/utils/braze/events/buildMyPortfolio';
import styles from './styles';
import {
  AccreditedStatusSlide,
  PrequalificationSlide,
  InvestorProfileSlide,
  ExperienceSlide,
  InvestingSlide,
} from './slides';
import { Qualified, Unqualified } from './results';
import {
  INVESTMENT_GOAL_OPTIONS,
  LIQUIDITY_IMPORTANCE_OPTIONS,
  SLIDE_TITLES,
  YES_OR_NO_OPTIONS,
  ANNUAL_HOUSEHOLD_INCOME_OPTIONS,
  HOW_MUCH_INTO_ALTERNATIVES_OPTIONS,
  YEARS_TO_ACHIEVE_GOAL_OPTIONS,
  USER_YEARS_OF_EXPERIENCE_OPTIONS,
  FAQ_ANCHOR_VALUES,
  NO_ANSWER,
  YES_ANSWER,
} from './constants';
import { Questions, Sliders, Steps } from './types';
import {
  getInvestmentInformation,
  getNextButtonIsDisabled,
  getNextSlideBrazeEvent,
  getNextSlideTitle,
  getPreviousSlideTitle,
  logAmplitudePrequalificationEvent,
  setValueOfSlider,
} from './utils';

const { width } = Dimensions.get('screen');

const PreQualification: FC = () => {
  const {
    settingsStore: { customerIsPrequalified, hasFinishedQualification },
  } = useContext(RootContext);
  const { logBrazeCustomEvent } = useBraze();

  const navigation = useNavigation<NavigationProp<Routes>>();

  const riskalyzeUrl = useRiskalyze();

  const [current, onScroll] = useScrollHandler(width);

  const [isNetWorthOver, setIsNetWorthOver] = useState<string>(null);
  const [isAnnualIncomeOver, setIsAnnualIncomeOver] = useState<string>(null);
  const [hasUserQualifications, setHasUserQualifications] = useState<string>(
    null
  );

  const [isCurrentlyEmployed, setIsCurrentlyEmployed] = useState<string>(null);
  const [annualHouseholdIncome, setAnnualHouseholdIncome] = useState<string>(
    null
  );

  const [userNetWorthDisplayed, setUserNetWorthDisplayed] = useState<string>(
    null
  );
  const [userNetWorthValue, setUserNetWorthValue] = useState<number>(0);

  const [howMuchToInvest, setHowMuchToInvest] = useState<number>(null);
  const [userShouldInvest, setUserShouldInvest] = useState(true);
  const [investmentLimitValue, setInvestmentLimitValue] = useState('');

  const [hasUserExperience, setHasUserExperience] = useState<string>(null);
  const [userYearsOfExperience, setUserYearsOfExperience] = useState<string>(
    null
  );

  const [userGoal, setUserGoal] = useState<string>(null);
  const [yearsToAchieveGoal, setYearsToAchieveGoal] = useState<string>(null);
  const [liquidityImportance, setLiquidityImportance] = useState<string>(null);
  const [
    howMuchIntoAlternatives,
    setHowMuchIntoAlternatives,
  ] = useState<string>(null);

  const questionsData = useMemo(
    () => ({
      [Questions.IS_NETWORTH_OVER]: {
        answer: isNetWorthOver,
        setAnswerAction: setIsNetWorthOver,
        options: YES_OR_NO_OPTIONS,
      },
      [Questions.IS_ANNUAL_INCOME_OVER]: {
        answer: isAnnualIncomeOver,
        setAnswerAction: setIsAnnualIncomeOver,
        options: YES_OR_NO_OPTIONS,
      },
      [Questions.HAS_USER_QUALIFICATIONS]: {
        answer: hasUserQualifications,
        setAnswerAction: setHasUserQualifications,
        options: YES_OR_NO_OPTIONS,
      },
      [Questions.IS_CURRENTLY_EMPLOYED]: {
        answer: isCurrentlyEmployed,
        setAnswerAction: setIsCurrentlyEmployed,
        options: YES_OR_NO_OPTIONS,
      },
      [Questions.HAS_USER_EXPERIENCE]: {
        answer: hasUserExperience,
        setAnswerAction: setHasUserExperience,
        options: YES_OR_NO_OPTIONS,
      },
      [Questions.INVESTMENT_GOAL]: {
        answer: userGoal,
        setAnswerAction: setUserGoal,
        options: INVESTMENT_GOAL_OPTIONS,
      },
      [Questions.LIQUIDITY_IMPORTANCE]: {
        answer: liquidityImportance,
        setAnswerAction: setLiquidityImportance,
        options: LIQUIDITY_IMPORTANCE_OPTIONS,
      },
    }),
    [
      hasUserExperience,
      hasUserQualifications,
      isAnnualIncomeOver,
      isCurrentlyEmployed,
      isNetWorthOver,
      liquidityImportance,
      userGoal,
    ]
  );

  const slidersData = useMemo(
    () => ({
      [Sliders.ANNUAL_HOUSEHOLD_INCOME]: {
        answer: annualHouseholdIncome,
        setAnswerAction: setAnnualHouseholdIncome,
        options: ANNUAL_HOUSEHOLD_INCOME_OPTIONS,
      },
      [Sliders.USER_YEARS_OF_EXPERIENCE]: {
        answer: userYearsOfExperience,
        setAnswerAction: setUserYearsOfExperience,
        options: USER_YEARS_OF_EXPERIENCE_OPTIONS,
      },
      [Sliders.YEARS_TO_ACHIEVE_GOAL]: {
        answer: yearsToAchieveGoal,
        setAnswerAction: setYearsToAchieveGoal,
        options: YEARS_TO_ACHIEVE_GOAL_OPTIONS,
      },
      [Sliders.HOW_MUCH_INTO_ALTERNATIVES]: {
        answer: howMuchIntoAlternatives,
        setAnswerAction: setHowMuchIntoAlternatives,
        options: HOW_MUCH_INTO_ALTERNATIVES_OPTIONS,
      },
    }),
    [
      annualHouseholdIncome,
      userYearsOfExperience,
      yearsToAchieveGoal,
      howMuchIntoAlternatives,
    ]
  );

  const [openedQuestion, setOpenedQuestion] = useState<Questions | null>(null);

  const [isButtonStepsDisabled, setIsButtonStepsDisabled] = useState(() => ({
    [Steps.ACCREDITED_STATUS]: true,
    [Steps.INVESTOR_PROFILE]: true,
    [Steps.EXPERIENCE]: true,
    [Steps.INVESTING]: true,
  }));

  const [isFAQIconHidden, setIsFAQIconHidden] = useState<boolean>(true);

  const [
    isApprovedInQualification,
    setIsApprovedInQualification,
  ] = useState<boolean>(false);
  const [
    hasAssesedQuestionnaire,
    setHasAssesedQuestionnaire,
  ] = useState<boolean>(false);

  const FAQModalRef = useRef<BottomSheetModal>(null);
  const optionsModalRef = useRef<BottomSheetModal>(null);

  const slideShowRef = useRef<SlideShowRefProps>(null);
  const [currentSlideTitle, setCurrentSlideTitle] = useState<string>(
    SLIDE_TITLES[Steps.PREQUALIFICATION]
  );

  const handleUpdateNextButtonsState = (stepName: Steps, newState: boolean) => {
    setIsButtonStepsDisabled((previousState) => ({
      ...previousState,
      [stepName]: newState,
    }));
  };

  useEffect(() => {
    const accreditedStatusStepAnswers = [
      isNetWorthOver,
      isAnnualIncomeOver,
      hasUserQualifications,
    ];

    handleUpdateNextButtonsState(
      Steps.ACCREDITED_STATUS,
      getNextButtonIsDisabled(accreditedStatusStepAnswers)
    );
  }, [isNetWorthOver, isAnnualIncomeOver, hasUserQualifications]);

  useEffect(() => {
    const howMuchToInvestStringfied = howMuchToInvest
      ? howMuchToInvest.toString()
      : '';

    const investorProfileStepAnswers = [
      isCurrentlyEmployed,
      annualHouseholdIncome,
      userNetWorthDisplayed,
      howMuchToInvestStringfied,
    ];

    const notAllQuestionsAnswered = getNextButtonIsDisabled(
      investorProfileStepAnswers
    );

    const isNextButtonDisabled = notAllQuestionsAnswered || !userShouldInvest;

    handleUpdateNextButtonsState(Steps.INVESTOR_PROFILE, isNextButtonDisabled);
  }, [
    userNetWorthDisplayed,
    isCurrentlyEmployed,
    annualHouseholdIncome,
    howMuchToInvest,
    userShouldInvest,
  ]);

  useEffect(() => {
    const experienceStepAnswers = [hasUserExperience, userYearsOfExperience];

    handleUpdateNextButtonsState(
      Steps.EXPERIENCE,
      getNextButtonIsDisabled(experienceStepAnswers)
    );
  }, [hasUserExperience, userYearsOfExperience]);

  useEffect(() => {
    const investingStepAnswers = [
      liquidityImportance,
      yearsToAchieveGoal,
      howMuchIntoAlternatives,
    ];

    handleUpdateNextButtonsState(
      Steps.INVESTING,
      getNextButtonIsDisabled(investingStepAnswers)
    );
  }, [liquidityImportance, yearsToAchieveGoal, howMuchIntoAlternatives]);

  useEffect(() => {
    if (hasAssesedQuestionnaire) {
      setIsFAQIconHidden(true);
      setCurrentSlideTitle(SLIDE_TITLES[Steps.PREQUALIFICATION]);
    }
  }, [hasAssesedQuestionnaire]);

  const handleOpenOptionsModal = useCallback((openingQuestion: Questions) => {
    setOpenedQuestion(openingQuestion);
    optionsModalRef.current?.present();
  }, []);

  const handleCloseOptionsModal = () => {
    optionsModalRef.current?.dismiss();
  };

  const handleSelectOption = (selectedValue: string) => {
    questionsData[openedQuestion].setAnswerAction(selectedValue);
    handleCloseOptionsModal();
  };

  const qualifiedNavigate = useCallback(() => {
    logBrazeCustomEvent(BrazeBuildMyPortfolioEvents.CLICK_START_RISK_ASSESMENT);
    logAmplitudeEvent(AmplitudeRiskAssessmentEvents.CLICK_START);
    navigation.navigate('Riskalyze', {
      url: riskalyzeUrl,
    });
  }, [logBrazeCustomEvent, navigation, riskalyzeUrl]);

  const unqualifiedNavigate = useCallback(() => {
    logBrazeCustomEvent(
      BrazeBuildMyPortfolioEvents.CLICK_PREQUALIFICATION_FAILURE_GO_TO_MARKETWATCH
    );
    navigation.navigate('Market');
  }, [logBrazeCustomEvent, navigation]);

  const handleGoToPreviousSlide = useCallback(() => {
    if (currentSlideTitle === SLIDE_TITLES[Steps.PREQUALIFICATION]) {
      navigation.goBack();
      return;
    }

    const previousSlideTitle = getPreviousSlideTitle(currentSlideTitle);

    if (previousSlideTitle === SLIDE_TITLES[Steps.PREQUALIFICATION]) {
      setIsFAQIconHidden(true);
    }

    setCurrentSlideTitle(previousSlideTitle);
    slideShowRef?.current?.previousSlide();
  }, [navigation, currentSlideTitle]);

  const handleGoToNextSlide = useCallback(() => {
    logAmplitudePrequalificationEvent(currentSlideTitle);
    if (currentSlideTitle === SLIDE_TITLES[Steps.PREQUALIFICATION]) {
      logAppsFlyerEvent(AppsFlyerPreQualificationEvents.STARTED);
      setIsFAQIconHidden(false);
    }

    const nextSlideTitle = getNextSlideTitle(currentSlideTitle);
    const nextSlideBrazeEvent = getNextSlideBrazeEvent(currentSlideTitle);

    if (nextSlideBrazeEvent) {
      logBrazeCustomEvent(nextSlideBrazeEvent);
    }

    setCurrentSlideTitle(nextSlideTitle);

    slideShowRef?.current?.nextSlide();
  }, [currentSlideTitle, logBrazeCustomEvent]);

  const handleNotPassedOnQualification = useCallback(() => {
    setIsApprovedInQualification(false);
    setHasAssesedQuestionnaire(true);
    hasFinishedQualification();
  }, [hasFinishedQualification]);

  const handleHasPassedOnQualification = useCallback(() => {
    logBrazeCustomEvent(
      BrazeBuildMyPortfolioEvents.CLICK_PREQUALIFICATION_INVESTING_NEXT
    );
    customerIsPrequalified();
    setIsApprovedInQualification(true);
    setHasAssesedQuestionnaire(true);
    hasFinishedQualification();
  }, [customerIsPrequalified, hasFinishedQualification, logBrazeCustomEvent]);

  // TODO: update it later to use a BE response to know if user passed or not in the qualification
  const handleSubmitQuestionnaire = useCallback(() => {
    if (!userShouldInvest || hasUserExperience === NO_ANSWER) {
      handleNotPassedOnQualification();
    }

    handleHasPassedOnQualification();
  }, [
    userShouldInvest,
    hasUserExperience,
    handleHasPassedOnQualification,
    handleNotPassedOnQualification,
  ]);

  const handleDisplaySelectedQuestionValue = (questionAnswer?: string) => {
    if (questionAnswer === null) {
      return translate('screens.prequalification.select');
    }

    return questionAnswer;
  };

  const handleFormatNetWorthValue = useCallback((value: string) => {
    if (!value) {
      setUserNetWorthDisplayed(null);
      setUserNetWorthValue(0);
      return;
    }

    const formatted = formatNumberToLocale(String(value));

    setUserNetWorthDisplayed(formatted);
    setUserNetWorthValue(Number(value));
  }, []);

  const slides = useMemo(
    () => [
      {
        id: SLIDE_TITLES[Steps.PREQUALIFICATION],
        component: (
          <View style={styles.container}>
            <PrequalificationSlide proceedButtonAction={handleGoToNextSlide} />
          </View>
        ),
      },
      {
        id: SLIDE_TITLES[Steps.ACCREDITED_STATUS],
        component: (
          <View style={styles.container}>
            <AccreditedStatusSlide
              proceedButtonAction={handleGoToNextSlide}
              accStatusQ1={() =>
                handleOpenOptionsModal(Questions.IS_NETWORTH_OVER)}
              accStatusQ2={() =>
                handleOpenOptionsModal(Questions.IS_ANNUAL_INCOME_OVER)}
              accStatusQ3={() =>
                handleOpenOptionsModal(Questions.HAS_USER_QUALIFICATIONS)}
              buttonDisabled={isButtonStepsDisabled.accreditedStatusStep}
              selectValueQ1={handleDisplaySelectedQuestionValue(isNetWorthOver)}
              selectValueQ2={handleDisplaySelectedQuestionValue(
                isAnnualIncomeOver
              )}
              selectValueQ3={handleDisplaySelectedQuestionValue(
                hasUserQualifications
              )}
            />
          </View>
        ),
      },
      {
        id: SLIDE_TITLES[Steps.INVESTOR_PROFILE],
        component: (
          <View style={styles.container}>
            <InvestorProfileSlide
              slider1Answer={(value) =>
                setValueOfSlider(
                  Number(value),
                  slidersData[Sliders.ANNUAL_HOUSEHOLD_INCOME]
                )}
              howMuchToInvest={howMuchToInvest}
              setHowMuchToInvest={setHowMuchToInvest}
              proceedButtonAction={handleGoToNextSlide}
              buttonDisabled={isButtonStepsDisabled.investorProfileStep}
              invProfQ1={() =>
                handleOpenOptionsModal(Questions.IS_CURRENTLY_EMPLOYED)}
              placeHolder={translate(
                'screens.prequalification.textInputPlaceholder'
              )}
              attentionMessageValue={investmentLimitValue}
              showAttentionMessage={!userShouldInvest}
              netWorthValue={userNetWorthValue}
              selectValueQ4={handleDisplaySelectedQuestionValue(
                isCurrentlyEmployed
              )}
              setNetWorthInputText={handleFormatNetWorthValue}
            />
          </View>
        ),
      },
      {
        id: SLIDE_TITLES[Steps.EXPERIENCE],
        component: (
          <View style={styles.container}>
            <ExperienceSlide
              slider3Answer={(value) =>
                setValueOfSlider(
                  Number(value),
                  slidersData[Sliders.USER_YEARS_OF_EXPERIENCE]
                )}
              proceedButtonAction={handleGoToNextSlide}
              buttonDisabled={isButtonStepsDisabled.experienceStep}
              expQ1={() =>
                handleOpenOptionsModal(Questions.HAS_USER_EXPERIENCE)}
              selectValueQ5={handleDisplaySelectedQuestionValue(
                hasUserExperience
              )}
            />
          </View>
        ),
      },
      {
        id: SLIDE_TITLES[Steps.INVESTING],
        component: (
          <View style={styles.container}>
            <InvestingSlide
              proceedButtonAction={handleSubmitQuestionnaire}
              buttonDisabled={isButtonStepsDisabled.investingStep}
              slider4Answer={(value) =>
                setValueOfSlider(
                  Number(value),
                  slidersData[Sliders.YEARS_TO_ACHIEVE_GOAL]
                )}
              slider5Answer={(value) =>
                setValueOfSlider(
                  Number(value),
                  slidersData[Sliders.HOW_MUCH_INTO_ALTERNATIVES]
                )}
              investQ1={() => handleOpenOptionsModal(Questions.INVESTMENT_GOAL)}
              investQ2={() =>
                handleOpenOptionsModal(Questions.LIQUIDITY_IMPORTANCE)}
              selectValueQ6={handleDisplaySelectedQuestionValue(userGoal)}
              selectValueQ7={handleDisplaySelectedQuestionValue(
                liquidityImportance
              )}
            />
          </View>
        ),
      },
    ],
    [
      handleGoToNextSlide,
      isButtonStepsDisabled.accreditedStatusStep,
      isButtonStepsDisabled.investorProfileStep,
      isButtonStepsDisabled.experienceStep,
      isButtonStepsDisabled.investingStep,
      isNetWorthOver,
      isAnnualIncomeOver,
      hasUserQualifications,
      howMuchToInvest,
      investmentLimitValue,
      userShouldInvest,
      userNetWorthValue,
      isCurrentlyEmployed,
      handleFormatNetWorthValue,
      hasUserExperience,
      handleSubmitQuestionnaire,
      userGoal,
      liquidityImportance,
      handleOpenOptionsModal,
      slidersData,
    ]
  );

  const contentSelector = useCallback(() => {
    if (!hasAssesedQuestionnaire) {
      return (
        <SlideShow
          ref={slideShowRef}
          initialScrollIndex={0}
          slides={slides}
          hasAutoScroll={false}
          scrollEnabled={false}
          hasIndicators={false}
          containerHeight="90%"
          slideHeight="95%"
          useExternalScroll
          onExternalScroll={onScroll}
          currentExternalScroll={current}
        />
      );
    }
    if (isApprovedInQualification) {
      logAppsFlyerEvent(AppsFlyerPreQualificationEvents.RESULT_PASSED);
      logBrazeCustomEvent(
        BrazeBuildMyPortfolioEvents.NAVIGATION_PREQUALIFICATION_PASSED
      );
      logAmplitudeEvent(AmplitudePrequalificationEvents.RESULT_PASSED);
      return <Qualified qualifiedButton={qualifiedNavigate} />;
    }
    logAppsFlyerEvent(AppsFlyerPreQualificationEvents.RESULT_FAILURE);
    logBrazeCustomEvent(
      BrazeBuildMyPortfolioEvents.NAVIGATION_PREQUALIFICATION_FAILURE
    );
    logAmplitudeEvent(AmplitudePrequalificationEvents.RESULT_FAILURE);
    return <Unqualified unqualifiedButton={unqualifiedNavigate} />;
  }, [
    hasAssesedQuestionnaire,
    current,
    logBrazeCustomEvent,
    onScroll,
    isApprovedInQualification,
    qualifiedNavigate,
    slides,
    unqualifiedNavigate,
  ]);

  const getAnchorValue = useCallback(() => {
    if (!currentSlideTitle) {
      return null;
    }

    return FAQ_ANCHOR_VALUES[currentSlideTitle];
  }, [currentSlideTitle]);

  useEffect(() => {
    if (userNetWorthValue && howMuchToInvest) {
      const investmentInformations = getInvestmentInformation({
        annualHouseholdIncome,
        currentlyEmployed: isCurrentlyEmployed === YES_ANSWER,
        howMuchWantToInvest: howMuchToInvest,
        liquidNetWorth: userNetWorthValue,
      });

      setUserShouldInvest(investmentInformations.shouldInvest);

      if (!investmentInformations.shouldInvest) {
        setInvestmentLimitValue(investmentInformations.mostCanInvest);
        handleUpdateNextButtonsState(Steps.INVESTOR_PROFILE, true);
      }
    } else {
      // To remove the displayed message
      setUserShouldInvest(true);
    }
  }, [
    annualHouseholdIncome,
    howMuchToInvest,
    isCurrentlyEmployed,
    userNetWorthValue,
  ]);

  return (
    <SafeArea altLight={palette.white} edges={['bottom']}>
      <HeaderSwap
        title={currentSlideTitle}
        onPressBack={handleGoToPreviousSlide}
        current={current}
        indicatorHidden={hasAssesedQuestionnaire}
        iconHidden={hasAssesedQuestionnaire}
        rightIconHidden={isFAQIconHidden}
        totalIndicators={5}
        faqPress={() => FAQModalRef.current?.present()}
      />

      {contentSelector()}

      <Modal.FAQ
        ref={FAQModalRef}
        anchorValue={getAnchorValue()}
        onDismiss={() => FAQModalRef.current?.dismiss()}
      />

      <Modal.QuestionsModal
        options={questionsData[openedQuestion]?.options}
        ref={optionsModalRef}
        selected={questionsData[openedQuestion]?.answer}
        onDismiss={handleCloseOptionsModal}
        onSelect={(selectedValue) => handleSelectOption(selectedValue)}
      />
    </SafeArea>
  );
};

export default observer(PreQualification);
