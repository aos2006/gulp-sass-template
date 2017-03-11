const path = require('path');
const webpack = require('webpack');
const isDebug = global.DEBUG === false ? false : !process.argv.includes('--release');
const isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v');


// Webpack configuration (main.js => public/dist/main.{hash}.js)
// http://webpack.github.io/docs/configuration.html
const config = {

  // The base directory for resolving the entry option
  context: __dirname,
  entry: [
    './src/blocks/main.js'
  ],

  // The entry point for the bundle
  //entry: [
  //  './src/pages/main.js',
  //],

  // Options affecting the output of the compilation
  output: {
    path: path.resolve(__dirname, './build/js'),
    publicPath: '/build/js',
    filename: isDebug ? '[name].js?[hash]' : '[name].[hash].js',
    sourcePrefix: '  '
  },

  // Switch loaders to debug or release mode

  // Developer tool to enhance debugging, source maps
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: isDebug ? 'source-map' : false,

  // What information should be printed to the console
  stats: {
    colors: true,
    reasons: isDebug,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, './src'),
        ],
        loader: `babel-loader`,
      },
    ]
  }
};

// Optimize the bundle in release (production) mode
if (!isDebug) {
  config.plugins.push(new webpack.optimize.DedupePlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: isVerbose } }));
  config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
}

module.exports = config;
