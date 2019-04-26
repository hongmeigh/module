const path = require('path');

module.exports = {
    //'common': path.join(__dirname, '../src/js/common.js'),
    //'index': path.join(__dirname, '../src/js/index.js'),
    'symbol': path.join(__dirname, '../src/js/symbol.js'),
    'proxy': path.join(__dirname, '../src/js/proxy.js'),
    'refl': path.join(__dirname, '../src/js/refl.js'),
    'generator': path.join(__dirname, '../src/js/generator.js'),
    // 'async': path.join(__dirname, '../src/js/async.js')，
    'async': path.join(__dirname, '../src/pages/Async.jsx')
}