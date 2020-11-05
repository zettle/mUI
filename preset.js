// 如何自定义自己的preset https://babel.docschina.org/docs/en/presets
// 配置相关文章: https://juejin.im/post/6844903911246004237
module.exports = api => {
    if (api) {
        api.cache.never();  // 不要缓存此配置，每次都重新执行函数
    }
    console.log('============');
    console.log('============');
    console.log('process.env', process.env);
    console.log('============');
    console.log('============');
    return {};
}
