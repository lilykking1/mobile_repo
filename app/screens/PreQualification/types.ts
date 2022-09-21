import { Dispatch, SetStateAction } from 'react';

export enum InvestmentScenarios {
  FIRST = 1,
  SECOND = 2,
  THIRD = 3,
  FOURTH = 4,
}

export enum Questions {
  IS_NETWORTH_OVER = 1,
  IS_ANNUAL_INCOME_OVER = 2,
  HAS_USER_QUALIFICATIONS = 3,
  IS_CURRENTLY_EMPLOYED = 4,
  HAS_USER_EXPERIENCE = 5,
  INVESTMENT_GOAL = 6,
  LIQUIDITY_IMPORTANCE = 7,
}

export enum Steps {
  PREQUALIFICATION = 'prequalificationStep',
  ACCREDITED_STATUS = 'accreditedStatusStep',
  INVESTOR_PROFILE = 'investorProfileStep',
  EXPERIENCE = 'experienceStep',
  INVESTING = 'investingStep',
}

export enum Sliders {
  ANNUAL_HOUSEHOLD_INCOME = 1,
  HOW_MUCH_TO_INVEST = 2,
  USER_YEARS_OF_EXPERIENCE = 3,
  YEARS_TO_ACHIEVE_GOAL = 4,
  HOW_MUCH_INTO_ALTERNATIVES = 5,
}

type SliderOption = {
  value: number;
  answer: string | number;
};

export type SliderData = {
  answer: string | number;
  setAnswerAction: Dispatch<SetStateAction<string | number>>;
  options: SliderOption[];
};
