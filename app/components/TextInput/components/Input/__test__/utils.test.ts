import { TypographyVariant } from '@app/components/Typography/types';
import { Theme } from '@app/state/stores/settings/types';

import {
  getSuffixVariant,
  getInputTextStyles,
  getPlaceholderColor,
} from '../utils';
import { lightTextStyles, darkTextStyles } from '../styles';
import {
  LIGHT_DEFAULT_TEXT,
  LIGHT_DISABLED_TEXT,
  DARK_DEFAULT_TEXT,
  DARK_DISABLED_TEXT,
} from '../constants';

describe('Get correct colors of Suffix, types and booleans', () => {
  it('getting variant of suffix typography  based on theme and if it is editing', () => {
    const isEditing = true;
    let theme: Theme = 'light';
    let expected: TypographyVariant = 'main.200';
    let result = getSuffixVariant(isEditing, theme);
    expect(result).toEqual(expected);

    expected = 'secondary.900';
    result = getSuffixVariant(!isEditing, theme);
    expect(result).toEqual(expected);

    theme = 'dark';
    expected = 'grey.700';
    result = getSuffixVariant(isEditing, theme);
    expect(result).toEqual(expected);

    expected = 'grey.300';
    result = getSuffixVariant(!isEditing, theme);
    expect(result).toEqual(expected);
  });
});

describe('Input text colors for different states', () => {
  // light
  it('gets correct color of input text for filled light theme', () => {
    const theme: Theme = 'light';
    const disabled = false;
    const filledValue = 'email';

    const expected = lightTextStyles.filled;
    const result = getInputTextStyles(disabled, filledValue, theme);
    expect(result).toEqual(expected);
  });

  it('gets correct color of input text for filled/disabled light theme', () => {
    const theme: Theme = 'light';
    const disabled = true;
    const filledValue = 'email';

    const expected = lightTextStyles.disabled;
    const result = getInputTextStyles(disabled, filledValue, theme);
    expect(result).toEqual(expected);
  });

  it('gets correct color of input text for empty light theme', () => {
    const theme = 'light';
    const disabled = false;
    const emptyValue = null;

    const expected = null;
    const result = getInputTextStyles(disabled, emptyValue, theme);
    expect(result).toEqual(expected);
  });

  // dark
  it('gets correct color of input text for empty dark theme', () => {
    const theme: Theme = 'dark';
    const disabled = false;
    const filledValue = 'email';

    const expected = darkTextStyles.filled;
    const result = getInputTextStyles(disabled, filledValue, theme);
    expect(result).toEqual(expected);
  });

  it('gets correct color of input text for filled/disabled dark theme', () => {
    const theme: Theme = 'dark';
    const disabled = true;
    const emptyValue = null;

    const expected = darkTextStyles.disabled;
    const result = getInputTextStyles(disabled, emptyValue, theme);
    expect(result).toEqual(expected);
  });

  it('gets correct color of input text for empty dark theme', () => {
    const theme: Theme = 'dark';
    const disabled = false;
    const emptyValue = null;

    const expected = null;
    const result = getInputTextStyles(disabled, emptyValue, theme);
    expect(result).toEqual(expected);
  });
});

describe('Input text placeholder colors for different states', () => {
  // light
  it('gets correct color of input text placeholder for disabled/active=[false] light theme', () => {
    const theme: Theme = 'light';
    const disabled = false;
    const active = false;

    const expected = LIGHT_DEFAULT_TEXT;
    const result = getPlaceholderColor(theme, disabled, active);
    expect(result).toEqual(expected);
  });
  it('gets correct color of input text placeholder for disabled/active=[true] light theme', () => {
    const theme: Theme = 'light';
    const disabled = true;
    const active = true;

    const expected = LIGHT_DISABLED_TEXT;
    const result = getPlaceholderColor(theme, disabled, active);
    expect(result).toEqual(expected);
  });

  // dark
  it('gets correct color of input text placeholder for disabled/active=[false] dark theme', () => {
    const theme: Theme = 'dark';
    const disabled = false;
    const active = false;

    const expected = DARK_DEFAULT_TEXT;
    const result = getPlaceholderColor(theme, disabled, active);
    expect(result).toEqual(expected);
  });
  it('gets correct color of input text placeholder for disabled/active=[true] dark theme', () => {
    const theme: Theme = 'dark';
    const disabled = true;
    const active = true;

    const expected = DARK_DISABLED_TEXT;
    const result = getPlaceholderColor(theme, disabled, active);
    expect(result).toEqual(expected);
  });
});
