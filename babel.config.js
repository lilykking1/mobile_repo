const config = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
    test: {
      plugins: [
        [
          'module:react-native-dotenv',
          {
            moduleName: '@env',
          },
        ],
      ],
    },
  },
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        safe: true,
        allowUndefined: true,
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    '@babel/plugin-proposal-optional-catch-binding',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '^@app/(.+)': './app/\\1',
          '^@story/(.+)': './.storybook/\\1',
        },
        cwd: 'packagejson',
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};

module.exports = (api) => {
  api.cache(true);
  return config;
};
