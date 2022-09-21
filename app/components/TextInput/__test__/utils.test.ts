import { Theme } from '@app/state/stores/settings/types';

import { getContainerStyles } from '../utils';
import { lightStyles, darkStyles } from '../styles';

describe('TextInput container styles', () => {
  // light theme
  it('gets active styles for light theme', () => {
    const active = true;
    const touched = false;
    const error = false;
    const value = 'false';
    const theme: Theme = 'light';

    const expected = lightStyles.active;
    const result = getContainerStyles(active, touched, error, value, theme);
    expect(result).toEqual(expected);
  });
  it('gets error styles for light theme', () => {
    const active = false;
    const touched = true;
    const error = true;
    const value = 'false';
    const theme: Theme = 'light';

    const expected = lightStyles.error;
    const result = getContainerStyles(active, touched, error, value, theme);
    expect(result).toEqual(expected);
  });
  it('gets filled styles for light theme', () => {
    const active = false;
    const touched = false;
    const error = false;
    const value = 'false';
    const theme: Theme = 'light';

    const expected = lightStyles.filled;
    const result = getContainerStyles(active, touched, error, value, theme);
    expect(result).toEqual(expected);
  });
  it('gets default styles for light theme', () => {
    const active = false;
    const touched = false;
    const error = false;
    const value = '';
    const theme: Theme = 'light';

    const expected = lightStyles.default;
    const result = getContainerStyles(active, touched, error, value, theme);
    expect(result).toEqual(expected);
  });

  // dark theme
  it('gets active styles for dark theme', () => {
    const active = true;
    const touched = false;
    const error = false;
    const value = 'false';
    const theme: Theme = 'dark';

    const expected = darkStyles.active;
    const result = getContainerStyles(active, touched, error, value, theme);
    expect(result).toEqual(expected);
  });
  it('gets error styles for dark theme', () => {
    const active = false;
    const touched = true;
    const error = true;
    const value = 'false';
    const theme: Theme = 'dark';

    const expected = darkStyles.error;
    const result = getContainerStyles(active, touched, error, value, theme);
    expect(result).toEqual(expected);
  });
  it('gets filled styles for dark theme', () => {
    const active = false;
    const touched = false;
    const error = false;
    const value = 'false';
    const theme: Theme = 'dark';

    const expected = darkStyles.filled;
    const result = getContainerStyles(active, touched, error, value, theme);
    expect(result).toEqual(expected);
  });
  it('gets default styles for dark theme', () => {
    const active = false;
    const touched = false;
    const error = false;
    const value = '';
    const theme: Theme = 'dark';

    const expected = darkStyles.default;
    const result = getContainerStyles(active, touched, error, value, theme);
    expect(result).toEqual(expected);
  });
});
