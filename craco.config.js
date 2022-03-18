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
    // 别名
    alias: {
      '@': path.resolve('src'),
    },
  },
  babel: {
    presets: ['@babel/preset-react'],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }], //装饰器
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
    ],
  },
};
