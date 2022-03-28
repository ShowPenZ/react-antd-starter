const path = require('path');
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@': path.resolve('src'),
    },
  },
  babel: {
    presets: ['@babel/preset-react'],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
    ],
  },
  eslint: {
    parser: '@babel/eslint-parser',
    extends: ['prettier'],
    plugins: ['react-hooks', 'prettier'],
    rules: {
      'prettier/prettier': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
};
