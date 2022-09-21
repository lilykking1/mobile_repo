import { translate } from '@app/i18n';

export interface Lending {
  text: string;
  amount: string;
  coin: string;
}

export interface assetsDetails {
  assetName: string;
  fiatAmount: string;
  assetChange: number;
  accrualPercentage: number;
  coins: string[];
}

export interface CoinStackDetails {
  coin: string;
  coinAmount: string;
  fiatAmount: string;
  lending?: Lending;
}
export interface CoinStackData {
  amount: string;
  portfolioType: PortfolioType;
  portfolioChange: number;
  accrualPercentage: number;
  percentage: string;
  coins: string[];
  color: string;
  details: CoinStackDetails[] | assetsDetails[];
}

export interface StackBarData {
  percentage: number;
  color: string;
}

export enum PortfolioType {
  INDIVIDUAL_COINS = 'individualCoins',
  STABLE_COINS = 'stableCoins',
  MANAGED_ASSETS = 'managedAssets',
}

export const PORTFOLIO_TYPES_TITLES = {
  [PortfolioType.INDIVIDUAL_COINS]: translate(
    'screens.managedPortfolio.portfolios.individualCoins'
  ),
  [PortfolioType.STABLE_COINS]: translate(
    'screens.managedPortfolio.portfolios.stableCoins'
  ),
  [PortfolioType.MANAGED_ASSETS]: translate(
    'screens.managedPortfolio.portfolios.managedAssets'
  ),
};

export const PORTFOLIO_USE_HEADER_GRIDS = {
  [PortfolioType.INDIVIDUAL_COINS]: true,
  [PortfolioType.STABLE_COINS]: false,
  [PortfolioType.MANAGED_ASSETS]: true,
};
