import { Theme } from '@app/state/stores/settings/types';
import {
  BackgroundWelcomeDark,
  BackgroundWelcomeLight,
} from '@app/assets/images';
import { translate } from '@app/i18n';
import { TextButtonVariant } from '@app/components/Buttons/TextButton/types';
import {
  getBackgroundImage,
  GetPortfolioAction,
  getPortfolioAction,
  getSubtitleMessage,
  getWatchVideoVariant,
} from '../utils';

describe('Validate Welcome screen utils', () => {
  describe('Get correct styles', () => {
    it('get correct background based on theme', () => {
      let expected = BackgroundWelcomeLight;
      let result = getBackgroundImage(undefined);
      expect(result).toEqual(expected);

      let theme: Theme = 'light';
      expected = BackgroundWelcomeLight;
      result = getBackgroundImage(theme);
      expect(result).toEqual(expected);

      theme = 'dark';
      expected = BackgroundWelcomeDark;
      result = getBackgroundImage(theme);
      expect(result).toEqual(expected);
    });
    it('get correct button variant based on the theme', () => {
      let theme: Theme = 'light';
      let expected: TextButtonVariant = 'secondary';
      let result = getWatchVideoVariant(theme);
      expect(result).toEqual(expected);

      theme = 'dark';
      expected = 'primary';
      result = getWatchVideoVariant(theme);
      expect(result).toEqual(expected);
    });
    it('get correct portfolio action interface when started or not portfolio action', () => {
      const startedPortfolioAction = true;
      let expected: GetPortfolioAction = {
        label: translate('screens.welcome.continuePortfolioAction'),
        variant: 'green',
      };
      let result = getPortfolioAction(startedPortfolioAction);
      expect(result).toEqual(expected);

      expected = {
        label: translate('screens.welcome.initialPortfolioAction'),
        variant: 'primary',
      };
      result = getPortfolioAction(!startedPortfolioAction);
      expect(result).toEqual(expected);
    });
  });

  describe('Get correct strings', () => {
    it('get correct subtitle when started or not portfolio action', () => {
      const startedPortfolioAction = true;
      let expected = translate('screens.welcome.continueSubtitle');
      let result = getSubtitleMessage(startedPortfolioAction);
      expect(result).toEqual(expected);

      expected = translate('screens.welcome.initialSubtitle');
      result = getSubtitleMessage(!startedPortfolioAction);
      expect(result).toEqual(expected);
    });
  });
});
