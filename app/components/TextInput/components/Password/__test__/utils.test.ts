import { Theme } from '@app/state/stores/settings/types';
import { palette } from '@app/theme';
import { getInputColorVariant, getPlaceholderColor } from '../utils';

describe('Password input color variant', () => {
  it('gets input color for light theme', () => {
    const theme: Theme = 'light';

    const expected = { color: palette.royalBlue[900] };
    const result = getInputColorVariant(theme);
    expect(result).toEqual(expected);
  });

  it('gets input placeholderColor for light theme', () => {
    const theme: Theme = 'light';

    const expected = palette.grey[650];
    const result = getPlaceholderColor(theme);
    expect(result).toEqual(expected);
  });

  it('gets input color for dark theme', () => {
    const theme: Theme = 'dark';

    const expected = { color: palette.white };
    const result = getInputColorVariant(theme);
    expect(result).toEqual(expected);
  });

  it('gets input placeholderColor for dark theme', () => {
    const theme: Theme = 'dark';

    const expected = palette.grey[650];
    const result = getPlaceholderColor(theme);
    expect(result).toEqual(expected);
  });

  it('gets input color for default theme', () => {
    const expected = { color: palette.royalBlue[900] };
    const result = getInputColorVariant();
    expect(result).toEqual(expected);
  });

  it('gets input placeholderColor for default theme', () => {
    const expected = palette.grey[650];
    const result = getPlaceholderColor();
    expect(result).toEqual(expected);
  });
});
