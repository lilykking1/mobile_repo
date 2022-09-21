import { getWalletImage } from '@app/screens/StackedWallet/views/Empty/utils';
import { Theme } from '@app/state/stores/settings/types';
import { WalletDark, WalletLight } from '@app/assets/images';

describe('Get correct styles', () => {
  it('get correct wallet image file based on theme', () => {
    let expected = WalletLight;
    let result = getWalletImage(undefined);
    expect(result).toEqual(expected);

    let theme: Theme = 'light';
    expected = WalletLight;
    result = getWalletImage(theme);
    expect(result).toEqual(expected);

    theme = 'dark';
    expected = WalletDark;
    result = getWalletImage(theme);
    expect(result).toEqual(expected);
  });
});
