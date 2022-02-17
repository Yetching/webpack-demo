module.exports = {
  entry: './src/app.js',
  mode: 'production',
  // devtool: 'inline-source-map',
  output: {
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  optimization: {
    // tree-shaking
    usedExports: true,
  },
};
