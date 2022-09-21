import {
  AmplitudePrequalificationEvents,
  logAmplitudeEvent,
} from '@app/utils/amplitude';
import { BrazeBuildMyPortfolioEvents } from '@app/utils/braze/events';
import {
  excludeDecimalsIfIsZero,
  formatNumberToLocale,
} from '@app/utils/numbers';
import {
  INVESTMENT_SCENARIOS_ALLOWED_RATIOS,
  SLIDE_TITLES,
  INCOME_MORE_THAN_FIFTYK_OPTIONS,
} from '../constants';
import { InvestmentScenarios, SliderData, Steps } from '../types';

interface GetInvestmentInformationProps {
  currentlyEmployed: boolean;
  annualHouseholdIncome: string;
  liquidNetWorth: number;
  howMuchWantToInvest: number;
}

interface GetInvestmentInformationReturn {
  shouldInvest: boolean;
  mostCanInvest?: string;
}

const getScenarioMatched = (
  currentlyEmployed: boolean,
  annualHouseholdIncome: string
): InvestmentScenarios => {
  const isHouseholdMoreThanFiftyK = INCOME_MORE_THAN_FIFTYK_OPTIONS.includes(
    annualHouseholdIncome
  );

  if (!currentlyEmployed) {
    return isHouseholdMoreThanFiftyK
      ? InvestmentScenarios.SECOND
      : InvestmentScenarios.FIRST;
  }

  return isHouseholdMoreThanFiftyK
    ? InvestmentScenarios.FOURTH
    : InvestmentScenarios.THIRD;
};

const getMostCanInvest = (
  liquidNetWorth: number,
  matchedScenario: InvestmentScenarios
): number => {
  if (!matchedScenario) {
    return (
      liquidNetWorth *
      INVESTMENT_SCENARIOS_ALLOWED_RATIOS[InvestmentScenarios.FIRST]
    );
  }

  return liquidNetWorth * INVESTMENT_SCENARIOS_ALLOWED_RATIOS[matchedScenario];
};

const getIfShouldInvest = (
  liquidNetWorth: number,
  howMuchWantToInvest: number,
  matchedScenario: InvestmentScenarios
): boolean => {
  const maximumAllowed = getMostCanInvest(liquidNetWorth, matchedScenario);

  return maximumAllowed >= howMuchWantToInvest;
};

export const getInvestmentInformation = ({
  currentlyEmployed,
  annualHouseholdIncome,
  liquidNetWorth,
  howMuchWantToInvest,
}: GetInvestmentInformationProps): GetInvestmentInformationReturn => {
  const matchedScenario = getScenarioMatched(
    currentlyEmployed,
    annualHouseholdIncome
  );

  const shouldInvest = getIfShouldInvest(
    liquidNetWorth,
    howMuchWantToInvest,
    matchedScenario
  );

  const investmentInformationsObject = { shouldInvest };

  if (!shouldInvest) {
    const mostCanInvestNumbered = getMostCanInvest(
      liquidNetWorth,
      matchedScenario
    );

    const mostCanInvestWithDecimalsFixed = excludeDecimalsIfIsZero(
      mostCanInvestNumbered
    );
    const mostCanInvest = formatNumberToLocale(mostCanInvestWithDecimalsFixed);

    Object.assign(investmentInformationsObject, { mostCanInvest });
  }

  return investmentInformationsObject;
};

export const getNextButtonIsDisabled = (
  stepAnswersArray: string[]
): boolean => {
  let isDisabled = false;

  stepAnswersArray.forEach((answer) => {
    if (!answer) {
      isDisabled = true;
    }
  });

  return isDisabled;
};

export const setValueOfSlider = (
  currentValue: number,
  sliderData: SliderData
): void => {
  const { options, setAnswerAction } = sliderData;

  options.forEach((option) => {
    if (option.value === currentValue) {
      setAnswerAction(option.answer);
    }
  });
};

export const getPreviousSlideTitle = (currentTitle: string): string => {
  switch (currentTitle) {
    case SLIDE_TITLES[Steps.ACCREDITED_STATUS]:
      return SLIDE_TITLES[Steps.PREQUALIFICATION];
    case SLIDE_TITLES[Steps.INVESTOR_PROFILE]:
      return SLIDE_TITLES[Steps.ACCREDITED_STATUS];
    case SLIDE_TITLES[Steps.EXPERIENCE]:
      return SLIDE_TITLES[Steps.INVESTOR_PROFILE];
    case SLIDE_TITLES[Steps.INVESTING]:
      return SLIDE_TITLES[Steps.EXPERIENCE];
    default:
      return SLIDE_TITLES[Steps.PREQUALIFICATION];
  }
};

export const getNextSlideTitle = (currentTitle: string): string => {
  switch (currentTitle) {
    case SLIDE_TITLES[Steps.ACCREDITED_STATUS]:
      return SLIDE_TITLES[Steps.INVESTOR_PROFILE];
    case SLIDE_TITLES[Steps.INVESTOR_PROFILE]:
      return SLIDE_TITLES[Steps.EXPERIENCE];
    case SLIDE_TITLES[Steps.EXPERIENCE]:
      return SLIDE_TITLES[Steps.INVESTING];
    default:
      return SLIDE_TITLES[Steps.ACCREDITED_STATUS];
  }
};

export const getNextSlideBrazeEvent = (currentTitle: string): string => {
  switch (currentTitle) {
    case SLIDE_TITLES[Steps.PREQUALIFICATION]:
      return BrazeBuildMyPortfolioEvents.CLICK_PREQUALIFICATION_START;
    case SLIDE_TITLES[Steps.ACCREDITED_STATUS]:
      return BrazeBuildMyPortfolioEvents.CLICK_PREQUALIFICATION_ACCREDITED_STATUS_NEXT;
    case SLIDE_TITLES[Steps.INVESTOR_PROFILE]:
      return BrazeBuildMyPortfolioEvents.CLICK_PREQUALIFICATION_INVESTOR_PROFILE_NEXT;
    case SLIDE_TITLES[Steps.EXPERIENCE]:
      return BrazeBuildMyPortfolioEvents.CLICK_PREQUALIFICATION_EXPERIENCE_NEXT;
    default:
      return '';
  }
};

export const logAmplitudePrequalificationEvent = (
  currentSlideTitle: string
): void => {
  switch (currentSlideTitle) {
    case SLIDE_TITLES[Steps.PREQUALIFICATION]:
      logAmplitudeEvent(AmplitudePrequalificationEvents.CLICK_START);
      return;
    case SLIDE_TITLES[Steps.ACCREDITED_STATUS]:
      logAmplitudeEvent(
        AmplitudePrequalificationEvents.CLICK_NEXT_ACCREDITED_STATUS
      );
      return;
    case SLIDE_TITLES[Steps.INVESTOR_PROFILE]:
      logAmplitudeEvent(
        AmplitudePrequalificationEvents.CLICK_NEXT_INVESTOR_PROFILE
      );
      return;
    case SLIDE_TITLES[Steps.EXPERIENCE]:
      logAmplitudeEvent(AmplitudePrequalificationEvents.CLICK_NEXT_EXPERIENCE);
      return;
    case SLIDE_TITLES[Steps.INVESTING]:
      logAmplitudeEvent(AmplitudePrequalificationEvents.CLICK_NEXT_INVESTING);
      break;
    default:
      break;
  }
};
