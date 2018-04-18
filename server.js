const path = require('path');
const express = require('express');
const webpack = require('webpack');

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, './src/index.html');
    const statsPath = path.join(__dirname, './build/stats.html');
    const publicPath = express.static(path.join(__dirname, '/build'));

    app.use('/build', publicPath);
    app.use('/node_components',  express.static(__dirname + '/node_modules'));

    if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging') {
      const webpackDevMiddleware = require('webpack-dev-middleware');
      const webpackHotMiddleware = require('webpack-hot-middleware');
      const config = require('./webpack.dev.js');
      const compiler = webpack(config);

      app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        stats: {
          colors: true,
        },
        publicPath: config.output.publicPath
      }));

      app.use(webpackHotMiddleware(compiler, {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000
      }));
    }

    app.get('*', function (_, res) { res.sendFile(indexPath); });
    // app.get('*', function (_, res) { res.sendFile(indexPath); });
    return app;
  }
};
