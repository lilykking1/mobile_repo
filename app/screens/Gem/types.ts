export interface GemWallet {
  asset: string;
  address?: string;
  memo?: string;
  defaultAsset?: boolean;
}

export interface GemData {
  userId: string;
  eventType: string;
}
export interface GemConfiguration {
  apiKey: string;
  environment?: string;
  partnerName: string;
  partnerIconUrl: string;
  partnerLogoUrl?: string;
  wallets?: GemWallet[];
  userEmail?: string;
  userId?: string;
  intent?: string;
  defaultFiat?: string;
  fiatCurrencies?: string;
  features?: any;
  onMessage?: () => void;
}

export enum GemFlowInitator {
  ADD_FUNDS = 'ADD_FUNDS',
  MARKETWATCH = 'MARKETWATCH',
}
