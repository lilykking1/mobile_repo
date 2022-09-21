/* eslint-disable @typescript-eslint/lines-between-class-members */
import { observable, makeObservable, action } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { userStorage } from '@app/storage';

class UserStore {
  @observable hasStartedManagedPortfolioSetup = false;
  @observable hasTakenPreQualification = false;
  @observable hasTakenRiskAssessment = false;
  @observable hasCompletedManagedPortfolioSetup = false;

  constructor(public rootStore: unknown) {
    makeObservable(this);
    // connection to "userStorage" (mmkv persistant storage)
    // properties passed are the ones that'll be persisted
    makePersistable(this, {
      name: UserStore.name,
      properties: [
        'hasStartedManagedPortfolioSetup',
        'hasTakenPreQualification',
        'hasTakenRiskAssessment',
        'hasCompletedManagedPortfolioSetup',
      ],
      storage: {
        setItem: (key, data) => userStorage.set(key, data),
        getItem: (key) => userStorage.getString(key) as string | null,
        removeItem: (key) => userStorage.delete(key),
      },
    });
  }

  @action setHasStartedManagedPortfolioSetup = (value: boolean): void => {
    this.hasStartedManagedPortfolioSetup = value;
  };

  @action setHasTakenPreQualification = (value: boolean): void => {
    this.hasTakenPreQualification = value;
  };

  @action setHasTakenRiskAssessment = (value: boolean): void => {
    this.hasTakenRiskAssessment = value;
  };

  @action setHasCompletedManagedPortfolioSetup = (value: boolean): void => {
    this.hasCompletedManagedPortfolioSetup = value;
  };
}

export default UserStore;
