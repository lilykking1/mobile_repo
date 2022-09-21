import { translate } from '@app/i18n';
import { SECONDS_PER_MINUTE } from './constants';

export const getDefaultLabel = (currentCountdown: number): string => {
  const minutes = Math.floor(currentCountdown / SECONDS_PER_MINUTE);
  if (minutes > 0) {
    return translate(
      'screens.closePortfolioConversion.convertingProductLabelInMinutes',
      {
        countdown: minutes,
      }
    );
  }

  return translate(
    'screens.closePortfolioConversion.convertingProductLabelInSeconds',
    {
      countdown: currentCountdown,
    }
  );
};

export const getCoinAmount = (
  coinAmount: string,
  conversionCoin: string
): string => `${coinAmount} ${conversionCoin.toUpperCase()}`;
