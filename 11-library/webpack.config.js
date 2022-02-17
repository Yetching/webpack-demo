const path = require('path');

module.exports = {
  mode: 'production',
  // entry: './src/index.js',
  entry: './src/numToText.js',

  // 实验性功能，打包为esmodule规范
  // 使用其他规范时需要去掉
  // experiments: {
  //   outputModule: true,
  // },
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'lib.js',

  //   // 设置这个可以防止tree-shaking
  //   // 同时配置打包输出的规范
  //   library: {
  //     // esmodule时不能设置名字
  //     // name: 'mylib',
  //     type: 'module',
  //   },
  // },

  // 模拟构建小轮子并发布npm
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    library: {
      name: 'webpackNumbers',
      type: 'umd',
    },
    clean: true,
    globalObject: 'globalThis',
  },

  // 防止lodash打包进入lib
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
};
