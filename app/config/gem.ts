import queryString from 'query-string';
import {
  GEM_ONRAMP_PARTNER_ICON_URL,
  GEM_ONRAMP_PARTNER_NAME,
  GEM_ONRAMP_URL,
  GEM_ONRAMP_API_KEY,
} from '@env';
import { GemConfiguration, GemWallet } from '@app/screens/Gem/types';

/**
 * https://gem.co/getting-started-onramp
 *
 * 
 *
 {
  __GEM_EXIT
  userId?: string;

  // __GEM_SUCCESS
  transactionId?: string;
  transactionType?: string;
  sourceCurrency?: string;
  sourceAmount?: number;
  destinationCurrency?: string;
  destinationAmount?: number;
  userId?: string;

  // __GEM_ERROR
  error?: { 
    error: string; 
    description: string;
    userId?: string;
  };

  // __GEM_PROMPT
  instructions?: {
    sendToWalletAddress: string;
    assetId: string;
    assetTicker: string;
    sendAmount: number;
    userId?: string;
  };
}
**/

export const GemMessages = {
  SUCCESS: '__GEM_SUCCESS',
  EXIT: '__GEM_EXIT',
  ERROR: '__GEM_ERROR',
  PROMPT: '__GEM_PROMPT',
};

export const GemIntent = {
  BUY: 'buy',
  SELL: 'sell',
};

export const GemCurrencies = 'usd';

const onRampConfig: GemConfiguration = {
  partnerName: GEM_ONRAMP_PARTNER_NAME,
  partnerIconUrl: GEM_ONRAMP_PARTNER_ICON_URL,
  apiKey: GEM_ONRAMP_API_KEY,
  defaultFiat: 'usd',
  fiatCurrencies: GemCurrencies,
};

const defaultWallets: GemWallet[] = [
  {
    asset: 'btc',
  },
  {
    asset: 'eth',
  },
];

const defaultGemConfig = queryString.stringify({
  ...onRampConfig,
  wallets: JSON.stringify(defaultWallets),
});

export const gemOnRampSrc = `${GEM_ONRAMP_URL}?${defaultGemConfig}`;

export const getGemOnRampSrcForAsset = (
  intent: string,
  assets: GemWallet[],
  destinationAmount: number,
  amountLocked = false,
  emailAddress?: string
): string => {
  const features = {
    wyre: {
      trade: {
        destinationAmount,
        lockAmount: amountLocked,
      },
    },
  };
  const config = queryString.stringify({
    ...onRampConfig,
    intent,
    features: JSON.stringify(features),
    wallets: JSON.stringify(assets),
    userEmail: emailAddress,
  });
  return `${GEM_ONRAMP_URL}?${config}`;
};
