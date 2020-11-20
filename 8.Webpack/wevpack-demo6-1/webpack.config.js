const path = require('path');
//引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack');
module.exports = {
    mode: 'none',//"development" | "production" | "none"
    // 入口
    entry: './src/main.js',
    // 出口
    output: {
        path: path.join(__dirname, './dist/'),//打包的结果文件储存目录
        filename: 'bundle.js'//打包的结果文件名
    },
    // 配置插件
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            // 指定要打包的模板页面
            // 就会将index.html打包到bundle.js所在的同一目录下
            // 同时也会在 index.html 中自动的 <script> 引入 bundle.js 
            template: './index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {

        rules: [
            {
                test: /\.css$/,//正则表达式，匹配.css文件资源
                use: [ //shiy9ong的loader，注意顺序不要错了
                    'style-loader',//js识别css
                    'css-loader' //css 转换为js
                ]
            },
            //打包图片资源
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,//排除的目录
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    //实时重新加载
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    // resolve:{
    //     alias:{
    //         'vue$':'vue/dist/vue.js'
    //     }
    // }

}