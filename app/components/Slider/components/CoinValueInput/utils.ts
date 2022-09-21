import { THEME_VARIANT } from '@app/components/Slider/constants';
import { getPercentByValue } from '../../utils';

export const getInputColor = (theme: string): string =>
  THEME_VARIANT[theme].inputLabel;

const getDotIndex = (value: string): number =>
  value.indexOf('.') === -1 ? 0 : value.indexOf('.');

const getMaxSizeInput = (value: string, decimalSize: number): number =>
  getDotIndex(value) + decimalSize + 1;

const convertValueToFloat = (value: Array<number> | Array<string>): number => {
  let valueOutsideArray:
    | number
    | string
    | Array<number>
    | Array<string> = value;

  if (typeof value === 'object') {
    valueOutsideArray = value['0'];
  }

  if (typeof valueOutsideArray === 'number') {
    return valueOutsideArray;
  }
  if (typeof valueOutsideArray === 'string') {
    return parseFloat(valueOutsideArray);
  }
  return 0;
};

export const getStringWithPercentByValue = (
  value: Array<number> | Array<string>,
  maximumValue: number
): string => `${getPercentByValue(convertValueToFloat(value), maximumValue)}%`;

export const getValueWithLimitedDecimal = (
  value: Array<number> | Array<string>,
  decimalSize: number
): string => {
  const valueString = value.toString();
  return valueString.substr(0, getMaxSizeInput(valueString, decimalSize));
};
