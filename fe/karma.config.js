// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig (config) {
    config.set({
        frameworks: [
            // Reference: https://github.com/karma-runner/karma-jasmine
            // Set framework to jasmine
            'jasmine'
        ],

        reporters: [
            // Reference: https://github.com/mlex/karma-spec-reporter
            // Set reporter to print detailed results to console
            'progress',

            // Reference: https://github.com/karma-runner/karma-coverage
            // Output code coverage files
            //'coverage'
        ],

        files: [
            // Grab all files in the app folder that contain .spec.
            './test/tests.webpack.js'
            // './node_modules/angular/angular.js',                             // angular
            // './node_modules/angular-mocks/angular-mocks.js',
            // './app/angular-app.js',
            // './app/vending-machine/vending-machine.service.js',                                 // our Users factory// our angular app
            // './app/vending-machine/vending-machine.spec.js'
        ],

        preprocessors: {
            // Reference: http://webpack.github.io/docs/testing.html
            // Reference: https://github.com/webpack/karma-webpack
            // Convert files with webpack and load sourcemaps
            './test/tests.webpack.js': ['webpack']
        },

        browsers: [
            // Run tests using PhantomJS
            'Firefox'
        ],

        singleRun: true,

        // // Configure code coverage reporter
        // coverageReporter: {
        //     dir: 'coverage/',
        //     reporters: [
        //         {type: 'text-summary'},
        //         {type: 'html'}
        //     ]
        // },

        webpack: require('./webpack.config'),

        // Hide webpack build information from output
        webpackMiddleware: {
            noInfo: 'errors-only'
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
    });
};
