const webpack = require('webpack');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { resolve } = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const { nodeModulesPath, rootPath } = require('./constant');

const cache_loader = {
    loader: 'cache-loader',
    options: {
        cacheDirectory: resolve(nodeModulesPath, '.cache'),
    }
};

// scss/css/less处理的共性loader
const cssLoaders = [
    'style-loader',
    'css-loader',
    {
        loader: 'postcss-loader',
        // options: { // 想要自定义路径的时候的配置
        //     postcssOptions: { 
        //         config: resolve(rootPath, 'postcss.config.js'),
        //     }
        // }
    }
];

const webpackBaseCfg = {
    module: {
        rules: [
            // vue单文件的处理
            {
                test: /\.vue$/,
                use: [
                    cache_loader, // 可以提高编译速度
                    {
                    loader: 'vue-loader',
                    options: {
                        compilerOptions: {
                            preserveWhitespace: false // false:去掉标签之间的空格
                        }
                    }
                }],
            },
            {
                test: /\.(js|ts|jsx|tsx)$/,
                // exclude: /node_modules\/(?!(@vant\/cli))/,
                exclude: /node_modules/,
                use: [cache_loader, 'babel-loader'],
            },
            // ccs的处理
            {
                test: /\.css$/,
                sideEffects: true, // ?? 有何作用
                use: cssLoaders,
            },
            // less的处理
            {
                test: /\.less$/,
                sideEffects: true,
                use: [...cssLoaders, 'less-loader']
            },
            // scss的处理
            {
                test: /\.scss$/,
                sideEffects: true,
                use: [...cssLoaders, {
                    loader: 'sass-loader',
                    options: { 
                        implementation: require('sass'), // 使用dart-sass来解析，不用node-sass
                    }
                }]
            }
            // {
            //     test: /\.md$/,
            //     use: []
            // }
        ]
    },
    plugins: [
        // 暂不知道为什么暴露这2个 ???有何作用
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: 'true',
            __VUE_PROD_DEVTOOLS__: 'false',
        }),
        new VueLoaderPlugin(),
        new FriendlyErrorsWebpackPlugin({
            // quiet: true,
            // clearConsole: false,
            // logLevel: 'WARNING',
        }),
        new ForkTsCheckerPlugin({
            typescript: {
                extensions: {
                    vue: {
                        enabled: true,
                        compiler: '@vue/compiler-sfc',
                    },
                },
            },
            logger: {
                issues: {
                    // skip info message
                    log() {},
                    warn(message) {
                        console.warn(message);
                    },
                    error(message) {
                        console.error(message);
                    },
                },
            },
        })
    ],
    // webpack5的持久化缓存
    cache: {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
    }
};

module.exports = webpackBaseCfg;