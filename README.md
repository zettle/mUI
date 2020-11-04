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