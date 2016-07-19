/**
 * @file 测试服务器
 * @author leon <lupengyu@baidu.com>
 */

import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from './webpack.dev.js';

const compiler = webpack(config);
const app = express();

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname));

app.listen(9000);
