const { VueLoaderPlugin } = require('vue-loader');

const webpackBaseCfg = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        compilerOptions: {
                            preserveWhitespace: false,
                        }
                    }
                }],
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};

module.exports = webpackBaseCfg;