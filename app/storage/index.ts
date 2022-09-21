import { MMKV } from 'react-native-mmkv';
import { configurePersistable } from 'mobx-persist-store';

export * from './types';

// create persistant storage instance for authentication
export const authStorage = new MMKV({
  // id of mmkv storage instance
  id: 'auth',
});

export const settingsStore = new MMKV({
  // id of mmkv storage instance
  id: 'settings',
});

export const riskalyzeStorage = new MMKV({
  // id of mmkv storage instance
  id: 'riskalyze',
});

export const cognitoStorage = new MMKV({
  // id of mmkv storage instance
  id: 'cognito',
});

export const userStorage = new MMKV({
  // id of mmkv storage instance
  id: 'user',
});

export const amplitudeStorage = new MMKV({
  // id of mmkv storage instance
  id: 'amplitude',
});

// apply persist store configs to all MMKV instances, so let's debug in dev
configurePersistable({
  debugMode: __DEV__,
});
