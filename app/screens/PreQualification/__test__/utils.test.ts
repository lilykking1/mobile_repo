// You can see more about the scenarios and they rules here:
// https://stackedinvest.atlassian.net/browse/APP-496

import { BrazeBuildMyPortfolioEvents } from '@app/utils/braze/events';
import {
  excludeDecimalsIfIsZero,
  formatNumberToLocale,
} from '@app/utils/numbers';
import {
  INVESTMENT_SCENARIOS_ALLOWED_RATIOS,
  SLIDERS_TEXTUAL_STEPS,
  SLIDE_TITLES,
} from '../constants';
import { InvestmentScenarios, Steps } from '../types';
import {
  getInvestmentInformation,
  getNextButtonIsDisabled,
  getNextSlideBrazeEvent,
  getNextSlideTitle,
  getPreviousSlideTitle,
} from '../utils';

let mockedAnnualHouseholdIncome: string;
let mockedIsCurrentlyEmployed: boolean;
let mockedHowMuchWantToInvest: number;
let mockedLiquidNetWorth: number;

describe('Pre Qualification Questionnaire utils', () => {
  describe('Investiment Ratios rules', () => {
    beforeEach(() => {
      mockedAnnualHouseholdIncome = SLIDERS_TEXTUAL_STEPS.lessThanFiftyThousand;
      mockedIsCurrentlyEmployed = false;
      mockedHowMuchWantToInvest = 8_000;
      mockedLiquidNetWorth = 100_000;
    });

    it('should allows only a max 10% net worth investment ratio when user matches scenario one', () => {
      let investmentInformation = getInvestmentInformation({
        annualHouseholdIncome: mockedAnnualHouseholdIncome,
        currentlyEmployed: mockedIsCurrentlyEmployed,
        howMuchWantToInvest: mockedHowMuchWantToInvest,
        liquidNetWorth: mockedLiquidNetWorth,
      });

      expect(investmentInformation.shouldInvest).toBe(true);
      expect(investmentInformation.mostCanInvest).toBeUndefined();

      mockedHowMuchWantToInvest = 11_000;

      investmentInformation = getInvestmentInformation({
        annualHouseholdIncome: mockedAnnualHouseholdIncome,
        currentlyEmployed: mockedIsCurrentlyEmployed,
        howMuchWantToInvest: mockedHowMuchWantToInvest,
        liquidNetWorth: mockedLiquidNetWorth,
      });

      const expectedValue =
        mockedLiquidNetWorth *
        INVESTMENT_SCENARIOS_ALLOWED_RATIOS[InvestmentScenarios.FIRST];
      const expectedValueStringfiedAndFixed = excludeDecimalsIfIsZero(
        expectedValue
      );
      const expectedValueFormattedAsFunctionResult = formatNumberToLocale(
        expectedValueStringfiedAndFixed
      );

      expect(investmentInformation.shouldInvest).toBe(false);
      expect(investmentInformation.mostCanInvest).toBe(
        expectedValueFormattedAsFunctionResult
      );
    });

    it('should allows only a max 30% net worth investment ratio when user matches scenario two', () => {
      mockedAnnualHouseholdIncome = SLIDERS_TEXTUAL_STEPS.fiftyKToOneHundredK;
      mockedHowMuchWantToInvest = 11_000;

      let investmentInformation = getInvestmentInformation({
        annualHouseholdIncome: mockedAnnualHouseholdIncome,
        currentlyEmployed: mockedIsCurrentlyEmployed,
        howMuchWantToInvest: mockedHowMuchWantToInvest,
        liquidNetWorth: mockedLiquidNetWorth,
      });

      expect(investmentInformation.shouldInvest).toBe(true);
      expect(investmentInformation.mostCanInvest).toBeUndefined();

      mockedHowMuchWantToInvest = 31_000;

      investmentInformation = getInvestmentInformation({
        annualHouseholdIncome: mockedAnnualHouseholdIncome,
        currentlyEmployed: mockedIsCurrentlyEmployed,
        howMuchWantToInvest: mockedHowMuchWantToInvest,
        liquidNetWorth: mockedLiquidNetWorth,
      });

      const expectedValue =
        mockedLiquidNetWorth *
        INVESTMENT_SCENARIOS_ALLOWED_RATIOS[InvestmentScenarios.SECOND];
      const expectedValueStringfiedAndFixed = excludeDecimalsIfIsZero(
        expectedValue
      );
      const expectedValueFormattedAsFunctionResult = formatNumberToLocale(
        expectedValueStringfiedAndFixed
      );

      expect(investmentInformation.shouldInvest).toBe(false);
      expect(investmentInformation.mostCanInvest).toBe(
        expectedValueFormattedAsFunctionResult
      );
    });

    it('should allows only a max 20% net worth investment ratio when user matches scenario three', () => {
      mockedIsCurrentlyEmployed = true;
      mockedHowMuchWantToInvest = 11_000;

      let investmentInformation = getInvestmentInformation({
        annualHouseholdIncome: mockedAnnualHouseholdIncome,
        currentlyEmployed: mockedIsCurrentlyEmployed,
        howMuchWantToInvest: mockedHowMuchWantToInvest,
        liquidNetWorth: mockedLiquidNetWorth,
      });

      expect(investmentInformation.shouldInvest).toBe(true);
      expect(investmentInformation.mostCanInvest).toBeUndefined();

      mockedHowMuchWantToInvest = 21_000;

      investmentInformation = getInvestmentInformation({
        annualHouseholdIncome: mockedAnnualHouseholdIncome,
        currentlyEmployed: mockedIsCurrentlyEmployed,
        howMuchWantToInvest: mockedHowMuchWantToInvest,
        liquidNetWorth: mockedLiquidNetWorth,
      });

      const expectedValue =
        mockedLiquidNetWorth *
        INVESTMENT_SCENARIOS_ALLOWED_RATIOS[InvestmentScenarios.THIRD];
      const expectedValueStringfiedAndFixed = excludeDecimalsIfIsZero(
        expectedValue
      );
      const expectedValueFormattedAsFunctionResult = formatNumberToLocale(
        expectedValueStringfiedAndFixed
      );

      expect(investmentInformation.shouldInvest).toBe(false);
      expect(investmentInformation.mostCanInvest).toBe(
        expectedValueFormattedAsFunctionResult
      );
    });

    it('should allows only a max 40% net worth investment ratio when user matches scenario four', () => {
      mockedAnnualHouseholdIncome = SLIDERS_TEXTUAL_STEPS.fiftyKToOneHundredK;
      mockedIsCurrentlyEmployed = true;
      mockedHowMuchWantToInvest = 31_000;

      let investmentInformation = getInvestmentInformation({
        annualHouseholdIncome: mockedAnnualHouseholdIncome,
        currentlyEmployed: mockedIsCurrentlyEmployed,
        howMuchWantToInvest: mockedHowMuchWantToInvest,
        liquidNetWorth: mockedLiquidNetWorth,
      });

      expect(investmentInformation.shouldInvest).toBe(true);
      expect(investmentInformation.mostCanInvest).toBeUndefined();

      mockedHowMuchWantToInvest = 41_000;

      investmentInformation = getInvestmentInformation({
        annualHouseholdIncome: mockedAnnualHouseholdIncome,
        currentlyEmployed: mockedIsCurrentlyEmployed,
        howMuchWantToInvest: mockedHowMuchWantToInvest,
        liquidNetWorth: mockedLiquidNetWorth,
      });

      const expectedValue =
        mockedLiquidNetWorth *
        INVESTMENT_SCENARIOS_ALLOWED_RATIOS[InvestmentScenarios.FOURTH];
      const expectedValueStringfiedAndFixed = excludeDecimalsIfIsZero(
        expectedValue
      );
      const expectedValueFormattedAsFunctionResult = formatNumberToLocale(
        expectedValueStringfiedAndFixed
      );

      expect(investmentInformation.shouldInvest).toBe(false);
      expect(investmentInformation.mostCanInvest).toBe(
        expectedValueFormattedAsFunctionResult
      );
    });
  });

  describe('Questionnaire auxiliary methods', () => {
    it('should returns correct status of the Next button of current step', () => {
      const arrayFulfilled = [
        'mockedAnswer1',
        'mockedAnswer2',
        'mockedAnswer3',
      ];

      let buttonIsDisabled = getNextButtonIsDisabled(arrayFulfilled);
      expect(buttonIsDisabled).toBe(false);

      const arrayMissingAnswers = ['mockedAnswer1', null, 'mockedAnswer3'];

      buttonIsDisabled = getNextButtonIsDisabled(arrayMissingAnswers);
      expect(buttonIsDisabled).toBe(true);
    });

    it('should returns correct previous and next slide titles', () => {
      let currentSlideTitle = SLIDE_TITLES[Steps.ACCREDITED_STATUS];
      let previousSlideTitle = getPreviousSlideTitle(currentSlideTitle);
      let nextSlideTitle = getNextSlideTitle(currentSlideTitle);

      expect(previousSlideTitle).toBe(SLIDE_TITLES[Steps.PREQUALIFICATION]);
      expect(nextSlideTitle).toBe(SLIDE_TITLES[Steps.INVESTOR_PROFILE]);

      currentSlideTitle = SLIDE_TITLES[Steps.INVESTOR_PROFILE];
      previousSlideTitle = getPreviousSlideTitle(currentSlideTitle);
      nextSlideTitle = getNextSlideTitle(currentSlideTitle);

      expect(previousSlideTitle).toBe(SLIDE_TITLES[Steps.ACCREDITED_STATUS]);
      expect(nextSlideTitle).toBe(SLIDE_TITLES[Steps.EXPERIENCE]);

      currentSlideTitle = SLIDE_TITLES[Steps.EXPERIENCE];
      previousSlideTitle = getPreviousSlideTitle(currentSlideTitle);
      nextSlideTitle = getNextSlideTitle(currentSlideTitle);

      expect(previousSlideTitle).toBe(SLIDE_TITLES[Steps.INVESTOR_PROFILE]);
      expect(nextSlideTitle).toBe(SLIDE_TITLES[Steps.INVESTING]);

      currentSlideTitle = SLIDE_TITLES[Steps.INVESTING];
      previousSlideTitle = getPreviousSlideTitle(currentSlideTitle);
      nextSlideTitle = getNextSlideTitle(currentSlideTitle);

      expect(previousSlideTitle).toBe(SLIDE_TITLES[Steps.EXPERIENCE]);
      expect(nextSlideTitle).toBe(SLIDE_TITLES[Steps.ACCREDITED_STATUS]);
    });

    it('should returns correct next slide Braze events', () => {
      let currentSlideTitle = SLIDE_TITLES[Steps.PREQUALIFICATION];
      let nextSlideBrazeEvent = getNextSlideBrazeEvent(currentSlideTitle);

      expect(nextSlideBrazeEvent).toBe(
        BrazeBuildMyPortfolioEvents.CLICK_PREQUALIFICATION_START
      );

      currentSlideTitle = SLIDE_TITLES[Steps.ACCREDITED_STATUS];
      nextSlideBrazeEvent = getNextSlideBrazeEvent(currentSlideTitle);

      expect(nextSlideBrazeEvent).toBe(
        BrazeBuildMyPortfolioEvents.CLICK_PREQUALIFICATION_ACCREDITED_STATUS_NEXT
      );

      currentSlideTitle = SLIDE_TITLES[Steps.INVESTOR_PROFILE];
      nextSlideBrazeEvent = getNextSlideBrazeEvent(currentSlideTitle);

      expect(nextSlideBrazeEvent).toBe(
        BrazeBuildMyPortfolioEvents.CLICK_PREQUALIFICATION_INVESTOR_PROFILE_NEXT
      );

      currentSlideTitle = SLIDE_TITLES[Steps.EXPERIENCE];
      nextSlideBrazeEvent = getNextSlideBrazeEvent(currentSlideTitle);

      expect(nextSlideBrazeEvent).toBe(
        BrazeBuildMyPortfolioEvents.CLICK_PREQUALIFICATION_EXPERIENCE_NEXT
      );

      currentSlideTitle = SLIDE_TITLES[Steps.INVESTING];
      nextSlideBrazeEvent = getNextSlideBrazeEvent(currentSlideTitle);

      expect(nextSlideBrazeEvent).toBe('');
    });
  });
});
