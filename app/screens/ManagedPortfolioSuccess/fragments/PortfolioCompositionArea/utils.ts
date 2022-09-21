import { PortfolioType } from '@app/models/Portfolio';
import { PortfolioCompositionDetails } from './types';

export const getCoinStackDetailsRoute = (
  portfolioType: PortfolioType
): PortfolioCompositionDetails => {
  switch (portfolioType) {
    case PortfolioType.STABLE_COINS:
      return PortfolioCompositionDetails.STABLE_COINS;
    case PortfolioType.INDIVIDUAL_COINS:
      return PortfolioCompositionDetails.INDIVIDUAL_COINS;
    default:
      return PortfolioCompositionDetails.MANAGED_ASSETS;
  }
};
