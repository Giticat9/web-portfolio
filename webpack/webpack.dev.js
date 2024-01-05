const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');

const devConfig = merge(baseConfig, {
  mode: 'development'
});

module.exports = devConfig;
