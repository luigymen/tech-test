'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'development',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    './src/index'
  ],

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
    new webpack.HotModuleReplacementPlugin()
  ],
});
