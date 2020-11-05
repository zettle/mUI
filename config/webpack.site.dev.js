const WebpackBar = require('webpackbar');
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
        mode: 'development', // development production
        entry: {
            'site-desktop': resolve(srcPath, 'site/desktop/main.ts'),
            'site-mobile': resolve(srcPath, 'site/mobile/main.ts'),
        },
        resolve: {
            extensions: [
                '.js',
                '.jsx',
                // 到了集成ts进去后，在 `shims-vue.d.ts` 上声明.vue文件的类型，然后再引入的时候不要省略.vue后缀，就可以让ts很好的识别
                // 所以这里就不要省略了
                // '.vue', 
                '.ts',
                '.tsx',
                // 对于css这种文件，不要省略后缀名，这样更好的一眼看出
                // '.css',
                // '.less',
                // '.scss'
            ]
        },
        devServer: {
            port: 8080,
            host: '0.0.0.0',
            quiet: true, // ?? 有何作用
            stats: "errors-only", // ?? 有何作用
            publicPath: "/", // ?? 有何作用
            disableHostCheck: true // ?? 有何作用
        },
        output: {
            chunkFilename: '[name].js'
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    chunks: {
                        chunks: 'all',
                        minChunks: 2,
                        minSize: 0,
                        name: 'chunks',
                    }
              }
            }
        },
        plugins: [
            // 构建进度条
            new WebpackBar({
                name: 'my mUI',
                color: '#07c160',
            }),
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