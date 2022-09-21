import { RootStore } from '@app/state';

describe('SettingsStore', () => {
  const { settingsStore } = new RootStore();
  it('has a default undefined theme', () => {
    expect(settingsStore.theme).toBe(undefined);
  });
  it('changes the app settings theme', () => {
    settingsStore.selectTheme('dark');
    expect(settingsStore.theme).toBe('dark');
    settingsStore.selectTheme('light');
    expect(settingsStore.theme).toBe('light');
  });
  it('enable and disable 2FA', () => {
    // 2FA enabled
    settingsStore.enableTwoFactorAuth();
    expect(settingsStore.isTwoFactorAuthEnabled).toBe(true);
    // 2FA disabled
    settingsStore.disableTwoFactorAuth();
    expect(settingsStore.isTwoFactorAuthEnabled).toBe(false);
  });
});
