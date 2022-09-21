import { getTransactions } from '@app/mocks/Transactions';
import { TransactionsData } from '@app/models/Transactions';
import { keyExtractor } from '../utils';

let transactionsItems: TransactionsData[];

describe('The keyExtractor method should return the correct key based on the TransactionsData object', () => {
  beforeAll(() => {
    transactionsItems = getTransactions(1);
  });
  it('has to return the transactionYear-passedIndex from the keyExtractor method', () => {
    const firstTransaction = transactionsItems[0];
    const transactionIndex = 0;
    const key = keyExtractor(firstTransaction, transactionIndex);
    const expectedResult = `${firstTransaction.year}-${transactionIndex}`;
    expect(key).toBe(expectedResult);
  });
});
