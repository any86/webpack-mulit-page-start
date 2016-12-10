var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var hotMiddlewareScript = './build/dev-client';

// 遍历html, 生成入口名
var get_entry = function(dir, cb) {
    fs.readdirSync(dir).forEach(function(file) {
        var pathname = path.join(dir, file);
        if (fs.statSync(pathname).isFile() && -1 < file.indexOf('js')) {
            cb(file.replace('.js', ''));
        }
    });
}

// 生成entry和plugin配置
var entrys = {};
var plugins = [
    // Webpack 1.0 
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling 
    // new webpack.optimize.OccurrenceOrderPlugin(), 
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        ENV: 'dev',
        CODE_ENV: 0
    })
];

get_entry('./src/js/', entry => {
    entrys[entry] = ['./src/js/' + entry + '.js', hotMiddlewareScript];

    plugins.push(new HtmlWebpackPlugin({
        // favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
        filename: './view/' + entry + '.html', //生成的html存放路径，相对于path
        template: './src/view/' + entry + '.html', //html模板路径
        inject: 'body', //js插入的位置，true/'head'/'body'/false
        hash: true, //为静态资源生成hash值
        chunks: ['commons', entry], //需要引入的chunk，不配置就会引入所有页面的资源
        minify: {
            removeComments: true, //移除HTML中的注释
            collapseWhitespace: false //删除空白符与换行符
        }
    }));
});

module.exports = {
    entry: entrys,
    output: {
        path: __dirname,
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: "style!css?modules!sass"
        }, {
            test: /\.css$/,
            loader: "style!css?modules"
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'html?interpolate'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: 'img/[name].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: 'fonts/[name].[ext]'
            }
        }]
    },
    plugins: plugins
};
