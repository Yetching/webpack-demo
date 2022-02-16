const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

//改造成函数可以接收用户在终端输入的相关参数
module.exports = (env) => {
  console.log(env);
  return {
    entry: {
      index: './src/index.js',
    },

    output: {
      //修改文件时名字不会变的话，浏览器会缓存
      //所以我们使用hash
      filename: 'scripts/[name].js',
      path: path.resolve(__dirname, './dist'),
      clean: true,
      assetModuleFilename: 'images/[contenthash][ext]',
      //资源的根路径
      //可以将相对路径改成绝对路径
      publicPath: '/',
    },

    mode: env.production ? 'production' : 'development',
    // mode: "production",

    devtool: 'inline-source-map',

    //开发服务器
    devServer: {
      static: path.resolve(__dirname, './dist'),
      //压缩代码
      //Todo 未生效
      compress: true,
      port: 8080,

      headers: {
        'X-Access-Token': 'fake-token',
      },

      proxy: {
        '/api': 'localhost:9000',
      },

      // https: true,
      http2: true,

      historyApiFallback789654: true,

      //主机
      host: '0.0.0.0',
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body',
        filename: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'styles/[contenthash].css',
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
        },
      ],
    },

    optimization: {
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
      splitChunks: {
        // chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },

    performance: {
      //打包大小过大提示
      hints: false,
    },
  };
};
