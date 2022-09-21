/* eslint-disable @typescript-eslint/lines-between-class-members */
import { observable, makeObservable, action } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { authStorage } from '@app/storage';
import { logout } from '@app/auth';
import { client } from '@app/graphql';

class AuthStore {
  @observable userName: string = null;
  @observable firstName: string = null;
  @observable lastName: string = null;
  @observable email: string = null;
  @observable accountBalance: number = null;
  @observable isSignedIn = false;

  constructor(public rootStore: unknown) {
    makeObservable(this);
    // connection to "authStorage" (mmkv persistant storage)
    // properties passed are the ones that'll be persisted
    makePersistable(this, {
      name: AuthStore.name,
      properties: ['isSignedIn', 'email', 'firstName', 'lastName'],
      storage: {
        setItem: (key, data) => authStorage.set(key, data),
        getItem: (key) => authStorage.getString(key) as string | null,
        removeItem: (key) => authStorage.delete(key),
      },
    });
  }

  @action signOutStore = (): void => {
    this.isSignedIn = false;
    this.userName = null;
    this.lastName = null;
    this.firstName = null;
    this.email = null;
  };

  @action signOutUser = async (): Promise<void> => {
    try {
      // logout user in Auth0 and clear MMKV auth storage
      await logout();
      // clear all auth related keys
      authStorage.clearAll();
      // clear apollo cache
      await client.cache.reset();
      // clear mobx observables
      this.signOutStore();
    } catch (e) {
      throw new Error(e);
    }
  };

  @action signInUser = (email: string): void => {
    this.isSignedIn = true;
    this.userName = 'dummy';
    this.firstName = 'Aleksandr';
    this.lastName = 'Klitko';
    this.email = email;
  };

  // You should not have to call hydrateStore unless you are doing
  // something that's modified the persisted data outside the store
  // hydrate = async (): Promise<void> => {
  //   await hydrateStore(this);
  // };
}

export default AuthStore;
