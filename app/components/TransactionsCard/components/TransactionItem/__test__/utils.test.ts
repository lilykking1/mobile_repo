import { TRANSACTIONS_TYPES } from '@app/models/Transactions';
import { isFiatDeposit } from '../utils';

describe('Get if the its a fiat deposit transaction based on the transaction type and if it has address', () => {
  it('has to return true for deposit transaction type and no address', () => {
    const mockedTransaction = {
      type: TRANSACTIONS_TYPES.deposit,
    };
    expect(isFiatDeposit(mockedTransaction.type, null)).toBe(true);
  });
  it('has to return false for deposit transaction type and but with address', () => {
    const mockedTransaction = {
      address: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      type: TRANSACTIONS_TYPES.deposit,
    };
    expect(
      isFiatDeposit(mockedTransaction.type, mockedTransaction.address)
    ).toBe(false);
  });
  it('has to return false for others transactions types', () => {
    const mockedSwapTransaction = {
      address: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      type: TRANSACTIONS_TYPES.swap,
    };
    expect(
      isFiatDeposit(mockedSwapTransaction.type, mockedSwapTransaction.address)
    ).toBe(false);
    const mockedPurchaseTransaction = {
      address: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      type: TRANSACTIONS_TYPES.purchase,
    };
    expect(
      isFiatDeposit(
        mockedPurchaseTransaction.type,
        mockedPurchaseTransaction.address
      )
    ).toBe(false);
    const mockedWithdrawalTransaction = {
      address: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      type: TRANSACTIONS_TYPES.withdrawal,
    };
    expect(
      isFiatDeposit(
        mockedWithdrawalTransaction.type,
        mockedWithdrawalTransaction.address
      )
    ).toBe(false);
  });
});
