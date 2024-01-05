const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

const config = {
  target: 'web',
  entry: path.resolve(__dirname, '..', 'src', 'scripts', 'index.js'),
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@scripts': path.resolve(__dirname, '..', 'src', 'scripts'),
      '@styles': path.resolve(__dirname, '..', 'src', 'styles')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '..', 'src', 'template', 'default.html'),
      inject: 'body',
      scriptLoading: 'defer'
    }),
    new CleanWebpackPlugin({
      verbose: true
    })
  ]
};

module.exports = config;
