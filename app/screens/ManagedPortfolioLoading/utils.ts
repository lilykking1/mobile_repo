import { Theme } from '@app/state/stores/settings/types';
import { PortfolioBitcoin, PortfolioUnicorn } from '@app/assets/images';
import { ImageSourcePropType } from 'react-native';

export const getImageByTheme = (theme: Theme = 'light'): ImageSourcePropType =>
  theme === 'light' ? PortfolioBitcoin : PortfolioUnicorn;
