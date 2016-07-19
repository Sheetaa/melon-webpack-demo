/**
 * @file webpack 开发配置
 * @author leon <lupengyu@baidu.com>
 */

const webpack = require('webpack');
const nib = require('nib');

const config = {
    entry: [
        'webpack-hot-middleware/client?reload=true&path=http://localhost:9000/__webpack_hmr',
        './src/index'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.styl$/,
            loader: 'style!css!stylus?paths=node_modules&resolve url'
        }, {
            test: /\.(svg|eot|ttf|woff)(\?.*)?$/,
            loader: 'file'
        }]
    },
    output: {
        path: __dirname + '/dist',
        publicPath: 'http://localhost:9000/dist/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', 'styl']
    },
    devtool: 'cheap-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    stylus: {
        use: [nib()]
    }
};


module.exports = config;
