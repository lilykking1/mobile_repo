import { MOCKED_WALLET_ADDRESS } from './contants';
import { getSelectedCoinData } from './utils';

export const generateWalletAddress = (coinId: string): string => {
  const selectedCoin = getSelectedCoinData(coinId);

  if (!selectedCoin.walletAddress) {
    selectedCoin.walletAddress = MOCKED_WALLET_ADDRESS;
    return MOCKED_WALLET_ADDRESS;
  }

  return '';
};
