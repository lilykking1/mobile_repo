import { EXCHANGES, WALLETS } from '@app/models';

export interface UserCoin {
  amount: number;
  symbol: string;
  source: string;
  sourceIcon: WALLETS | EXCHANGES;
}

export enum ManageCoinActionType {
  WITHDRAW = 'withdraw',
  SWAP = 'swap',
}

export interface ActionDetails {
  onPress: () => void;
  label: string;
}
