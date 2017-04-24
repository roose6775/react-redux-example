'use strict';

const webpack = require('webpack'),
    path = require('path');

module.exports = [
    {
        name: 'js',
        entry: './app/index.js',
        output: {path: __dirname + '/build', filename: 'bundle.js'},

        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel',
                    exclude: /node_modules/
                }
            ]
        },
        devtool: 'eval-source-map',
        plugins: [
            new webpack.EnvironmentPlugin('NODE_ENV')
        ]
    }
];