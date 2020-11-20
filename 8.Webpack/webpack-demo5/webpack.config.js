const path = require("path");
//1,引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'none',//"development" | "production" | "none"
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, './dist/'),
        filename: 'bundle.js'
    },
    // 实时重新加载
    devServer: {
        contentBase: './dist'
    },
    // 2，配置插件
    plugins: [
        new HtmlWebpackPlugin({
            // 指定打包的模板页面
            // 将 index.html 打包到 bundle.js 所在目录中 
            // 同时也会在 index.html 中自动的 <script> 引入 bundle.js 
            template: './index.html'
        })
    ],
    module: {//模块
        rules: [//规则
            {
                test: /\.css$/,//正则表达式，匹配.css文件资源
                use: [//使用的loader
                    'style-loader',//让js识别css
                    'css-loader'//css转换js
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}