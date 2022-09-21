import { COINS_OPTIONS } from './contants';
import { DepositCoinData } from './types';

export const getSelectedCoinData = (
  selectedCoinId: string
): DepositCoinData => {
  const selectedCoinIndex = COINS_OPTIONS.findIndex(
    (option) => option.id === selectedCoinId
  );

  return COINS_OPTIONS[selectedCoinIndex];
};

export const getWalletAddress = (selectedCoinId: string): string | undefined =>
  getSelectedCoinData(selectedCoinId)?.walletAddress;
