/**
 * @file webpack 生产环境配置
 * @author leon <lupengyu@baidu.com>
 */

const webpack = require('webpack');

const config = {
    entry: [
        './src/index'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style'
                + '!css-loader'
                + '?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
        }, {
            test: /\.png|\.svg$/,
            loaders: ['file-loader']
        }]
    },
    output: {
        path: __dirname + '/dist',
        publicPath: './dist/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'cheap-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};


module.exports = config;
