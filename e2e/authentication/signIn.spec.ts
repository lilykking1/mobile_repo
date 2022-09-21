import { AUTH_EMAIL, AUTH_PASSWORD } from '@env';

describe('Sign out flow', () => {
  it('should tap on Sign In button', async () => {
    await element(by.id('Onboarding.SignInButton')).tap();
  });

  it('test login screen email input', async () => {
    await element(by.id('SignIn.Email')).typeText(AUTH_EMAIL);
  });

  it('test login screen password input', async () => {
    await element(by.id('SignIn.Password')).typeText(AUTH_PASSWORD);
  });

  it('should tap on Sign In button', async () => {
    await element(by.id('SignIn.SignInButton')).tap();
  });

  it('should tap on Dark Theme card', async () => {
    await element(by.id('ThemeCard.dark')).tap();
  });

  it('should tap on Settings Bottom Tab', async () => {
    await waitFor(element(by.id('TwoFactorAuth.RemindLater')))
      .toBeVisible()
      .withTimeout(4500);
    await element(by.id('TwoFactorAuth.RemindLater')).tap();
    await waitFor(element(by.id('BottomTabs.Settings')))
      .toBeVisible()
      .withTimeout(1000);
    await element(by.id('BottomTabs.Settings')).tap();
  });

  it('should tap on Profile list item', async () => {
    await waitFor(element(by.id('Settings.Profile')))
      .toBeVisible()
      .withTimeout(1000);
    await element(by.id('Settings.Profile')).tap();
  });

  it('should tap on Log out button', async () => {
    await waitFor(element(by.id('Profile.LogOut')))
      .toBeVisible()
      .withTimeout(4000);
    await element(by.id('Profile.LogOut')).tap();
  });

  it('should tap on Sign In button', async () => {
    await waitFor(element(by.id('Onboarding.SignInButton')))
      .toBeVisible()
      .withTimeout(3000);
  });
});
