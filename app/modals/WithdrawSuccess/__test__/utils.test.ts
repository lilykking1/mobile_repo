import { Theme } from '@app/state/stores/settings/types';
import { getBackgroundInput } from '../utils';
import { inputStyle } from '../styles';

describe('get correct styles', () => {
  it('gets a different input background, based on the theme', () => {
    let expected = inputStyle.light;
    let result = getBackgroundInput(undefined);
    expect(result).toEqual(expected);

    let theme: Theme = 'dark';
    expected = inputStyle.dark;
    result = getBackgroundInput(theme);
    expect(result).toEqual(expected);

    theme = 'light';
    expected = inputStyle.light;
    result = getBackgroundInput(theme);
    expect(result).toEqual(expected);
  });
});
