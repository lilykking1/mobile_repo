import { ManagedPortfolioStatus } from '@app/screens/Dashboard/fragments/ManagedPortfolioCard/types';

export const enum AmplitudeDashboardEvents {
  GET_STARTED_MANAGED_PORTFOLIO = 'dashboard click get started on mp',
  REVIEW_MANAGED_PORTFOLIO = 'dashboard click review my portfolio',
  CONTINUE_BUILDING_MANAGED_PORTFOLIO = 'dashboard click continue building portfolio',
  ALERTS = 'click alerts',
  MARK_ALL_ALERTS = 'alerts mark all alerts as read',
  HIDE_OR_UNHIDE = 'click hide or unhide button',
  CLICK_NEWS_ARTICLE = 'click on news article',
}

const amplitudeEvents = {
  [ManagedPortfolioStatus.NOT_STARTED]:
    AmplitudeDashboardEvents.GET_STARTED_MANAGED_PORTFOLIO,
  [ManagedPortfolioStatus.STARTED]:
    AmplitudeDashboardEvents.CONTINUE_BUILDING_MANAGED_PORTFOLIO,
  [ManagedPortfolioStatus.CONFIGURED]:
    AmplitudeDashboardEvents.REVIEW_MANAGED_PORTFOLIO,
};

export const getAmplitudeEvent = (status: ManagedPortfolioStatus): string =>
  amplitudeEvents[status];
