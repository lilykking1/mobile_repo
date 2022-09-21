import * as ReactNative from 'react-native';
import mockFile from '../__stubs__/file';

jest.doMock('react-native', () =>
  // Extend ReactNative
  Object.setPrototypeOf(
    {
      Image: {
        ...ReactNative.Image,
        resolveAssetSource: jest.fn((_source) => mockFile),
        getSize: jest.fn(
          (
            _uri: string,
            success: (width: number, height: number) => void,
            _failure?: (_error) => void
          ) => success(100, 100)
        ),
      },
    },
    ReactNative
  )
);
