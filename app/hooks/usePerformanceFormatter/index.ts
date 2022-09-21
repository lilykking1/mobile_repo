import { SECRET_PLACEHOLDER } from '@app/utils/constants';
import { formatSign, getSign, parseSign, parseValue } from '@app/utils/numbers';

interface PerformanceFormatterProps {
  value: number | string;
  isSecret?: boolean;
  accrual?: boolean;
  profit?: boolean;
  loss?: boolean;
  caret?: boolean;
  precision?: number;
  prefix?: string;
  suffix?: string;
}
/**
 * Style value/quantity including profit(green) and loss(red)
 * @param {number | string} value value to format
 * @param {string} prefix char to add before value
 * @param {string} suffix char to add after value
 * @param {boolean} accrual add +/- sign & (profit/loss) formatting to final string based on value
 * @param {boolean} profit manually add profit formatting
 * @param {boolean} loss manually add loss formatting
 * @param {boolean} caret add caret icon instead of +/- for value
 * @param {number} precision default 2 decimals
 * @returns string of formated value
 */
export const usePerformanceFormatter = ({
  value,
  isSecret,
  prefix,
  suffix,
  accrual,
  profit,
  loss,
  caret,
  precision = 2,
}: PerformanceFormatterProps): string => {
  const sign = accrual ? parseSign(value) : getSign(profit, loss);
  const formatted = formatSign(sign, accrual);

  // Automatically add space between prefix and sign
  const head = [prefix, formatted].filter(Boolean).join(' ');

  const parsed = isSecret ? SECRET_PLACEHOLDER : parseValue(value, precision);

  // combine elements and format the properties with caret,
  // remove +/- with character class in replace,
  // this replace must be done because the (-) for negative values
  const combined = [head, parsed, suffix].filter(Boolean).join('');
  const formatWithCaret = caret ? combined.replace(/[-+]/g, '') : combined;
  // final
  return formatWithCaret;
};
