const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entries = require('../entry');
const config = require('../../config');

module.exports = () => {
    const chunkNames = Object.keys(entries);

    const htmlList = [];
    for (const chunkName of chunkNames) {
        // 忽略common chunk
        if (chunkName === 'common') {
            continue;
        }

        htmlList.push(new HtmlWebpackPlugin({
            host: config.API_HOST,
            title: 'vue项目',
            inject: true,
            cache: true,
            template: path.join(__dirname, '../../template/index.ejs'),
            filename: '../html/' + chunkName + '.html',
            chunks: ['manifest', 'common', chunkName]
        }))
    }

    return htmlList;
};


