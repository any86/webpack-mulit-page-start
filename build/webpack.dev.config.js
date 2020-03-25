const path = require('path');
const base = require('./webpack.base.config');
const merge = require('webpack-merge');
module.exports = merge(base, {
    mode: 'development',
    devtool: "cheap-module-eval-source-map",
    devServer: {
        before(app, server, compiler) {
            const watchFiles = ['.html', '.pug'];

            compiler.hooks.done.tap('done', () => {
                const changedFiles = Object.keys(compiler.watchFileSystem.watcher.mtimes);
                if (
                    this.hot &&
                    changedFiles.some(filePath => watchFiles.includes(path.parse(filePath).ext))
                ) {
                    server.sockWrite(server.sockets, '🚀content-changed');
                }

            })
        },
        // contentBase: path.join(__dirname,'../', "dist"),
        compress: true,
        port: 8080,
        hot: true,
        index: 'index.html',
        open: true
    }
});