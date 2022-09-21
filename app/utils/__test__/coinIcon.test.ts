import { coinSymbolFormatCheck } from '../coinIcons';

describe('Format coin symbols for Coin Icons and properties from cryptocurrency-icons lib', () => {
  it('returns undefined if symbol is not a string', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = coinSymbolFormatCheck(123);
    expect(result).toBeUndefined();
  });

  it('does not start with letter so adds leading underscore', () => {
    const result = coinSymbolFormatCheck('$vn9vmn');
    const expected = '_$VN9VMN';

    expect(result).toEqual(expected);
  });

  it('starts with letter but lower case', () => {
    const result = coinSymbolFormatCheck('btc');
    const expected = 'BTC';

    expect(result).toEqual(expected);
  });

  it('letter and uppercase should be the same', () => {
    const result = coinSymbolFormatCheck('BTC');
    const expected = 'BTC';

    expect(result).toEqual(expected);
  });
});
