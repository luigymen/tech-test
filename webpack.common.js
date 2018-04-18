'use strict';

const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  devServer: {
    path: path.join(__dirname, 'build'),
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'ify-loader',
        enforce: 'post'
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'babel-loader',
        query: {
          "presets": [
            "es2015",
            "react"
          ],
          "plugins": ["transform-async-to-generator"]
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'resolve-url-loader' }
        ]
      }, {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' }, { loader: 'css-loader?sourceMap' }, { loader: 'resolve-url-loader' }, { loader: 'sass-loader?sourceMap' }
        ]
      }, {
        test: /\.json$/,
        use: 'json-loader'
      }, {
        test: /\.(eot|svg|ttf|woff|woff2|otf|png|gif|ico|jpg)$/,
        use: 'file-loader?name=assets/[name].[ext]'
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};
