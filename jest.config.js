module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: ['<rootDir>/test/setup.ts'],
  moduleNameMapper: {
    '\\.png$': '<rootDir>/test/__mocks__/file.ts',
  },
  testPathIgnorePatterns: ['/node_modules/', '/e2e'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|@react-navigation|@storybook|@unimodules|expo-|react-native|d3-|internmap|@miblanchard|@gorhom)',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/.storybook/**',
    '!**/test/**',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
  ],
};
