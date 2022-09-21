jest.mock('@react-native-firebase/crashlytics', () => 
  jest.fn().mockImplementation(() => ({
    crash: jest.fn()
  }))
);