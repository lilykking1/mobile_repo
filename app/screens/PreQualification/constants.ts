import { translate } from '@app/i18n';
import { InvestmentScenarios, Steps } from './types';

export const INVESTMENT_SCENARIOS_ALLOWED_RATIOS = {
  [InvestmentScenarios.FIRST]: 0.1,
  [InvestmentScenarios.SECOND]: 0.3,
  [InvestmentScenarios.THIRD]: 0.2,
  [InvestmentScenarios.FOURTH]: 0.4,
};

export const SLIDE_TITLES = {
  [Steps.PREQUALIFICATION]: translate('screens.prequalification.prequalTitle'),
  [Steps.ACCREDITED_STATUS]: translate(
    'screens.prequalification.accStatusTitle'
  ),
  [Steps.INVESTOR_PROFILE]: translate(
    'screens.prequalification.investorProfileTitle'
  ),
  [Steps.EXPERIENCE]: translate('screens.prequalification.expTitle'),
  [Steps.INVESTING]: translate('screens.prequalification.investingTitle'),
};

export const YES_OR_NO_OPTIONS = [
  translate('modals.questionsModal.yes'),
  translate('modals.questionsModal.no'),
];
export const YES_ANSWER = YES_OR_NO_OPTIONS[0];
export const NO_ANSWER = YES_OR_NO_OPTIONS[1];

export const INVESTMENT_GOAL_OPTIONS = [
  translate('modals.questionsModal.acc'),
  translate('modals.questionsModal.preserv'),
  translate('modals.questionsModal.income'),
  translate('modals.questionsModal.retire'),
  translate('modals.questionsModal.short'),
];

export const LIQUIDITY_IMPORTANCE_OPTIONS = [
  translate('modals.questionsModal.very-imp'),
  translate('modals.questionsModal.important'),
  translate('modals.questionsModal.somewhat'),
  translate('modals.questionsModal.doesnt'),
];

export const DOLLAR_SIGN = '$';
export const SPACE_DASH = ' - ';
export const MAX_NET_WORTH_DIGITS = 8;
export const HOW_MUCH_TO_INVEST_SLIDER_STEP = 1;

export const RESETED_HOW_MUCH_TO_INVEST_SLIDER_STEP = {
  displayed: '',
  value: 0,
};

export const SLIDERS_NUMERIC_STEPS = {
  zero: 0,
  ten: 10,
  tenThousand: 10_000,
  fifteenThousand: 15_000,
  twentyThousand: 20_000,
  thirtyThousand: 30_000,
};

export const SLIDERS_TEXTUAL_STEPS = {
  lessThanFiftyThousand: '<$50k',
  fiftyKToOneHundredK: '$50k-100k',
  oneToTwoHundredThousand: '$100k-$200k',
  moreThanTwoHundredThousand: '>$200k',
  zeroDollars: '$0',
  tenThousandDollars: '$10,000',
  twentyThousandDollars: '$20,000',
  thirtyThousandDollars: '$30,000',
  zero: '0',
  lessThanOne: '<1',
  oneToFive: '1-5',
  fivePlus: '5+',
  zeroToOne: '0-1',
  zeroPercent: '0%',
  oneToFiftyPercent: '1-50%',
  fiftyOneToSeventyFivePercent: '51-75%',
  oneHundredPercent: '100%',
};

export const INCOME_MORE_THAN_FIFTYK_OPTIONS = [
  SLIDERS_TEXTUAL_STEPS.fiftyKToOneHundredK,
  SLIDERS_TEXTUAL_STEPS.oneToTwoHundredThousand,
  SLIDERS_TEXTUAL_STEPS.moreThanTwoHundredThousand,
];

export const ANNUAL_HOUSEHOLD_INCOME_OPTIONS = [
  {
    value: SLIDERS_NUMERIC_STEPS.zero,
    answer: SLIDERS_TEXTUAL_STEPS.lessThanFiftyThousand,
  },
  {
    value: SLIDERS_NUMERIC_STEPS.tenThousand,
    answer: SLIDERS_TEXTUAL_STEPS.fiftyKToOneHundredK,
  },
  {
    value: SLIDERS_NUMERIC_STEPS.twentyThousand,
    answer: SLIDERS_TEXTUAL_STEPS.oneToTwoHundredThousand,
  },
  {
    value: SLIDERS_NUMERIC_STEPS.thirtyThousand,
    answer: SLIDERS_TEXTUAL_STEPS.moreThanTwoHundredThousand,
  },
];
export const USER_YEARS_OF_EXPERIENCE_OPTIONS = [
  {
    value: SLIDERS_NUMERIC_STEPS.zero,
    answer: SLIDERS_TEXTUAL_STEPS.zero,
  },
  {
    value: SLIDERS_NUMERIC_STEPS.fifteenThousand,
    answer: SLIDERS_TEXTUAL_STEPS.oneToFive,
  },
  {
    value: SLIDERS_NUMERIC_STEPS.thirtyThousand,
    answer: SLIDERS_TEXTUAL_STEPS.fivePlus,
  },
];
export const YEARS_TO_ACHIEVE_GOAL_OPTIONS = [
  {
    value: SLIDERS_NUMERIC_STEPS.zero,
    answer: SLIDERS_TEXTUAL_STEPS.zeroToOne,
  },
  {
    value: SLIDERS_NUMERIC_STEPS.fifteenThousand,
    answer: SLIDERS_TEXTUAL_STEPS.oneToFive,
  },
  {
    value: SLIDERS_NUMERIC_STEPS.thirtyThousand,
    answer: SLIDERS_TEXTUAL_STEPS.fivePlus,
  },
];
export const HOW_MUCH_INTO_ALTERNATIVES_OPTIONS = [
  {
    value: SLIDERS_NUMERIC_STEPS.zero,
    answer: SLIDERS_TEXTUAL_STEPS.zeroPercent,
  },
  {
    value: SLIDERS_NUMERIC_STEPS.tenThousand,
    answer: SLIDERS_TEXTUAL_STEPS.oneToFiftyPercent,
  },
  {
    value: SLIDERS_NUMERIC_STEPS.twentyThousand,
    answer: SLIDERS_TEXTUAL_STEPS.fiftyOneToSeventyFivePercent,
  },
  {
    value: SLIDERS_NUMERIC_STEPS.thirtyThousand,
    answer: SLIDERS_TEXTUAL_STEPS.oneHundredPercent,
  },
];

export const FAQ_ANCHOR_VALUES = {
  [Steps.PREQUALIFICATION]: 0,
  [Steps.ACCREDITED_STATUS]: 1,
  [Steps.INVESTOR_PROFILE]: 2,
  [Steps.EXPERIENCE]: 3,
  [Steps.INVESTING]: 4,
};
