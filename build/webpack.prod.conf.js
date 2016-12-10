var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 遍历html, 生成入口名
var get_entry = function(dir, cb) {
        fs.readdirSync(dir).forEach(function(file) {
            var pathname = path.join(dir, file);
            if (fs.statSync(pathname).isFile() && -1 < file.indexOf('js')) {
                cb(file.replace('.js', ''));
            }
        });
    }
    // 生成入口
var entrys = {}
var plugins = [
    // Webpack 1.0 
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling 
    // new webpack.optimize.OccurrenceOrderPlugin(), 
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('css/[name].min.css'),
    new webpack.DefinePlugin({
        ENV: 'prod',
        CODE_ENV: 1
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
];

get_entry('./src/js/', entry => {
    entrys[entry] = ['./src/js/' + entry + '.js'];

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
        path: path.join(__dirname, '../dist'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        publicPath: '../', //模板、样式、脚本、图片等资源对应的server上的路径
        filename: 'js/[name].min.js', //每个页面对应的主js的生成配置
        chunkFilename: 'js/[id].chunk.js' //chunk生成的配置
    },
    devtool: "source-map", 
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.scss$/i, loader: ExtractTextPlugin.extract(['css?modules?sourceMap', 'sass?sourceMap', 'postcss']) },
            { test: /\.css$/i, loader: ExtractTextPlugin.extract(['css?modules?sourceMap', 'postcss']) }, {
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
            }
        ]
    },
    postcss: function() {
        return [require('autoprefixer')({ browsers: ['last 2 versions'] })];
    },
    plugins: plugins
};
