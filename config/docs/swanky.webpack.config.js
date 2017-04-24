'use strict';

// START_CONFIT_GENERATED_CONTENT
const buildConfig = require('swanky').build({configPath: 'docs/swanky.config.yaml'});
// END_CONFIT_GENERATED_CONTENT


// Copy dist folder for use by docs
const CopyWebpackPlugin = require('copy-webpack-plugin');

buildConfig.plugins = buildConfig.plugins.concat(
  new CopyWebpackPlugin(
    [
      {
        context: 'dist/',
        from: '**/*',
        to: 'dist',
        ignore: 'index.html'
      }
    ],
    {
      copyUnmodified: true
    }
  )
);

module.exports = buildConfig;
