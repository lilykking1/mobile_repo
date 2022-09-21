import 'react-native-gesture-handler/jestSetup';

// eslint-disable-next-line no-underscore-dangle
global.__reanimatedWorkletInit = jest.fn();

jest.mock('react-native-reanimated', () => {
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};
  Reanimated.interpolateColor = jest.fn(() => 'mock_color');

  return Reanimated;
});
