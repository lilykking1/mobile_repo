/* eslint-disable @typescript-eslint/lines-between-class-members */
import { createContext } from 'react';

import AmplitudeStore from './amplitude';
import AuthStore from './auth';
import SettingsStore from './settings';
import RiskalyzeStore from './riskalyze';
import CognitoStore from './cognito';
import UserStore from './user';

// root store so all mobx stores are initialize
export class RootStore {
  amplitudeStore: AmplitudeStore;
  authStore: AuthStore;
  settingsStore: SettingsStore;
  riskalyzeStore: RiskalyzeStore;
  cognitoStore: CognitoStore;
  userStore: UserStore;

  constructor() {
    this.amplitudeStore = new AmplitudeStore(this);
    this.authStore = new AuthStore(this);
    this.settingsStore = new SettingsStore(this);
    this.riskalyzeStore = new RiskalyzeStore(this);
    this.cognitoStore = new CognitoStore(this);
    this.userStore = new UserStore(this);
  }
}

// create one context so App.tsx only needs one provider
export const RootContext = createContext<RootStore>(null);
