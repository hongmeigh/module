const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entries = require('./entry');
const Config = {
    API_HOST: 'http://www.intra.im',
    APPNAME: 'app-jupiter-admin'
};

module.exports = () => {
    const chunkNames = Object.keys(entries);
    const htmlList = [];
    for (const chunkName of chunkNames) {
        // 忽略common chunk
        if (chunkName === 'common') {
            continue;
        }
        htmlList.push(new HtmlWebpackPlugin({
            host: Config.API_HOST,
            title: 'js练习',
            inject: true,
            cache: true,
            template: path.join(__dirname, '../template/index.ejs'),
            filename: '../html/' + chunkName + '.html',
            chunks: ['common', chunkName]
        }))
    }

    return htmlList;
};


