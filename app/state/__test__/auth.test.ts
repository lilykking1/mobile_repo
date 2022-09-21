import { RootStore } from '@app/state';

jest.mock('@app/auth/logout');

describe('AuthStore', () => {
  it('signs the user in and out', async () => {
    const { authStore } = new RootStore();
    // sign in
    authStore.signInUser('test@gmail.com');
    expect(authStore.isSignedIn).toBe(true);
    // sign out
    await authStore.signOutUser();
    expect(authStore.isSignedIn).toBe(false);
  });
});
