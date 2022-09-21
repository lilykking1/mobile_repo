// we always make sure 'react-native' gets included first
import 'react-native';

// libraries to mock
import './__mocks__/amplitude';
import './__mocks__/appsFlyer';
import './__mocks__/react-native-mmkv';
import './__mocks__/react-native-reanimated';
import './__mocks__/react-native-clipboard';
import './__mocks__/react-native-permissions';
import './__mocks__/react-native-image';
import './__mocks__/async-storage';
import './__mocks__/fetch';
import './__mocks__/i18n';
import './__mocks__/firebase';

jest.useFakeTimers();
declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
  let __TEST__;
}

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
