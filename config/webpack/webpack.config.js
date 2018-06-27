'use strict';

// START_CONFIT_GENERATED_CONTENT
function mergeConfig(mergeOptions) {
  /** Build START */
  // For Upgrading from Webpack 1.x, see https://webpack.js.org/how-to/upgrade-from-webpack-1/
  const webpack = require('webpack');
  const path = require('path');
  const helpers = require('./webpackHelpers')(path.resolve(__dirname, '../../'));


  /*
   * Webpack Constants
   */
  const HMR = helpers.hasProcessFlag('hot');
  const METADATA = Object.assign(
    {
      title: 'Confit Sample Project',
      baseUrl: '/',
      isDevServer: helpers.isWebpackDevServer(),
      HMR: HMR,
      jsSourceMap: 'cheap-source-map',    // See https://webpack.js.org/configuration/devtool/#devtool
      cssSourceMap: false,                 // There are issues with this option for the css-loader: https://github.com/webpack/css-loader#sourcemaps
      performanceHints: 'warning'
    },
    mergeOptions.metaData
  );


  // https://gist.github.com/sokra/27b24881210b56bbaff7#resolving-options
  let jsExtensions = [
    '.json',
    '.js',
    '.js',
    '.jsx'
  ];
  let moduleDirectories = ['node_modules', 'bower_components']; // Only needed to exclude directories for certain loaders, not for resolving modules.


  let config = {
    context: helpers.root('src'),  // The baseDir for resolving the entry option and the HTML-Webpack-Plugin

    /**
     * Performance settings - https://webpack.js.org/configuration/performance/#performance
     */
    performance: {
      hints: METADATA.performanceHints
    },

    /**
     * Devtool
     * Reference: https://webpack.js.org/configuration/devtool/
     * Type of sourcemap to use per build type
     */
    devtool: METADATA.jsSourceMap,

    /**
     * Options affecting the output of the compilation.
     *
     * See: https://webpack.js.org/configuration/output/
     */
    output: {
      filename: 'js/[name].js',
      chunkFilename: 'js/[id].js',  // The name for non-entry chunks
      path: helpers.root('dist/'),
      pathinfo: false   // Add path info beside module numbers in source code. Do not set to 'true' in production. http://webpack.github.io/docs/configuration.html#output-pathinfo
    },

    module: {
      rules: []
    },

    /*
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [

      // Prints more readable module names in the browser console on HMR updates
      new webpack.NamedModulesPlugin()
    ],

    /*
     * Options affecting the resolving of modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve
     */
    resolve: {
      /*
       * An array of extensions that should be used to resolve modules.
       *
       * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
       * See: https://gist.github.com/sokra/27b24881210b56bbaff7#resolving-options
       */
      extensions: jsExtensions,

      // An array of directory names to be resolved to the current directory
      modules: [helpers.root('src/'), 'node_modules']
    },


    // Output stats to provide more feedback when things go wrong:
    stats: {
      colors: true,
      modules: true,
      reasons: true
    },

    /*
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.js.org/configuration/node/
     */
    node: {
      global: true,
      crypto: 'empty',
      process: false,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };


  /*
   * Loader options (for backwards compatibility)
   * See https://webpack.js.org/guides/migrating/#loaderoptionsplugin-context
   * E.g. https://github.com/jtangelder/sass-loader/issues/285
   */
  let LOADER_OPTIONS = Object.assign(
    {options: {
      context: config.context
    }},
    mergeOptions.loaderOptions
  );
  /* **/

  /** Entry point START **/

  config.entry = {
    'testHarness': [
      './modules/testHarness/testHarness.js'
    ],
    'light': [
      './modules/testHarness/styles/light.styl'
    ],
    'dark': [
      './modules/testHarness/styles/dark.styl'
    ],
    'dark2': [
      './modules/testHarness/styles/dark2.styl'
    ],
    'component': [
      './modules/stylesheetSwitcher/stylesheetSwitcher.html'
    ]
  };


  /** Entry point END **/

  /** JS START */


  let srcLoader = {
    test: helpers.pathRegEx(/src\/.*\.(js|jsx)$/),
    use: [
      {
        'loader': 'babel-loader',
        'options': {
          'cacheDirectory': true
        }
      }
    ],
    exclude: moduleDirectories    // There should be no need to exclude unit or browser tests because they should NOT be part of the source code dependency tree
  };
  config.module.rules.push(srcLoader);

  /* **/

  /** Assets START **/
    // Output module-assets to: /assets/<moduleName>/font/<fileName>
  // Other assets (such as assets in Bootstrap) will need their own loaders
  // File-loader still uses the older Webpack 1 syntax.
  let fontLoader = {
    test: helpers.pathRegEx(/assets\/font\/.*\.(eot|otf|svg|ttf|woff|woff2)$/),
    loader: 'file-loader?name=assets/[1]/font/[2].[hash:8].[ext]&regExp=' + helpers.pathRegEx('modules/(.*)/assets/font/(.+?)(.[^.]*$|$)')
  };
  config.module.rules.push(fontLoader);
    // Output module-assets to: /assets/<moduleName>/img/<fileName>
  // Other assets (such as assets in Bootstrap) will need their own loaders
  // File-loader still uses the older Webpack 1 syntax.
  let imgLoader = {
    test: helpers.pathRegEx(/assets\/img\/.*\.(gif|ico|jpe?g|png|svg|webp)$/),
    loader: 'file-loader?name=assets/[1]/img/[2].[hash:8].[ext]&regExp=' + helpers.pathRegEx('modules/(.*)/assets/img/(.+?)(.[^.]*$|$)')
  };
  config.module.rules.push(imgLoader);
    // Output module-assets to: /assets/<moduleName>/media/<fileName>
  // Other assets (such as assets in Bootstrap) will need their own loaders
  // File-loader still uses the older Webpack 1 syntax.
  let mediaLoader = {
    test: helpers.pathRegEx(/assets\/media\/.*\.(mp4|webm|wav|mp3|m4a|aac|oga)$/),
    loader: 'file-loader?name=assets/[1]/media/[2].[hash:8].[ext]&regExp=' + helpers.pathRegEx('modules/(.*)/assets/media/(.+?)(.[^.]*$|$)')
  };
  config.module.rules.push(mediaLoader);


  /* **/

  /** CSS START **/
  const ExtractTextPlugin = require('extract-text-webpack-plugin');
    // Pass postCSS options onto the (temporary) loaderOptions property
  const autoprefixer = require('autoprefixer');
  let supportedBrowsers = {
    browsers: [
      'last 1 version'
    ]
  };
  LOADER_OPTIONS.options.postcss = [
    autoprefixer(supportedBrowsers)
  ];

  // If we are in development, we want live reloading for our CSS. So we cannot use ExtractTextPlugin
  // (see https://github.com/css-modules/webpack-demo/issues/8#issuecomment-135647584 and
  // https://ihaveabackup.net/article/sass-with-sourcemaps-webpack-and-live-reload)
  let cssLoader;
  let cssLoaderOptions = {};

  if (METADATA.ENV === 'development') {
    // If you use the 'sourceMap' option with the css-loader, it has trouble resolving 'url(...)' properties in the CSS,
    // meaning your fonts may not show up.
    cssLoaderOptions.sourceMap = METADATA.cssSourceMap;
    cssLoader = {
      test: helpers.pathRegEx(/\.(styl)$/),
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader', options: {sourceMap: METADATA.cssSourceMap}},
        {loader: 'postcss-loader'},
        {loader: 'stylus-loader', options: cssLoaderOptions}
      ]
    };
  } else {
    // ExtractTextPlugin still uses the older Webpack 1 syntax. See https://github.com/webpack/extract-text-webpack-plugin/issues/275
    cssLoader = {
      test: helpers.pathRegEx(/\.(styl)$/),
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader!postcss-loader' + helpers.getLoaderQueryStr('stylus-loader', cssLoaderOptions),
        publicPath: '../'   // This is relative to 'extractCSSTextPlugin.filename' below.
      })
    };

    // For any entry-point CSS file definitions, extract them as text files as well
    let extractCSSTextPlugin = new ExtractTextPlugin({
      filename: 'css/[name].css',     // This affects the cssLoader.loader.publicPath (see above)
      allChunks: true
    });
    config.plugins.push(extractCSSTextPlugin);
  }
  config.module.rules.push(cssLoader);
  /* **/

  /** HTML START */
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  let indexHtmlPlugin = new HtmlWebpackPlugin({
    template: helpers.root('src/index-template.html'),
    filename: 'index.html',
    title: METADATA.title,
    chunksSortMode: 'dependency',
    metadata: METADATA,   // Becomes available in the template as 'options.metadata'
    inject: false         // We want full control over where we inject the CSS and JS files
  });
  config.plugins.push(indexHtmlPlugin);


  let htmlLoader = {
    test: /\.html?$/,
    use: [
      {
        loader: 'html-loader'
      }
    ],
    exclude: /index-template.html$/
  };
  config.module.rules.push(htmlLoader);



  /* **/

  /** Server - DEV - START */
  const yaml = require('js-yaml');
  const fs = require('fs');   // path is declared elsewhere
  const confitConfig = yaml.load(fs.readFileSync(path.join(process.cwd(), 'confit.yml')))['generator-confit'];  // Try to keep the code lively! If confit.json changes, this code still works.

  const HOST = process.env.HOST || confitConfig.serverDev.hostname;
  const PORT = Number(process.env.PORT || confitConfig.serverDev.port);

  /**
   * Webpack Development Server configuration
   * Description: The webpack-dev-server is a little node.js Express server.
   * The server emits information about the compilation state to the client,
   * which reacts to those events.
   *
   * See: https://webpack.github.io/docs/webpack-dev-server.html
   */
  config.devServer = {
    contentBase: path.resolve(__dirname, 'dev/'),  // We want to re-use this path
    port: PORT,
    host: HOST,
    https: confitConfig.serverDev.protocol === 'https',
    noInfo: false,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    // CORS settings:
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'accept, content-type, authorization',
      'Access-Control-Allow-Credentials': 'true'
    }
  };
  /* **/

  /** Finalise Config START */
  /**
   * Add additional plugins to the compiler.
   *
   * See: http://webpack.github.io/docs/configuration.html#plugins
   */

  /**
   * Plugin: DefinePlugin
   * Description: Define free variables.
   * Useful for having development builds with debug logging or adding global constants.
   *
   * Environment helpers
   *
   * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
   */
  // NOTE: when adding more properties make sure you include them in custom-typings.d.ts
  const DefinePlugin = require('webpack/lib/DefinePlugin');

  let definePlugin = new DefinePlugin({
    'ENV': JSON.stringify(METADATA.ENV),
    'HMR': METADATA.HMR,
    'process.env': {
      'ENV': JSON.stringify(METADATA.ENV),
      'NODE_ENV': JSON.stringify(METADATA.ENV),
      'HMR': METADATA.HMR,
    }
  });

  config.plugins.push(definePlugin);

  /**
   * Plugin LoaderOptionsPlugin (experimental)
   *
   * See: https://gist.github.com/sokra/27b24881210b56bbaff7
   */
  const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

  let loaderOptionsPlugin = new LoaderOptionsPlugin(LOADER_OPTIONS);

  config.plugins.push(loaderOptionsPlugin);
  /* **/


  // To remove content hashes, call helpers.removeHash(config.prop.parent, propertyName, regExMatcher (optional));
  // For example helpers.removeHash(config.output, 'fileName', /\[(contentHash|hash).*?\]/)

  // Modify the config here...
// END_CONFIT_GENERATED_CONTENT


  // Change the htmlLoader implementation to use svelte-loader then babel-loader (svelte doesn't convert ES2015 to ES5)
  htmlLoader.use = ['babel-loader', {
    loader: 'svelte-loader',
    query: {
      mapGeneratedSource: true
    }
  }];


// START_CONFIT_GENERATED_CONTENT
  return config;
}

module.exports.mergeConfig = mergeConfig;
// END_CONFIT_GENERATED_CONTENT
