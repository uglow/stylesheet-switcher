'use strict';

const devServer = require('swanky').devServer;
// This doesn't work: (the webpack merge inside Swanky is replacing the plugins[] array with the provided one.
// const CopyWebpackPlugin = require('copy-webpack-plugin');

let devServerInstance = devServer({configPath: 'docs/swanky.config.yaml', webpackConfig: {
  // plugins: [
  //   // Copy dist folder for use by docs
  //   new CopyWebpackPlugin(
  //     [
  //       {
  //         context: 'dist/',
  //         from: '**/*',
  //         ignore: 'index.html'
  //       }
  //     ],
  //     {
  //       copyUnmodified: true
  //     }
  //   )
  // ]
}});

// Start swanky dev server
module.exports = devServerInstance;
