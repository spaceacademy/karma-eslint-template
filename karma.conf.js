// Karma configuration
// Generated on Tue May 16 2017 20:20:20 GMT-0700 (Pacific Daylight Time)

module.exports = function(config) {
  config.set({

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    files: [
        { pattern: 'test-context.js', watched: false }
    ],


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    	'test-context.js': ['webpack']
    },
    webpack: {
            module: {
                loaders: [
                    { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015' }
                ]
            },
            watch: true
    },

    webpackServer: {
        noInfo: true
    },
  })
}
