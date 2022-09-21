import { UserCoin } from '@app/modals/ManageCoins/types';
import {
  EXCHANGES,
  EXCHANGE_TITLES,
  WALLETS,
  WALLET_TITLES,
} from '@app/models';
import { random } from 'lodash';

export const userCoins: UserCoin[] = [
  {
    amount: 0.341,
    source: 'Stacked Wallet',
    sourceIcon: WALLETS.StackedWallet,
    symbol: 'ETH',
  },
  {
    amount: 0.59,
    source: 'Binance123',
    sourceIcon: EXCHANGES.Binance,
    symbol: 'ETH',
  },
  {
    amount: 0.46,
    source: 'FTX',
    sourceIcon: EXCHANGES.FTX,
    symbol: 'ETH',
  },
];

export const getRandomSource = (): {
  source: string;
  sourceIcon: WALLETS | EXCHANGES;
} => {
  const isWallet = random(1, false);
  if (isWallet) {
    const wallets = Object.keys(WALLETS);
    const randomWallet = wallets[random(wallets.length, false)];
    const source = WALLET_TITLES[WALLETS[randomWallet]];
    const sourceIcon = WALLETS[randomWallet];
    return { source, sourceIcon };
  }
  const exchanges = Object.keys(EXCHANGES);
  const randomExchange = exchanges[random(exchanges.length, false)];
  const source = EXCHANGE_TITLES[EXCHANGES[randomExchange]];
  const sourceIcon = EXCHANGES[randomExchange];
  return { source, sourceIcon };
};

export const getUserCoins = (
  amountToMake: number,
  coinSymbol: string
): UserCoin[] => {
  if (amountToMake) {
    const coins = [];
    for (let i = 0; i < amountToMake; i += 1) {
      const { source, sourceIcon } = getRandomSource();
      coins.push({
        symbol: coinSymbol,
        amount: random(0, 1, true),
        source: source || WALLET_TITLES[WALLETS.StackedWallet],
        sourceIcon: sourceIcon || WALLETS.StackedWallet,
      });
    }
    return coins;
  }
  return userCoins.map((coin) => ({
    amount: coin.amount,
    source: coin.source,
    symbol: coinSymbol,
    sourceIcon: coin.sourceIcon,
  }));
};
