const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
    assetModuleFilename: "images/[contenthash][ext]",
  },

  mode: "production",

  devtool: "inline-source-map",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "app.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[contenthash].css",
    }),
  ],

  devServer: {
    static: "./dist",
  },

  //内置资源模块
  module: {
    rules: [
      {
        test: /\.png$/,
        type: "asset/resource",
        generator: {
          //优先级比上面高
          filename: "images/[contenthash][ext]",
        },
      },
      {
        test: /\.svg$/,
        type: "asset/inline",
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        test: /\.jpg$/,
        type: "asset",
        //设置条件
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 * 1024, //默认是8k
          },
        },
      },
      {
        test: /\.css$/,
        //style-loader会将所有样式注入到一个style标签里
        //MiniCssExtractPlugin会将所有样式文件形成一个个link标签引入
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
    ],
  },

  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
