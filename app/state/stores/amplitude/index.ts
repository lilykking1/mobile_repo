import { action, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { amplitudeStorage } from '@app/storage';

class AmplitudeStore {
  @observable alreadyLoggedUniqueEvents = [];

  constructor(public rootStore: unknown) {
    makeObservable(this);
    makePersistable(this, {
      name: AmplitudeStore.name,
      properties: ['alreadyLoggedUniqueEvents'],
      storage: {
        setItem: (key, data) => amplitudeStorage.set(key, data),
        getItem: (key) => amplitudeStorage.getString(key) as string | null,
        removeItem: (key) => amplitudeStorage.delete(key),
      },
    });
  }

  @action addAlreadyLoggedUniqueEvent = (eventName: string): void => {
    this.alreadyLoggedUniqueEvents = [
      ...this.alreadyLoggedUniqueEvents,
      eventName,
    ];
  };

  @action isUniqueEventAlreadyLogged = (eventName: string): boolean =>
    this.alreadyLoggedUniqueEvents.some((event) => event === eventName);
}

export default AmplitudeStore;
