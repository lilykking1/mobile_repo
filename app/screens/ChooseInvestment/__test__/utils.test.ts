import { removeStringCommas } from '../utils';

describe('Remove commas from the string', () => {
  it('should return a string without commas', () => {
    const value = '1,901,321';
    expect(removeStringCommas(value)).toBe('1901321');
  });
  it('should return the same string when it doesnt have any commas', () => {
    const value = '1901321';
    expect(removeStringCommas(value)).toBe('1901321');
  });
});
