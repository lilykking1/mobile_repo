import { Asset, Wallet } from '@app/models';

export const findCoinBySymbolOnTheUserWallet = (
  userWallet: Wallet,
  coinSymbol: string
): Asset | undefined =>
  userWallet.tokens?.find(
    (asset) =>
      asset.symbol?.toLocaleLowerCase() === coinSymbol.toLocaleLowerCase()
  );
