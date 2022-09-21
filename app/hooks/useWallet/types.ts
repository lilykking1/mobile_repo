import { Asset, Wallet } from '@app/models';

export type ContextValue = {
  wallet: Wallet;
  getCoinBySymbol: (coinSymbol: string) => Asset | undefined;
};
