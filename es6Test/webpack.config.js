const path = require('path');
const webpack = require('webpack');
const entries = require('./build/entry');
const htmlPluginList = require('./build/genhtml')();


const webpackConfig = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, 'dist/js'), // string
        // publicPath: 'dist/static',
        filename: '[name].js', // string
    },

    cache: true,

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
            }
            /*{
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src'),
                ]
            }*/
        ],
    },
    plugins: [
        ...htmlPluginList
    ]
};


module.exports = webpackConfig;