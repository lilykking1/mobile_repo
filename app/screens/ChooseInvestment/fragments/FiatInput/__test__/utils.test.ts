import { Theme } from '@app/state/stores/settings/types';
import { textStyles } from '../styles';
import { checkIsAmountStringValid, getTextInputStyles } from '../utils';

describe('Get correct text input styles', () => {
  it('should return textStyles.light for the light theme', () => {
    const theme: Theme = 'light';
    expect(getTextInputStyles(theme)).toMatchObject(textStyles.light);
  });
  it('should return textStyles.dark for the dark theme', () => {
    const theme: Theme = 'dark';
    expect(getTextInputStyles(theme)).toMatchObject(textStyles.dark);
  });
});

describe('Check if the Amount String is Valid', () => {
  it('should return true for valid amount values.', () => {
    let validAmount = '1,901,321';
    expect(checkIsAmountStringValid(validAmount)).toBe(true);
    validAmount = '1000';
    expect(checkIsAmountStringValid(validAmount)).toBe(true);
    validAmount = '0';
    expect(checkIsAmountStringValid(validAmount)).toBe(true);
    validAmount = '';
    expect(checkIsAmountStringValid(validAmount)).toBe(true);
    validAmount = '$';
    expect(checkIsAmountStringValid(validAmount)).toBe(true);
  });
  it('should return false for invalid amount values.', () => {
    let invalidAmount = '1,901,321a';
    expect(checkIsAmountStringValid(invalidAmount)).toBe(false);
    invalidAmount = '1b';
    expect(checkIsAmountStringValid(invalidAmount)).toBe(false);
    invalidAmount = '0.';
    expect(checkIsAmountStringValid(invalidAmount)).toBe(false);
    invalidAmount = 'c';
    expect(checkIsAmountStringValid(invalidAmount)).toBe(false);
  });
});
