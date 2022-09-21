import { Asset } from './Asset';

export interface UserDepository {
  name: string;
  amount: number;
  assets?: Asset[];
}

export interface UserExchange extends UserDepository {
  isConnected: boolean;
  hasWebProducts: boolean;
}

export interface UserWallet extends UserDepository {
  isConfigured: boolean;
}
