/* eslint-disable @typescript-eslint/lines-between-class-members */
import { observable, makeObservable, action } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { cognitoStorage } from '@app/storage';

class CognitoStore {
  @observable isKycRequired = true;

  constructor(public rootStore: unknown) {
    makeObservable(this);
    // connection to "cognitoStorage" (mmkv persistant storage)
    // properties passed are the ones that'll be persisted
    makePersistable(this, {
      name: CognitoStore.name,
      properties: ['isKycRequired'],
      storage: {
        setItem: (key, data) => cognitoStorage.set(key, data),
        getItem: (key) => cognitoStorage.getString(key) as string | null,
        removeItem: (key) => cognitoStorage.delete(key),
      },
    });
  }

  @action setIsKycRequired = (isKycRequired: boolean): void => {
    this.isKycRequired = isKycRequired;
  };
}

export default CognitoStore;
