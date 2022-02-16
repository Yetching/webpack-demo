const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './app.js',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new ESLintWebpackPlugin(),
  ],

  devServer: {
    // 默认就是true，开启热模块重载
    hot: true,
    // 默认true，自动刷新页面
    liveReload: true,
    // 错误遮罩层
    client: {
      overlay: false,
      progress: true,
    },
  },
};
