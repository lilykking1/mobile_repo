import { Theme } from '@app/state/stores/settings/types';
import { PortfolioBitcoin, PortfolioUnicorn } from '@app/assets/images';
import { getImageByTheme } from '../utils';

describe('Assets by theme', () => {
  it('should return correct image source by theme', () => {
    let theme: Theme = 'light';
    let expected = PortfolioBitcoin;
    let result = getImageByTheme(theme);

    expect(result).toEqual(expected);

    theme = 'dark';
    expected = PortfolioUnicorn;
    result = getImageByTheme(theme);
    expect(result).toEqual(expected);
  });
});
