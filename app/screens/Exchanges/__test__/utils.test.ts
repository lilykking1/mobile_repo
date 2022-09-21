import { getExchangesList } from '../utils';

describe('Get correct order of exchanges', () => {
  const list = getExchangesList({});

  it('has a non empty list', () => {
    expect(list.length).not.toEqual(0);
  });

  it('has Stacked Wallet as the first item', () => {
    expect(list[0]).toEqual('StackedWallet');
  });

  it('has Coinbase as the second item', () => {
    expect(list[1]).toEqual('Coinbase');
  });
});
