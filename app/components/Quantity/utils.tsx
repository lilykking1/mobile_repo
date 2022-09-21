import { parseSign, SIGN } from '@app/utils/numbers';
import { TypographyVariant } from '../Typography/types';

// Return the variant based on the value
const getAccrualVariant = (value?: number | string): TypographyVariant => {
  const sign = parseSign(value);

  switch (sign) {
    case SIGN.PROFIT:
      return 'green.500';
    case SIGN.LOSS:
      return 'red';
    case SIGN.NEUTRAL:
    default:
      return undefined;
  }
};

// Return the variant based on the profit/loss
const getNonAccrualVariant = (
  profit?: boolean,
  loss?: boolean
): TypographyVariant => {
  switch (true) {
    case profit:
      return 'green.500';
    case loss:
      return 'red';
    default:
      return undefined;
  }
};

// Return the variant on the value in case it's accrual or profit/loss
export const getVariant = (
  value?: number | string,
  accrual?: boolean,
  profit?: boolean,
  loss?: boolean
): TypographyVariant => {
  if (accrual) {
    return getAccrualVariant(value);
  }

  return getNonAccrualVariant(profit, loss);
};
