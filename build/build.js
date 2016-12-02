require('shelljs/global');
var fs = require('fs');
var path = require('path');
const ora = require('ora');
const spinner = ora('编译...');
var webpack = require('webpack');
var webpackConfig = require('./webpack.prod.conf.js');

// 编译开始
spinner.start();
rm('-rf', './dist/');
webpack(webpackConfig, function(err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        timings: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
});