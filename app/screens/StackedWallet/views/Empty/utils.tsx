import { WalletDark, WalletLight } from '@app/assets/images';
import { Theme } from '@app/state/stores/settings/types';
import { ImageSourcePropType } from 'react-native';

export const getWalletImage = (theme: Theme = 'light'): ImageSourcePropType =>
  theme === 'light' ? WalletLight : WalletDark;
