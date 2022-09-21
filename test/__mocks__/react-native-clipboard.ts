jest.mock('@react-native-clipboard/clipboard', () => {
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  const RNCClipboardMock = require('@react-native-clipboard/clipboard/jest/clipboard-mock');

  return RNCClipboardMock;
});
