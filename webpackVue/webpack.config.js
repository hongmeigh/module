const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlPluginList = require('./build/lib/genhtml')();
const entries = require('./build/entry');
const env = require('./build/lib/env');

console.info(`Using profile ${env}`);

const isProduct = (env === 'product');

module.exports = {
    mode: isProduct ? 'production' : 'development',
    entry: entries,
    output: {
        path: path.resolve(__dirname, 'dist', 'static'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                },
                include: [
                    path.resolve(__dirname, 'src')
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')()]
                        }
                    },
                    'less-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.woff|ttf|woff2|eot$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|svgz)(\?.+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 2000
                }
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@element-ui-style': 'element-ui/lib/theme-chalk/index.css',
            '@permission': path.resolve(__dirname, 'src/lib/permission.js'),
            '@app': path.resolve(__dirname, 'src/modules/app.vue'),
            '@constants': path.resolve(__dirname, 'src/lib/constants.js'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@api': path.resolve(__dirname, 'src/apis/'),
            '@lib': path.resolve(__dirname, 'src/lib/'),
            '@page': path.resolve(__dirname, 'src/pages/'),
            '@vo': path.resolve(__dirname, 'src/vo/'),
            '@less': path.resolve(__dirname, 'src/less/'),
            '@modules': path.resolve(__dirname, 'src/modules/'),
        },
        modules: [path.resolve(__dirname, 'node_modules')]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
        new webpack.DefinePlugin({
            'DIST_ENV': JSON.stringify(env),
            'process.env': {
                'DIST_ENV': JSON.stringify(env),
                'NODE_ENV': JSON.stringify(isProduct ? 'production' : 'development')
            },
        }),
        new MiniCssExtractPlugin('[name].css'),
        ...htmlPluginList
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    name: 'common',
                    chunks: 'initial',
                    minChunks: 5
                }
            }
        }
    }
};
