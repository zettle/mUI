# 开发组件

基于vue@3开发的组件库

## 依赖
- [chalk](https://www.npmjs.com/package/chalk): 美化控制台输出
- [address](https://www.npmjs.com/package/address): 获取本地IP地址
- [portfinder](https://blog.csdn.net/adley_app/article/details/97390680): 获取可用端口号
- [webpack](https://www.webpackjs.com/): 解析webpack配置
- [webpack-dev-server](https://www.webpackjs.com/configuration/dev-server/): 启动server服务
- [html-webpack-plugin](https://www.webpackjs.com/plugins/html-webpack-plugin/): webpakc插件，生成html
- [webpack-merge](https://www.cnblogs.com/cczlovexw/p/11765571.html): 合并webpack配置
- [vue-loader](https://loulanyijian.github.io/vue-loader-doc-Chinese/): 解析vue单文件 




## 遇到的问题

### 1. 解析vue单文件

安装依赖: `npm i -D vue-loader@16.0.0-beta.10 @vue/compiler-sfc`

> vue-loader@16以上的才是解析vue@3的，同时需要搭配 `@vue/compiler-sfc` 一起用

配置webpack
```js
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
```

### 2. 解析css

安装: `npm i -D style-loader css-loader postcss-loader autoprefixer`

在根目录新建 `postcss.config.js` 内容如下:
```js
module.exports = {
    plugins: {
        autoprefixer: {},
    }
};
```
提示 `Error: PostCSS plugin autoprefixer requires PostCSS 8.`。

经过查看原来autoprefixer安装的版本是`@10`。而node_modules里面的postcss版本是`@7`

解决方式是降低 `autoprefixer` 版本或者提高`postcss` 的版本。执行`npm i autoprefixer@8` 或者 `npm i postcss@8`


### 2. 解析less
解析less，只需要在上面处理css之前加上下面less-loader的处理即可

安装: `npm i -D less less-loader`

修改webpack配置
```js
// /config/webpack.base.cfg.js
{
    test: /\.less$/,
    sideEffects: true,
    use: [...cssLoaders, 'less-loader']
}
```

### 3. 解析scss
解析scss，我们推荐使用dart-sass来编译sass，速度很快，不要搞node-sass环境
安装: `npm i -D sass sass-loader`

修改webpack配置
```js
// /config/webpack.base.cfg.js
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
```


### 4. 解析js|ts|jsx|tsx
使用babel来解析js和ts等文件

安装: `npm i -D babel-loader @babel/core @babel/plugin-transform-runtime babel-plugin-import @vue/babel-plugin-jsx @babel/plugin-transform-object-assign @babel/preset-env @babel/preset-typescript`

编辑`babel.config.js` 内容如下:
```js
module.exports = {
    presets: [
        [ '@babel/preset-env', { loose: true, modules: false } ],
        '@babel/preset-typescript'
    ],
    plugins: [
        [ '@babel/plugin-transform-runtime', { corejs: false, useESModules: true } ],
        [ 'import', { libraryName: 'vant', libraryDirectory: 'es', style: true }, 'vant' ],
        '@vue/babel-plugin-jsx',
        '@babel/plugin-transform-object-assign'
    ]
};
```