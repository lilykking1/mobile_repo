import { Asset } from '@app/models';

export const keyExtractor = (item: Asset, index: number): string =>
  `${item?.symbol}-${item?.coinAmount}-${index}`;
