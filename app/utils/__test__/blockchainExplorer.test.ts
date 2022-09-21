import { getExplorerURI } from '@app/utils/blockchainExplorer';

describe('Validate blockchain explorer functions', () => {
  it('returns undefined when coin explorer not registered', () => {
    const coin = '000';
    const transactionID = '0';

    const result = getExplorerURI(coin, transactionID);
    expect(result).toBeUndefined();
  });

  it('returns URI when coin explorer it is registered', () => {
    const coin = 'ETH';
    const transactionID =
      '0xd7e52a2aed213e4218af708b52a21528ab9a9d64aa88415de91d7c4d620ee060';
    const expected =
      'https://etherscan.io/tx/0xd7e52a2aed213e4218af708b52a21528ab9a9d64aa88415de91d7c4d620ee060';

    const result = getExplorerURI(coin, transactionID);
    expect(result).toEqual(expected);
  });
});
