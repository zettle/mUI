// 如何自定义自己的preset https://babel.docschina.org/docs/en/presets
// 配置相关文章: https://juejin.im/post/6844903911246004237
module.exports = api => {
    if (api) {
        api.cache.never();  // 不要缓存此配置，每次都重新执行函数
    }
    // 下面先暂时写死，后续在研究怎么用
    // const { BABEL_MODULE, NODE_ENV } = process.env;
    // const isTest = NODE_ENV === 'test';
    // const useESModules = BABEL_MODULE !== 'commonjs' && !isTest;
    const isTest = false;
    const useESModules = true;

    const myConfig =  {
        presets: [
            [
                '@babel/preset-env',
                {
                  loose: true,
                  modules: useESModules ? false : 'commonjs',
                },
            ],
            // vue@2 想要支持jsx用下面的语法: https://blog.csdn.net/qq_43330090/article/details/100143925
            // 而vue@3则需要用plugins: https://github.com/vuejs/jsx-next/blob/HEAD/packages/babel-plugin-jsx/README-zh_CN.md
            // [
            //     '@vue/babel-preset-jsx',
            //     {
            //         functional: false,
            //     },
            // ],
            '@babel/preset-typescript',
        ],
        plugins: [
            [
                '@babel/plugin-transform-runtime',
                { corejs: false, useESModules }
            ],
            // 按需自动按需引入vant组件: https://vant-contrib.gitee.io/vant/next/#/zh-CN/quickstartfang-shi-yi.-zi-dong-an-xu-yin-ru-zu-jian-tui-jian
            [
                'import',
                {
                  libraryName: 'vant',
                  libraryDirectory: useESModules ? 'es' : 'lib',
                  style: true,
                },
                'vant',
            ],
            // vue@3 支持jsx: https://github.com/vuejs/jsx-next/blob/HEAD/packages/babel-plugin-jsx/README-zh_CN.md
            '@vue/babel-plugin-jsx',
            '@babel/plugin-transform-object-assign',
        ]
    };
    // console.log('00000000000');
    // console.log(myConfig.presets);
    // console.log(myConfig.plugins);
    // console.log('00000000000');
    return myConfig;
}
