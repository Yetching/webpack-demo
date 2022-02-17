const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    index: {
      import: './src/index.js',
      filename: 'app/[name].js',
    },
    app: {
      import: './src/app.js',
      filename: 'app/[name].js',
    },
    map: {
      import: './src/map.ts',
      filename: 'index/[name].js',
    },
  },

  devtool: 'inline-source-map',

  output: {
    clean: true,
  },

  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      // 使用ejs模板语法配置title
      title: '多页面应用index',
      template: './index.html',
      filename: 'index/index.html',
      inject: 'body',
      chunks: ['map'],
      publicPath: 'http://yetching.cn',
    }),
    new HtmlWebpackPlugin({
      title: '多页面应用app',
      template: './app.html',
      filename: 'app/app.html',
      inject: 'body',
      chunks: ['app', 'index'],
    }),
    // new BundleAnalyzerPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // css模块化
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    //路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },

    //扩展名优先级
    //省略模块的后缀时，默认是js优先
    extensions: ['.ts', '.js', 'vue'],
  },

  //外部扩展
  //有的扩展包使用CDN
  externals: {
    //自己需要在index.html里面引入cdn资源
    // jquery: 'jQuery',

    //webpack自动帮你插入script标签并引入
    jquery: [
      'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js',
      'jQuery',
    ],
  },

  // TODO 规定cdn引入的方式是script还是link？
  externalsType: 'script',
};
