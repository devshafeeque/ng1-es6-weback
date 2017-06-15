// Karma configuration
var path = require('path');
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      {
        pattern: 'test-context.js',
        watched: false
      }
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test-context.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        },
        {
          test: /\.css$/,
          loader: 'file-loader?name=[path][name].[ext]'
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          loader: 'file-loader?name=/assets/images/[name].[ext]'
        },
        {
          test: /\.(html)$/,
          loader: 'file-loader?name=[path][name].[ext]'
        },
        {
          test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
          loader: 'file-loader?name=[name].[ext]&publicPath=../fonts/&outputPath=/assets/fonts/'
        },
        {
          test: /\.(json)$/,
          loader: 'file-loader?name=[path][name].[ext]'
        },
        {
          enforce: 'pre',
          test: /^((?!(spec|run|trendchart-item.component)).)*\.js$/,
          include: path.resolve('app/'),
          loader: 'istanbul-instrumenter-loader',
          query: {
            esModules: true
          }
        },
        {
          test: /\.scss$/,
          loader: 'file-loader?name=[path][name].[ext]'
        }
        ]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'html'],

    coverageReporter: {
      reporters: [{
        type: 'html',
        dir: 'coverage/'
      },
      {
        type: 'text-summary'
      }
      ]
    },
    htmlReporter: {
      outputDir: 'karma_html', // where to put the reports
      templatePath: null, // set if you moved jasmine_template.html
      focusOnFailures: true, // reports show failures on start
      namedFiles: false, // name files instead of creating sub-directories
      pageTitle: null, // page title for reports; browser info by default
      urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
      reportName: 'report-summary-filename', // report summary filename; browser info by default

      // experimental
      preserveDescribeNesting: false, // folded suites stay folded
      foldAll: false // reports start folded (only with preserveDescribeNesting)
    },
    plugins: [
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-jasmine',
      'karma-webpack',
      'karma-ng-html2js-preprocessor',
      'karma-html-reporter',
      'karma-sourcemap-loader'
    ],
    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
