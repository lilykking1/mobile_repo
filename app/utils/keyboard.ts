import { Platform } from 'react-native';

export const passwordKeyboardType =
  Platform.OS === 'ios' ? 'default' : 'visible-password';
