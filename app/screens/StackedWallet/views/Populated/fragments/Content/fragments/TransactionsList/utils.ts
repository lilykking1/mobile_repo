import { TransactionsData } from '@app/models/Transactions';

export const keyExtractor = (item: TransactionsData, index: number): string =>
  `${item?.year}-${index}`;
