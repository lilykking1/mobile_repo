import {
  formatDailyChangePercent,
  calculatePercentage,
  formatCoinCurrency,
  getDecimalPlacesFromNumber,
} from '../numbers';

describe('Format percent change string', () => {
  it('adds % on negative numbers', () =>
    expect(formatDailyChangePercent(-1.2, 2)).toEqual('-1.20%'));
  it('adds % on 0', () =>
    expect(formatDailyChangePercent(0, 2)).toEqual('0.00%'));
  it('adds a leading + and % on positive numbers', () =>
    expect(formatDailyChangePercent(1.214, 2)).toEqual('+1.21%'));
});

describe('Calculate percentage', () => {
  it('calculates percentage using string params and default precision', () =>
    expect(calculatePercentage('200', '20')).toEqual('10'));
  it('calculates percentage using string params and custom precision', () =>
    expect(calculatePercentage('200', '20', 2)).toEqual('10.00'));
  it('calculates percentage using formatted string params and default precision', () =>
    expect(calculatePercentage('20000.00', '1,000.00')).toEqual('5'));
  it('calculates percentage using formatted string params and custom precision', () =>
    expect(calculatePercentage('20,000.00', '2000.00', 2)).toEqual('10.00'));
  it('calculates percentage using number params and default precision', () =>
    expect(calculatePercentage(40, 10)).toEqual('25'));
  it('calculates percentage using string params and custom precision', () =>
    expect(calculatePercentage(50, 10, 1)).toEqual('20.0'));
  it('calculates percentage when total amount is 0 and default precision', () =>
    expect(calculatePercentage(0, 10)).toEqual('0'));
  it('calculates percentage when total amount is 0 and custom precision', () =>
    expect(calculatePercentage(0, 10, 2)).toEqual('0.00'));
});

describe('Format coin currency', () => {
  it('should format coin currency adding suffix M since the value is greater than a million and smaller than a billion', () =>
    expect(formatCoinCurrency(1234567.123456)).toEqual('1.23M'));
  it('should format coin currency adding suffix B since the value is greater than a billion', () =>
    expect(formatCoinCurrency(1234567891.23456)).toEqual('1.23B'));
  it('should format coin currency and not adding suffix since the value is smaller than a million and greater than 0', () =>
    expect(formatCoinCurrency(123.456789)).toEqual('123.46'));

  it('should format coin currency adding suffix M since the value is smaller than a "negative" million and smaller than a "negative" billion', () =>
    expect(formatCoinCurrency(-1234567.123456)).toEqual('-1.23M'));
  it('should format coin currency adding suffix B since the value is smaller than a "negative" billion', () =>
    expect(formatCoinCurrency(-1234567891.23456)).toEqual('-1.23B'));
  it('should format coin currency and not adding suffix since the value is greater than a "negative" million and smaller than 0', () =>
    expect(formatCoinCurrency(-123.456789)).toEqual('-123.46'));

  it('should format coin currency the way it is since the value is equal to 0', () =>
    expect(formatCoinCurrency(0)).toEqual('0'));
});

describe('Get decimal places from number', () => {
  it('should return 5 since the param has 5 decimal places', () =>
    expect(getDecimalPlacesFromNumber(123.12345)).toEqual(5));

  it('should return 0 since the param has no decimal places', () =>
    expect(getDecimalPlacesFromNumber(123)).toEqual(0));
});
