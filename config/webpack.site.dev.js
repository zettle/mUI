const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const { resolve } = require('path');

const webpackBaseCfg = require('./webpack.base.cfg');
const { srcPath, sitInfo, mobileInfo } = require('./constant');

/**
 * 将 webpack.base.cfg.js 和 webpack.sit.dev.js 合并
 */
function getSiteDevConfig () {
    return merge(webpackBaseCfg, {
        mode: 'development',
        entry: {
            'site-desktop': resolve(srcPath, 'site/desktop/main.js'),
            'site-mobile': resolve(srcPath, 'site/mobile/main.js'),
        },
        resolve: {
            extensions: [
                '.js',
                '.jsx',
                '.vue',
                '.ts',
                '.tsx',
                '.css',
                '.less',
                '.scss'
            ]
        },
        devServer: {
            port: 8080,
            host: '0.0.0.0'
        },
        output: {
            chunkFilename: '[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: sitInfo.title,
                description: sitInfo.description,
                chunks: ['chunks', 'site-desktop'],
                template: resolve(srcPath, 'site/desktop/index.html'),
                filename: 'index.html'
            }),
            new HtmlWebpackPlugin({
                title: mobileInfo.title,
                description: mobileInfo.description,
                chunks: ['chunks', 'site-mobile'],
                template: resolve(srcPath, 'site/mobile/index.html'),
                filename: 'mobile.html'
            })
        ]
    });
}

module.exports = { getSiteDevConfig };