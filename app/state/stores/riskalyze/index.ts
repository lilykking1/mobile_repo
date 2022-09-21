/* eslint-disable @typescript-eslint/lines-between-class-members */
import { observable, makeObservable, action } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { riskalyzeStorage } from '@app/storage';

class RiskalyzeStore {
  @observable lastVisitedUrl: string = null;

  constructor(public rootStore: unknown) {
    makeObservable(this);
    // connection to "riskalyzeStorage" (mmkv persistant storage)
    // properties passed are the ones that'll be persisted
    makePersistable(this, {
      name: RiskalyzeStore.name,
      properties: ['lastVisitedUrl'],
      storage: {
        setItem: (key, data) => riskalyzeStorage.set(key, data),
        getItem: (key) => riskalyzeStorage.getString(key) as string | null,
        removeItem: (key) => riskalyzeStorage.delete(key),
      },
    });
  }

  @action setLastVisitedUrl = (url: string): void => {
    this.lastVisitedUrl = url;
  };

  // You should not have to call hydrateStore unless you are doing
  // something that's modified the persisted data outside the store
  // hydrate = async (): Promise<void> => {
  //   await hydrateStore(this);
  // };
}

export default RiskalyzeStore;
