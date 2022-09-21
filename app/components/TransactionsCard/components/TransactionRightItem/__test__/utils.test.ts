import { TRANSACTIONS_TYPES } from '@app/models/Transactions';
import {
  isNegativeTransactionType,
  getAmountPrefixByTransactionType,
  getAmountVariantByTransactionType,
} from '../utils';

describe('Check if the isNegativeTransactionType method returns the correct value based on the transaction type', () => {
  it('It should return true for purchase and withdrawal transactions types', () => {
    expect(isNegativeTransactionType(TRANSACTIONS_TYPES.purchase)).toBe(true);
    expect(isNegativeTransactionType(TRANSACTIONS_TYPES.withdrawal)).toBe(true);
  });
  it('It should return false for different transactions types from purchase and withdrawal', () => {
    expect(isNegativeTransactionType(TRANSACTIONS_TYPES.deposit)).toBe(false);
    expect(isNegativeTransactionType(TRANSACTIONS_TYPES.swap)).toBe(false);
  });
});

describe('Get amount prefix by transaction type should return the correct prefix based on the transaction type', () => {
  it('It should return -$ for purchase and withdrawal transactions types', () => {
    expect(getAmountPrefixByTransactionType(TRANSACTIONS_TYPES.purchase)).toBe(
      '-$'
    );
    expect(
      getAmountPrefixByTransactionType(TRANSACTIONS_TYPES.withdrawal)
    ).toBe('-$');
  });
  it('It should return $ for the swap transaction type', () => {
    expect(getAmountPrefixByTransactionType(TRANSACTIONS_TYPES.swap)).toBe('$');
  });
  it('It should return +$ for the deposit transaction type', () => {
    expect(getAmountPrefixByTransactionType(TRANSACTIONS_TYPES.deposit)).toBe(
      '+$'
    );
  });
});

describe('get Amount Variant by transaction type should return the correct TypographyVariant based on the transaction type', () => {
  it('It should return grey.600 for purchase and withdrawal transactions types', () => {
    expect(getAmountVariantByTransactionType(TRANSACTIONS_TYPES.purchase)).toBe(
      'grey.600'
    );
    expect(
      getAmountVariantByTransactionType(TRANSACTIONS_TYPES.withdrawal)
    ).toBe('grey.600');
  });
  it('It should return secondary.900 for transactions types other than purchase and withdrawal', () => {
    expect(getAmountVariantByTransactionType(TRANSACTIONS_TYPES.deposit)).toBe(
      'secondary.900'
    );
    expect(getAmountVariantByTransactionType(TRANSACTIONS_TYPES.swap)).toBe(
      'secondary.900'
    );
  });
});
