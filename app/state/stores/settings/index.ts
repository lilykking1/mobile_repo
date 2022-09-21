/* eslint-disable @typescript-eslint/lines-between-class-members */
import { observable, makeObservable, action } from 'mobx';
import { isHydrated, makePersistable } from 'mobx-persist-store';
import { settingsStore } from '@app/storage';

import { Theme } from './types';

class SettingsStore {
  @observable theme: Theme | undefined;
  @observable isTwoFactorAuthEnabled = false;
  @observable hasBeenPrequalified = false;
  @observable hasCompletedQualification = false;
  @observable hasPushNotifications = true;

  constructor(public rootStore: unknown) {
    makeObservable(this);
    // connection to "authStorage" (mmkv persistant storage)
    // properties passed are the ones that'll be persisted
    makePersistable(this, {
      name: SettingsStore.name,
      properties: [
        'theme',
        'isTwoFactorAuthEnabled',
        'hasBeenPrequalified',
        'hasCompletedQualification',
        'hasPushNotifications',
      ],
      storage: {
        setItem: (key, data) => settingsStore.set(key, data),
        getItem: (key) => settingsStore.getString(key) as string | null,
        removeItem: (key) => settingsStore.delete(key),
      },
    });
  }

  @action selectTheme = (theme?: Theme): void => {
    this.theme = theme;
  };

  @action enableTwoFactorAuth = (): void => {
    this.isTwoFactorAuthEnabled = true;
  };

  @action disableTwoFactorAuth = (): void => {
    this.isTwoFactorAuthEnabled = false;
  };

  @action removePrequalification = (): void => {
    this.hasBeenPrequalified = false;
  };

  @action hasFinishedQualification = (): void => {
    this.hasCompletedQualification = true;
  };

  @action customerIsPrequalified = (): void => {
    this.hasBeenPrequalified = true;
  };

  @action setHasPushNotifications = (hasPushNotfications: boolean): void => {
    this.hasPushNotifications = hasPushNotfications;
  };

  @action getIsHydrated = (): boolean => isHydrated(this);

  // You should not have to call hydrateStore unless you are doing
  // something that's modified the persisted data outside the store
  // hydrate = async (): Promise<void> => {
  //   await hydrateStore(this);
  // };
}

export default SettingsStore;
