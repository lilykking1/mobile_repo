import { ManagedPortfolioStatus } from '@app/screens/Dashboard/fragments/ManagedPortfolioCard/types';

export enum BrazeDashboardEvents {
  GET_STARTED_MANAGED_PORTFOLIO = 'dashboard click get started on mp',
  REVIEW_MANAGED_PORTFOLIO = 'dashboard click review my portfolio',
  CONTINUE_BUILDING_MANAGED_PORTFOLIO = 'dashboard click continue building portfolio',
}

const brazeEvents = {
  [ManagedPortfolioStatus.NOT_STARTED]:
    BrazeDashboardEvents.GET_STARTED_MANAGED_PORTFOLIO,
  [ManagedPortfolioStatus.STARTED]:
    BrazeDashboardEvents.CONTINUE_BUILDING_MANAGED_PORTFOLIO,
  [ManagedPortfolioStatus.CONFIGURED]:
    BrazeDashboardEvents.REVIEW_MANAGED_PORTFOLIO,
};

export const getBrazeEvent = (status: ManagedPortfolioStatus): string =>
  brazeEvents[status];
