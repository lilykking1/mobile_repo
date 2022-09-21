import { ButtonVariant } from '@app/components/Buttons/Button/types';
import { TextButtonVariant } from '@app/components/Buttons/TextButton/types';
import { translate } from '@app/i18n';
import { Theme } from '@app/state/stores/settings/types';
import {
  BackgroundWelcomeDark,
  BackgroundWelcomeLight,
} from '@app/assets/images';
import { ImageSourcePropType } from 'react-native';

export interface GetPortfolioAction {
  label: string;
  variant: ButtonVariant;
}

export const getBackgroundImage = (
  theme: Theme = 'light'
): ImageSourcePropType =>
  theme === 'light' ? BackgroundWelcomeLight : BackgroundWelcomeDark;

export const getSubtitleMessage = (startedPortfolioAction: boolean): string =>
  startedPortfolioAction
    ? translate('screens.welcome.continueSubtitle')
    : translate('screens.welcome.initialSubtitle');

export const getPortfolioAction = (
  startedPortfolioAction: boolean
): GetPortfolioAction => {
  let label: string = translate('screens.welcome.initialPortfolioAction');
  let variant: ButtonVariant = 'primary';

  if (startedPortfolioAction) {
    label = translate('screens.welcome.continuePortfolioAction');
    variant = 'green';
  }

  return {
    label,
    variant,
  };
};

export const getWatchVideoVariant = (theme: Theme): TextButtonVariant =>
  theme === 'dark' ? 'primary' : 'secondary';
