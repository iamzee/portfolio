const path = require ('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve (__dirname, 'public'),
    filename: 'client.bundle.js',
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
