import { palette } from '@app/theme';
import {
  getInputColor,
  getStringWithPercentByValue,
  getValueWithLimitedDecimal,
} from '../utils';

describe('get correct colors, types and booleans', () => {
  it('get input color based on theme', () => {
    let theme = 'light';
    let expected = palette.royalBlue['900'];
    let result = getInputColor(theme);
    expect(result).toEqual(expected);

    theme = 'dark';
    expected = palette.grey['300'];
    result = getInputColor(theme);
    expect(result).toEqual(expected);
  });
});

describe('get correct text formatting', () => {
  it('get text with percentage based on value', () => {
    const value = [0.5];
    const maximumValue = 1;
    const expected = '50%';
    const result = getStringWithPercentByValue(value, maximumValue);
    expect(result).toEqual(expected);
  });

  it('limit text to specific decimal value', () => {
    const value = [5.54321];
    const decimalSize = 3;
    const expected = '5.543';
    const result = getValueWithLimitedDecimal(value, decimalSize);
    expect(result).toEqual(expected);
  });
});
