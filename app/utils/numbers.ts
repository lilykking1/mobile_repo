import { isFinite, isNaN } from 'lodash';
import I18n from 'i18n-js';
import { translate } from '@app/i18n';
import {
  A_BILLION,
  A_MILLION,
  BILLION_SUFFIX,
  GET_DECIMAL_SEPARATORS,
  MILLION_SUFFIX,
} from '@app/utils/constants';

export enum SIGN {
  PROFIT = 1,
  LOSS = -1,
  NEUTRAL = 0,
}

export const truncateDecimals = (
  val: number,
  decimals: number
): string | number => {
  if (!isFinite(val)) {
    return 0;
  }
  return val.toFixed(decimals);
};

// DEPRECATED: Replaced by Quantity component
export const formatDailyChangePercent = (
  dailChange: number,
  decimals: number
): string => {
  const value = truncateDecimals(dailChange, decimals);
  return dailChange <= 0 ? `${value}%` : `+${value}%`;
};

export const parseValue = (
  value: number | string,
  precision: number
): string => {
  const parsed = Number(value);

  if (isNaN(parsed)) {
    return value as string;
  }

  return I18n.toNumber(parsed, { precision });
};

export const parseSign = (value: number | string): SIGN => {
  const parsed = Number(value);

  if (isNaN(parsed)) {
    return undefined;
  }

  return Math.sign(parsed);
};

export const getSign = (profit?: boolean, loss?: boolean): SIGN => {
  switch (true) {
    case profit:
      return SIGN.PROFIT;
    case loss:
      return SIGN.LOSS;
    default:
      return SIGN.NEUTRAL;
  }
};

export const formatSign = (sign: SIGN, accrual?: boolean): string => {
  switch (sign) {
    case SIGN.PROFIT:
      return '+';
    case SIGN.LOSS:
      return !accrual ? '-' : undefined;
    case SIGN.NEUTRAL:
    default:
      return undefined;
  }
};

/**
 * Add comma after each 3 digits
 * Ex: 1111111111.3333333333 => 1,111,111,111.3333333333
 * @param value
 */
export const formatNumberToLocale = (value: number | string): string => {
  const valueSeparatedByDot = value.toString().split('.');
  const leftPart = valueSeparatedByDot[0].replace(GET_DECIMAL_SEPARATORS, ',');
  const rightPart = valueSeparatedByDot[1] ? `.${valueSeparatedByDot[1]}` : '';

  return `${leftPart}${rightPart}`;
};

/**
 * Exclude decimal numbers if it's equal zero
 * Ex: 1140.00 => 1140 | 2135.81 => 2135.81
 * @param value
 * @returns {Number} the number value with or without decimal digits
 */
export const excludeDecimalsIfIsZero = (value: number | string): number => {
  const valueWithDecimalsFixed = Number(value).toFixed(2);
  return Number.parseFloat(valueWithDecimalsFixed);
};

export const calculatePercentage = (
  totalAmount: number | string,
  amount: number | string,
  precision = 0
): string => {
  if (Number(totalAmount) === 0) {
    const defaultResult = 0;
    return defaultResult.toFixed(precision);
  }

  const isAmountFormatted = typeof amount === 'string' && amount.includes(',');

  const convertedAmount = isAmountFormatted
    ? Number(amount.replace(',', ''))
    : Number(amount);

  const isTotalAmountFormatted =
    typeof totalAmount === 'string' && totalAmount.includes(',');

  const convertedTotalAmount = isTotalAmountFormatted
    ? Number(totalAmount.replace(',', ''))
    : Number(totalAmount);

  const percentage = (100 * convertedAmount) / convertedTotalAmount;
  return percentage.toFixed(precision);
};

/**
 * Add fiat sign from i18n currency in the prefix of an amount
 * Ex: 1,140 => $1,140
 * @param amount
 * @returns {String} the amount with the fiat prefix added
 */
export const addFiatSignToAmount = (amount: number | string): string => {
  const stringfiedAmout = amount.toString();

  if (stringfiedAmout.includes(translate('common.fiatSign'))) {
    return stringfiedAmout;
  }

  return `${translate('common.fiatSign')}${amount}`;
};

export const formatCoinCurrency = (value: number, addSuffix = true): string => {
  const isValueOverOneBillion = value > A_BILLION;
  const isValueLessThanOneBillionNegative = value < A_BILLION * -1;

  const isValueOverOneMillion = value > A_MILLION;
  const isValueLessThanOneMillionNegative = value < A_MILLION * -1;

  if (
    (isValueOverOneBillion && addSuffix) ||
    (isValueLessThanOneBillionNegative && addSuffix)
  ) {
    return `${(value / A_BILLION).toFixed(2)}${BILLION_SUFFIX}`;
  }
  if (
    (isValueOverOneMillion && addSuffix) ||
    (isValueLessThanOneMillionNegative && addSuffix)
  ) {
    return `${(value / A_MILLION).toFixed(2)}${MILLION_SUFFIX}`;
  }

  if (value !== 0) {
    return value.toFixed(2);
  }

  return value.toString();
};

export const getDecimalPlacesFromNumber = (price: number): number => {
  const priceToString = price.toString();
  const priceParts = priceToString.split('.');
  const onlyDecimals = priceParts[1];

  if (onlyDecimals) {
    return onlyDecimals.length;
  }
  return 0;
};
