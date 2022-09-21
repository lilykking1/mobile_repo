import { RiskCardSize } from '@app/components/RiskCard/types';
import { TypographySize } from '@app/components/Typography/types';
import {
  getLabelLetterSpacing,
  getLabelPaddingLeft,
  getLabelSize,
  getPaddingBase,
  getPaddingContent,
  getValueHeight,
  getValueLineHeight,
  getValueSize,
} from '../utils';

describe('Get correct dimensions and sizes', () => {
  it('Line Height of value', () => {
    let size: RiskCardSize = 'normal';
    let expected = 52.5;
    let result = parseFloat(getValueLineHeight(size).toFixed(2));
    expect(result).toEqual(expected);

    size = 'small';
    expected = 41.25;
    result = parseFloat(getValueLineHeight(size).toFixed(2));
    expect(result).toEqual(expected);
  });

  it('Size of value', () => {
    let size: RiskCardSize = 'normal';
    let expected: TypographySize = 'h3';
    let result = getValueSize(size);
    expect(result).toEqual(expected);

    size = 'small';
    expected = 'h5';
    result = getValueSize(size);
    expect(result).toEqual(expected);
  });

  it('Height of value', () => {
    let size: RiskCardSize = 'normal';
    let expected = 41.25;
    let result = parseFloat(getValueHeight(size).toFixed(2));
    expect(result).toEqual(expected);

    size = 'small';
    expected = 32.25;
    result = parseFloat(getValueHeight(size).toFixed(2));
    expect(result).toEqual(expected);
  });

  it('Size of label', () => {
    let size: RiskCardSize = 'normal';
    let expected: TypographySize = 'body2';
    let result = getLabelSize(size);
    expect(result).toEqual(expected);

    size = 'small';
    expected = 'small';
    result = getLabelSize(size);
    expect(result).toEqual(expected);
  });

  it('Letter Spacing of label', () => {
    let size: RiskCardSize = 'normal';
    let expected = 1;
    let result = parseFloat(getLabelLetterSpacing(size).toFixed(2));
    expect(result).toEqual(expected);

    size = 'small';
    expected = 0.5;
    result = parseFloat(getLabelLetterSpacing(size).toFixed(2));
    expect(result).toEqual(expected);
  });

  it('Padding Left of label', () => {
    let size: RiskCardSize = 'normal';
    let expected = 1;
    let result = parseFloat(getLabelPaddingLeft(size).toFixed(2));
    expect(result).toEqual(expected);

    size = 'small';
    expected = 0.5;
    result = parseFloat(getLabelPaddingLeft(size).toFixed(2));
    expect(result).toEqual(expected);
  });

  it('Padding of base view', () => {
    let size: RiskCardSize = 'normal';
    let expected = 10;
    let result = getPaddingBase(size);
    expect(result).toEqual(expected);

    size = 'small';
    expected = 15;
    result = getPaddingBase(size);
    expect(result).toEqual(expected);
  });

  it('Padding of content view', () => {
    let size: RiskCardSize = 'normal';
    let expected = 2;
    let result = getPaddingContent(size);
    expect(result).toEqual(expected);

    size = 'small';
    expected = 1;
    result = getPaddingContent(size);
    expect(result).toEqual(expected);
  });
});
