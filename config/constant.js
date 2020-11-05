const {resolve} = require('path');

const rootPath = process.cwd(); // 项目跟目录
const srcPath = resolve(rootPath, 'src'); // src文件夹绝对路径
const distPath = resolve(rootPath, 'dist'); // dist文件夹绝对路径
const nodeModulesPath = resolve(rootPath, 'node_modules'); 

const sitInfo = {
    title: '桌面端',
    description: 'description description',
};
const mobileInfo = Object.assign({}, sitInfo, {
    title: '移动端'
});

module.exports = { rootPath, srcPath, distPath, sitInfo, mobileInfo, nodeModulesPath };