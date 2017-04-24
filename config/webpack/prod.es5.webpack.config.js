'use strict';

// START_CONFIT_GENERATED_CONTENT
let configOptions = {
  metaData: {
    title: 'Confit Sample Project',
    baseUrl: '/',
    ENV: process.env.ENV = process.env.NODE_ENV = 'production',
    jsSourceMap: 'source-map',
    cssSourceMap: false,
    performanceHints: false
  },
  loaderOptions: {
    debug: false,
    minimize: true
  }
};
// END_CONFIT_GENERATED_CONTENT


// START_CONFIT_GENERATED_CONTENT
let config = require('./webpack.config.js').mergeConfig(configOptions);
// END_CONFIT_GENERATED_CONTENT

// Remove the CommonsChunk plugin, as it interferes with the module that we are trying to build
config.plugins = config.plugins.filter(function (plugin) {
  return !(plugin.ident && plugin.ident.indexOf('CommonsChunkPlugin'));
});

// Only have a single entry-point when building for production/distribution
config.entry = {
  component: ['./modules/stylesheetSwitcher/stylesheetSwitcher.html']
};
config.output.library = 'StylesheetSwitcher';
config.output.filename = 'js/component.es5.js';
config.output.libraryTarget = 'umd';

module.exports = config;
