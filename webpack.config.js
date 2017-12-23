const path = require('path');

module.exports = {
  entry: {
    App: './app/src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'app/temp/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'es2015',
              'react',
            ],
          },
        },
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
};
