import { getCoinProperties } from '../Coin';
import { DEFAULT_COIN_PROPERTIES } from '../constants';

describe('Get the properties of coins from cryptocurrency-icons lib in our app/assets/crypto-icon', () => {
  it('is not string for the coin symbol, so returns default properties of the coin', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = getCoinProperties(123);
    const expected = DEFAULT_COIN_PROPERTIES;

    expect(result).toEqual(expected);
  });

  it('does not exist, so returns default properties of the coin', () => {
    const result = getCoinProperties('l34kj53l');
    const expected = DEFAULT_COIN_PROPERTIES;

    expect(result).toEqual(expected);
  });

  it('does exist, so return properties', () => {
    const result = getCoinProperties('btc');
    const expected = {
      name: 'Bitcoin',
      color: '#f7931a',
    };

    expect(result).toEqual(expected);
  });
});
