/* 
*   在这个文件中设置我们自定义的打包规则
*   common.js 模块规范
* 1、所有的规则都写在 module.export={}中
*/
let path = require('path');
let HtmlWwebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 配置环境 production  // 不压缩 development
    mode: 'production',
    // 入口
    entry: './js/index.js',
    // 出口
    output: {
        // 输出的文件名
        filename: 'bundle.min.js',
        // 输入的目录必须是绝对路径
        path: path.resolve(__dirname, 'build')
    },
    // 关于 webpack-dev-server 的一些配置  执行命令： 
    // webpack-dev-server --congig xxx.js
    devServer: {
        // prot: 3000, // 创建服务指定的端口号
        // progress: true,  // 显示打包编译的进度
        contentBase: './build',// 指定当前服务处理资源的目录
        // open: true // 编译完成之后自动打开浏览器
    },
    plugins: [
        new HtmlWwebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true,
                removeEmptyAttributes: true
            }
        })
    ]
}