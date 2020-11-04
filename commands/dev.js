const chalk = require('chalk');
const address = require('address');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { getPort } = require('portfinder');

const { getSiteDevConfig } = require('../config/webpack.site.dev');

const config = getSiteDevConfig();
console.log('=======');
console.log(config);
console.log('=======');

/**
 * 控制台打印端口
 * @param {number} port 端口
 */
function logServerInfo (port) {
    const local = `http://localhost:${port}/`;
    const network = `http://${address.ip()}:${port}/`;
    console.log('\n  浏览器访问:\n');
    console.log(`  ${chalk.bold('Local')}:    ${chalk.hex('#07c160')(local)} `);
    console.log(`  ${chalk.bold('Network')}:  ${chalk.hex('#07c160')(network)}`);
}

/**
 * @param {number} port 端口
 * @param {config} webpack的配置
 */
function runDevServer(port, config) {
    const server = new WebpackDevServer(webpack(config), config.devServer);
    server.listen(port, config.devServer.host, (err) => { // 启动服务
        if (err) {
          console.log(err);
        }
    });
}

/**
 * 1. 获取可用端口号
 * 2. 在控制台打印出ip+端口
 * 3. 运行webpack
 */
function watch() {
    getPort({ port: config.devServer.port }, (err, port) => {
        if (err) {
            console.log(err);
            return;
        }
    
        logServerInfo(port);
        runDevServer(port, config);
    });
}
watch(); // 开启监听