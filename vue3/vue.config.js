const path = require('path');
const {name} = require('./package.json');
const resolve = (dir) => path.resolve(__dirname, dir)
const port = 9005;
module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
    filenameHashing: true,
    publicPath: `http://localhost:${port}`,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        disableHostCheck: true,
        port,
        headers: { // 允许跨域
            'Access-Control-Allow-Origin': '*'
        }
    },
    // 自定义webpack配置
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        output: {
            // 子应用打包为umd，commonjs浏览器 node环境
            libraryTarget: 'umd',
            filename: 'vue3.js',
            // 挂载在window上便于访问
            library: 'vue3',
            jsonpFunction: `webpackJsonp_${name}`
        }
    }
}
