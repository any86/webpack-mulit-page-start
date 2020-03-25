const path = require('path');
const base = require('./webpack.base.config');
const merge = require('webpack-merge');
module.exports = merge(base, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "assets/js/[name].js",
        // publicPath: "./"
    }
});