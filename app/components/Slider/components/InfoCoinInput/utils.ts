import { THEME_VARIANT } from '@app/components/Slider/constants';
import { GET_ONLY_NUMBERS_AND_DOT_REGEX } from './constants';

export const getInputColor = (theme: string): string =>
  THEME_VARIANT[theme].inputLabel;

const getDotIndex = (value: string): number =>
  value.indexOf('.') === -1 ? 0 : value.indexOf('.');

const getMaxSizeInput = (value: string, decimalSize: number): number =>
  getDotIndex(value) + decimalSize + 1;

export const getValueWithLimitedDecimal = (
  value: Array<number> | Array<string> | string,
  decimalSize: number
): string => {
  const valueString = value.toString();
  return valueString.substr(0, getMaxSizeInput(valueString, decimalSize));
};

export const getValueWithMaxRule = (
  value: string,
  maxValue: number
): string => {
  let inputValueWithRules = value.replace(GET_ONLY_NUMBERS_AND_DOT_REGEX, '');
  if (parseFloat(inputValueWithRules) > maxValue) {
    inputValueWithRules = maxValue.toString();
  }
  return inputValueWithRules;
};
