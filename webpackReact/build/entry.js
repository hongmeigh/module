const path = require('path');
const page = path.join(__dirname, '../src/pages/');

module.exports = {
    'index': path.join(page, 'index/Main.jsx'),
    //'info': path.join(page, 'info/main.jsx'),
    /* common */
    // 'common': [
    //     '@lingshou/watermark',
    //     'vue',
    //     'vue-router',
    //     'element-ui',
    //     'js-cookie',
    //     'moment',
    //     'whatwg-fetch'
    // ]
};
