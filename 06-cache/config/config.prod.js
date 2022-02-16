const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  output: {
    filename: "scripts/[name].[contenthash].js",
    publicPath: "http://yetching.cn/",
  },

  mode: "production",

  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },

  performance: {
    hints: false,
  },
};
