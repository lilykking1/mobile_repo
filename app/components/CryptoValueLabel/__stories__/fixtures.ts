import { CryptoValueLabelVariant } from '../types';

export const variants: Record<
  CryptoValueLabelVariant,
  CryptoValueLabelVariant
> = {
  large: 'large',
  normal: 'normal',
};

export const coinsPrefix = ['', '₿', 'Ξ', '✕'];

export const coinsSuffix = ['BTC', 'ETH', 'XRP'];

export const trueOrFalse = ['true', 'false'];

export const getBoolean = (string: string): boolean => {
  if (string === 'true') {
    return true;
  }

  return false;
};
