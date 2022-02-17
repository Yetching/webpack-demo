module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    clean: true,
    pathinfo: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          // thread-loader也需要启动时间大概600ms
          // {
          //   loader: 'thread-loader',
          //   options: {
          //     workers: 2,
          //   },
          // },
        ],
      },
    ],
  },
};
